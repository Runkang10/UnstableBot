import { bot, login } from "./bot";
import postRules from "./actions/PostRules";

bot.once("clientReady", async () => {
  console.log("Ready!");

  await postRules();

  await bot.destroy();
  process.exit(0);
});

login();
