const discord = require('discord.js')
const request = require('request')
module.exports = {
    name: '',
    aliases: [''],
    description: '',
    run: async (client, message, args) => {
        const url = 'https://api.hangang.msub.kr/'
        const hangang = {
            url: url,
            method: 'GET',
        }
        let obj
        request(hangang, function (err, res, body) {
            obj = JSON.parse(body)
        })
        // obj.temp
        const Embed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('한강 수온')
            .addField(`${obj.temp} 도`)
            .setTimestamp()
            .setFooter('배고프다')
        message.reply(Embed)
    }
}