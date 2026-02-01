import { bot, login } from "./bot";
import postRules from "./actions/PostRules";

bot.once("clientReady", () => {
  console.log("Ready!");

  postRules();
});

login();
