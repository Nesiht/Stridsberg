const Discord = require('discord.io');
const logger = require('winston');
const auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
let bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        let args = message.substring(1).split(' ');
        let cmd = args[0];
        
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            // Just add any case commands if you want to..
            case 'help':
              bot.sendMessage({
                to: channelID,
                message: 'Please enter you credit card number:'
              });
            break;

            case 'jens':
              bot.sendMessage({
                to: channelID,
                message: 'Should shower!'
              });
            break;

            case 'whosyourdaddy?':
              bot.sendMessage({
                to: channelID,
                message: 'Thisen!'
              });
            break;

            case 'crall':
              bot.sendMessage({
                to: channelID,
                message: 'Har gula tänder!'
              });
            break;

            case 'kul':
              bot.sendMessage({
                to: channelID,
                message: '\:smile:'
              });
            break;
         }
     }
});
