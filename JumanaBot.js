const TelegramBot = require('node-telegram-bot-api');

const token = '5068721089:AAGCVJloLvriVVYtRKolbIsZz19H0bkfrYI';

const Jumana = new TelegramBot(token, {polling: true});

Jumana.on(photo , (msg) => {
    const chatId = msg.photo[0].chat.id;

    const image = Jumana.getFile({file: msg.photo[0].file_id});
    co
    // send a message to the chat acknowledging receipt of their message
    Jumana.sendPhoto(chatId, "/home/aws/Projects/Jumana/new");
    
  });