import asyncio
from aiogram import Bot, Dispatcher, types
import logging
from aiogram.filters.command import CommandStart
from aiogram.types import  ReplyKeyboardMarkup, KeyboardButton
from buttons import menyu_buttons, shop_buttons

logging.basicConfig(level=logging.INFO)

bot = Bot(token="8298678983:AAGOIofKdiK-PvBMjBIw2391j04Wftx-f3Y")
dp = Dispatcher()  



@dp.message(CommandStart())
async def start_handler(message: types.Message):
    await message.answer("Assalomu aleykum, Mars IT botga xush kelibsiz", reply_markup = menyu_buttons)

@dp.message()
async def menyu_handler(message: types.Message):
    if message.text == '🧑‍🎓 Профиль':
        await message.answer("Ism: Muhammadmuso\nFamiliya:Hasanov")
    elif message.text == '🪙 Мои монеты':
        await message.answer("Coinlar: 619")
    elif message.text == '💥 Space Shop':
        rasm = types.FSInputFile('uyga vazifa/shop.png')
        await message.answer_photo(photo=rasm)
        await message.answer("Space Shopda siz quyidagi narsalarni sotib olishingiz mumkin:", reply_markup=menyu_buttons)

@dp.callback_query()
async def shop_handler(call: types.CallbackQuery):
    if call.data == 'airpods':
        await call.message.answer_photo(photo="https://assets.asaxiy.uz/product/items/desktop/54229abfcfa5649e7003b83dd47552942024100217562763003osK75qS5mP.jpg.webp")
    elif call.data == 'keyboard':
        await call.message.answer_photo(photo="https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1000__.jpg")
    elif call.data == 'powerbanck':
        await call.message.answer_photo(photo="https://basket-12.wbbasket.ru/vol1710/part171085/171085463/images/c516x688/1.webp")
    elif call.data == 'iwatch':
        await call.message.answer_photo(photo="https://on-off.uz/wp-content/uploads/2025/04/250407140025695614.png")
    elif call.data == 'keyboard sticker':
        await call.message.answer_photo(photo="https://skyrockuae.com/cdn/shop/files/arabic_english.png?v=1730645398")
    elif call.data == 'smartphone':
        await call.message.answer_photo(photo="https://minapi.beemarket.uz/prod-media/productImages/1770697118mTaXkFM3vEJc.webp")
    elif call.data == 'airpods max':
        await call.message.answer_photo(photo="https://main.mobilezone.uz/product-attachment/1/-IW0Uoy77-Thw5rNDMOfbCpF78QVqWTR.jpg")
    elif call.data == 'mars chocolate':
        await call.message.answer_photo(photo="https://candyfunhouse.ca/cdn/shop/products/Candyfunhouse_Mars_Mars_52g-Side-jpg-1.jpg?v=1626104448")
    elif call.data == 'mars sticer':
        await call.message.answer_photo(photo="https://img.hhcdn.ru/employer-logo-round/5922378.jpeg")
    elif call.data == 'notebook':
        await call.message.answer_photo(photo="https://www.astroshop.eu/Produktbilder/zoom/59699_2/AstroReality-MARS-notebook.jpg")

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":  # kodni ishga tushirish nuqtasi
    asyncio.run(main())
