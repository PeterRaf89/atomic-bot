import "dotenv/config";
import { Bot, InlineKeyboard } from "grammy";

const BOT_TOKEN = process.env.BOT_TOKEN;
if (!BOT_TOKEN) throw new Error("Missing BOT_TOKEN environment variable");

const bot = new Bot(BOT_TOKEN);

bot.command("start", async (ctx) => {
  const webAppUrl = process.env.WEBAPP_URL || "https://example.com";

  const kb = new InlineKeyboard().url("Open ATOMIC", webAppUrl);

  await ctx.reply(
    "⚛️ ATOMIC\n\nAtomic execution for Solana memecoins.\n\nTap below to open the app:",
    { reply_markup: kb }
  );
});

bot.command("help", async (ctx) => {
  await ctx.reply("Commands:\n/start\n/help");
});

bot.catch((err) => {
  console.error("Bot error:", err.error);
});

bot.start();
console.log("ATOMIC bot running (long polling)...");
