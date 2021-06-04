const discord = require('discord.js')
module.exports = {
    name: 'flip',
    aliases: ['coin'],
    description: '동전뒤집기',
    run: async (client, message, args) => {
        function between(min, max) {
            return Math.floor(
                Math.random() * (max - min + 1) + min
            )
        }
        const Embed = new discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('동전 뒤집기')
            .setDescription('어느게 나왔을까요?')
            .setTimestamp()
            .setFooter('배고프다')

        const num = between(1, 2)
        if(between==1){
            Embed.addField('앞면')
        }
        else{
            Embed.addField('뒷면')
        }
        message.reply(Embed)
    }
}