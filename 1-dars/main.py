import asyncio
from aiogram import Bot, Dispatcher, types
import logging
from aiogram.filters.command import CommandStart
import wikipedia

logging.basicConfig(level=logging.INFO)

bot = Bot(token="7849739079:AAGV9yMQ1Fk-sdVXeeYfL0N7HXw7CfD-tJg")
dp = Dispatcher()  


@dp.message(CommandStart())
async def start_handler(message: types.Message):
    await message.answer("Assalomu aleykum, Wikipedia botga xush kelibsiz")
    await message.answer("Kerakli savolingizni kiriting:")

@dp.message()
async def savol_handler(message: types.Message):
    savol = message.text
    wikipedia.set_lang('uz')
    javob = wikipedia.summary(savol)
    try:
        await message.answer(f"Siz so'ragan savolga javob:\n\n{javob}")
    except:
        await message.answer("Siz so'ragan savolga javob yo'q!")


async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":  # kodni ishga tushirish nuqtasi
    asyncio.run(main())
