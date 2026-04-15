from aiogram.types import  ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton


menyu_buttons = ReplyKeyboardMarkupkeyboard = ([
    [KeyboardButton(text='🧑‍🎓 Профиль'), KeyboardButton(text='🪙 Мои монеты')],
    [KeyboardButton(text='💥 Space Shop'), KeyboardButton(text='🏫 О школе')],
    [KeyboardButton(text='✍️ Оставить отзыв')]
])

shop_buttons = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text="Mars Airpods", callback_data="airpods"), InlineKeyboardButton(text="Mars Keyboard", callback_data="keyboard")],
    [InlineKeyboardButton(text="Mars Powerbanck", callback_data="powerbanck"), InlineKeyboardButton(text="Mars iWatch", callback_data="iwatch")],
    [InlineKeyboardButton(text="Mars Keyboard Sticker", callback_data="keyboard sticker"), InlineKeyboardButton(text="Mars Smatrphone", callback_data="smartphone")],
    [InlineKeyboardButton(text="Mars Airpods Max ", callback_data="airpods max"), InlineKeyboardButton(text="Mars Chocolate", callback_data="mars chocolate")],
    [InlineKeyboardButton(text="Mars Sticer", callback_data="mars sticker"), InlineKeyboardButton(text="Mars Notebook", callback_data="notebook")]
])