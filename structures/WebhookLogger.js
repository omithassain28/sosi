const { WebhookClient } = require('discord.js');

const errorLogs = new WebhookClient({ url: 'https://discord.com/api/webhooks/1205476563055943742/Pompatb-X1IYuU6ERKdfT6-YVx5vXyEGAj_mrlu9LpFEqYL0EwmCWRDFezLg_PKBRJvY' });

const guildLogs = new WebhookClient({ url: 'https://discord.com/api/webhooks/1205476563055943742/Pompatb-X1IYuU6ERKdfT6-YVx5vXyEGAj_mrlu9LpFEqYL0EwmCWRDFezLg_PKBRJvY' });

class WebhookLogger {
    constructor(client) {
        this.client = client;
    }

    guild(data) {
        guildLogs.send({content: typeof data === 'string' ? data : '\u200B', embeds: [typeof data === 'object' ? [data] : []]});
      return true;
    };

    error(data) {
        errorLogs.send({content: typeof data === 'string' ? data : '\u200B', embeds: [typeof data === 'object' ? [data] : []]});
      return true
    };

};

module.exports = WebhookLogger;