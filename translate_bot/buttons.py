from aiogram.types import ReplyKeyboardMarkup, KeyboardButton, InlineKeyboardMarkup, InlineKeyboardButton


tarjima_kb = ReplyKeyboardMarkup(keyboard=[
    [KeyboardButton(text="🌐 Tarjima qilish")]
])

langugaes_kb = InlineKeyboardMarkup(inline_keyboard=[
    [InlineKeyboardButton(text="🏴󠁧󠁢󠁥󠁮󠁧󠁿 English", callback_data="en"),
     InlineKeyboardButton(text="🇷🇺 Русский", callback_data="ru")],

    [InlineKeyboardButton(text="🇪🇸 Español", callback_data="es"),
     InlineKeyboardButton(text="🇫🇷 Français", callback_data="fr")],

    [InlineKeyboardButton(text="🇩🇪 Deutsch", callback_data="de"),
     InlineKeyboardButton(text="🇨🇳 中文", callback_data="zh-CN")],

    [InlineKeyboardButton(text="🇦🇪 العربية", callback_data="ar"),
     InlineKeyboardButton(text="🇯🇵 日本語", callback_data="ja")],

    [InlineKeyboardButton(text="🇵🇹 Português", callback_data="pt"),
     InlineKeyboardButton(text="🇺🇿 O'zbekcha", callback_data="uz")]
])
