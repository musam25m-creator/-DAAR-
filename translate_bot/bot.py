import asyncio
from aiogram import Bot, Dispatcher, types, F
import logging
from aiogram.filters.command import CommandStart
from aiogram.fsm.context import FSMContext
from aiogram.fsm.state import StatesGroup, State
from aiogram.filters import StateFilter

from deep_translator import GoogleTranslator

from buttons import tarjima_kb, langugaes_kb

logging.basicConfig(level=logging.INFO)

bot = Bot(token="8328332324:AAHXWOApSvH_4Z-vHE4dDbVcXLTPO2kyTOM")
dp = Dispatcher()  


class TarjimaState(StatesGroup):
    qaysi_tildan = State()
    qaysi_tilga = State()
    matn = State()
    


@dp.message(CommandStart())
async def start_handler(message: types.Message):
    await message.answer(f"Assalomu aleykum {message.from_user.full_name}, TARJIMON botga xush kelibsiz")
    await message.answer("Tarjima qilishni boshlash uchun tugmani bosing:", reply_markup=tarjima_kb)

@dp.message(F.text == "🌐 Tarjima qilish")
async def tarjima_start(message: types.Message, state: FSMContext):
    await message.answer("Savolingiz qaysi tilda, kerakli tilni tanlang:", reply_markup=langugaes_kb)
    await state.set_state(TarjimaState.qaysi_tildan)
    

@dp.callback_query(StateFilter(TarjimaState.qaysi_tildan)) 
async def qaysi_tildan_handler(call: types.CallbackQuery, state: FSMContext):
    await state.update_data(qaysi_tildan=call.data)
    await call.message.answer("Endi qaysi tilga tarjima qilasiz, kerakli tilni tanlang:", reply_markup=langugaes_kb)
    await state.set_state(TarjimaState.qaysi_tilga)


@dp.callback_query(StateFilter(TarjimaState.qaysi_tilga)) 
async def qaysi_tilga_handler(call: types.CallbackQuery, state: FSMContext):
    await state.update_data(qaysi_tilga=call.data)
    await call.message.answer("Tillar tanlandi matn savolni kiriting:")
    await state.set_state(TarjimaState.matn)
    

@dp.message(StateFilter(TarjimaState.matn))
async def matn_handler(message: types.Message, state: FSMContext):
    await state.update_data(matn=message.text)
    data = await state.get_data()    
    tildan = data.get("qaysi_tildan")
    tilga = data.get("qaysi_tilga")
    savol = data.get("matn")
    # result = GoogleTranslator(source="uz", target="en").translate(text)
    tarjimasi = GoogleTranslator(source=tildan, target=tilga).translate(savol)
    await message.answer(f"Tarjima qilingan matn: \n\n{tarjimasi}")
    
    
async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":  # kodni ishga tushirish nuqtasi
    asyncio.run(main())
