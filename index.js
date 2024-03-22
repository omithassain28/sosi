const { ShardingManager } = require('kurasuta');
const { Partials , GatewayIntentBits, Util, ActivityType } = require('discord.js');
const { Guilds, GuildMessages, GuildVoiceStates, GuildMessageReactions, MessageContent, GuildMembers, GuildWebhooks } = GatewayIntentBits;
const { token} = require('./config');
const Client = require('./structures/Client.js');
module.exports = client;
var http = require("http");
http
  .createServer(function (req, res) {
    res.write("king Is Alive");
    res.end();
  })
  .listen(8080);


const clientOptions = {
  allowedMentions: { parse: ["roles"], repliedUser: false },
  restRequestTimeout: 30000,
  partials: [ Partials.Message, Partials.Channel, Partials.Reaction, Partials.User ],
  intents: [ Guilds, GuildVoiceStates, GuildMessages, GuildMessageReactions, MessageContent, GuildMembers, GuildWebhooks ],
  presence: {
    activities: [{ type: ActivityType.Listening, name: "Mairala" }],
    status: "idle",
  }
}

const sharder = new ShardingManager(__dirname + '/app.js', {
	token: token,
	client: Client,
	respawn: true,
	retry: true,
	ipcSocket: 9999,
	clusterCount: 6,
	guildsPerShard: 1000,
	timeout: 30000,
    clientOptions
});

sharder.spawn();

sharder.on('message', message => {
	if (message.type === 'shutdown') {
		if (message.shard === 'all')
			return sharder.clusters.forEach(shard => {
				console.warn('[Kronix] [Shutdown] Destroying shard ' + shard.id);
				shard.kill();

				process.exit();
			});

		console.warn('[Kronix] [Shutdown] Destroying shard ' + message.shard);
		return sharder.clusters.get(message.shard).kill();
	}

	if (message.type === 'reboot') {
		if (message.shard === 'all') {
			console.warn('[Kronix] [Shutdown] Rebooting all shards.');

			sharder.clusters.forEach(s => s.kill());
			return sharder.spawn();
		}

		console.warn('[Kronix] [Shutdown] Rebooting shard ' + message.shard);
		try {
			sharder.clusters.get(message.shard).respawn();
		} catch {
			sharder.restartAll();
		}
	}
});

sharder.on('debug', message => console.log('[Kronix] [Debug] ' + message));
sharder.on('ready', () =>
	console.info('[Kronix] [Cluster] Kronix Cluster ready!')
);

process.on('SIGINT', signal => {
	sharder.clusters.forEach(shard => {
		console.warn('[Kronix] [Shutdown] Destroying shard ' + shard.id);
		shard.kill();
	});
	process.exit();
});

module.exports = sharder;
