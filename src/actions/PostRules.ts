import { community } from "../bot";
import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ContainerBuilder,
  MessageActionRowComponentBuilder,
  SeparatorBuilder,
  SeparatorSpacingSize,
  TextChannel,
  TextDisplayBuilder,
} from "discord.js";
import path from "node:path";
import fs from "node:fs";

async function postRules() {
  const server = community();
  const channel = (await server.channels.fetch(
    "1426920786790191275",
  )) as TextChannel;

  const messages = await channel.messages.fetch({ limit: 1 });
  const lastMessage = messages.first();

  const payload = {
    components,
    flags: "IsComponentsV2" as const,
    allowedMentions: {
      roles: [],
      users: [],
      repliedUser: false,
    },
  };

  if (lastMessage && lastMessage.author.id === channel.client.user!.id) {
    await lastMessage.edit(payload);
  } else {
    await channel.send(payload);
  }
}

const components = [
  new ContainerBuilder()
    .addTextDisplayComponents(
      new TextDisplayBuilder().setContent(readRules("discord")),
    )
    .addActionRowComponents(
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Discord ToS")
          .setEmoji({ name: "📝" })
          .setURL("https://discord.com/terms"),
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Community Guidelines")
          .setEmoji({ name: "🔖" })
          .setURL("https://discord.com/guidelines"),
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Ticket")
          .setEmoji({ name: "🛡️" })
          .setURL(
            "https://discord.com/channels/1426898495230709852/1426918443533471744",
          ),
      ),
    )
    .addSeparatorComponents(
      new SeparatorBuilder()
        .setSpacing(SeparatorSpacingSize.Large)
        .setDivider(true),
    )
    .addTextDisplayComponents(
      new TextDisplayBuilder().setContent(readRules("minecraft")),
    )
    .addActionRowComponents(
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Ticket")
          .setEmoji({ name: "🛡️" })
          .setURL(
            "https://discord.com/channels/1426898495230709852/1426918443533471744",
          ),
      ),
    ),
];

function readRules(name: "discord" | "minecraft"): string {
  return fs.readFileSync(
    path.join(process.cwd(), "src", "data", "rules", `${name}.md`),
    "utf8",
  );
}

export default postRules;