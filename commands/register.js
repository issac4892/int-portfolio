const discord = require('discord.js')
const sqlite = require('sqlite3').verbose
let db = new sqlite.Database('../data.db')
module.exports = {
    name: 'join',
    aliases: ['가입'],
    description: '가입을 한다.',
    run: async (client, message, args) => {
        db.run
        if(){
            message.reply('이미 가입되어있습니다.')
        }
        else {
            db.run(`INSERT INTO data(discordid, money) VALUES(${client.author.id}, '0')`, err)
            if (err) {
                message.reply(`err! ${err}`)
            } else message.reply(`${client.author.name}, 가입이 완료되었습니다!`)
        }
    }
}