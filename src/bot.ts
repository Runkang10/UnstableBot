import { Client } from "discord.js";

const TOKEN = process.env.TOKEN!!;
const COMMUNITY_GUILD = "1426898495230709852";

const bot = new Client({
  intents: [
    "Guilds",
    "GuildMembers",
    "GuildMessages",
    "DirectMessages",
    "MessageContent",
    "GuildPresences",
  ],
});

function login() {
  bot.login(TOKEN);
}

function community() {
  return bot.guilds.cache.get(COMMUNITY_GUILD);
}

export { bot, login, community };
