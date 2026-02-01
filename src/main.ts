import { bot, login } from "./bot";
import { ActivityType } from "discord.js";

bot.once("clientReady", () => {
  console.log("Ready!");

  bot.user?.setPresence({
    status: "online",
    activities: [
      { name: "Streaming Unstable SMP.", type: ActivityType.Streaming },
    ],
  });
});

login();
