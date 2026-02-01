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
  TextDisplayBuilder
} from "discord.js";

async function postRules() {
  const server = community();
  const channel = (await server.channels.fetch(
    "1426920786790191275",
  )) as TextChannel;

  await channel.bulkDelete(channel.messages.cache);

  await channel.send({
    components: components,
    flags: "IsComponentsV2",
  });
}

const components = [
  new ContainerBuilder()
    .addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        "## Discord Rules\n1. This Discord is a neutral place\n> Racist, homophobic, sexist, and/or religious comments are prohibited\n2. Harassment, threats, or personal attacks against any member are not allowed\n3. Links to fraudulent, pornographic, illegal, or hacking-related websites are prohibited.\n4. Discussion or promotion of illegal activities is forbidden.\n5. Spamming or flooding is not allowed\n> This applies to both text and images.\n6. Advertising or self-promotion without staff permission is prohibited.\n7. Do not bypass filters, punishments, or moderation actions.\n8. Respect staff decisions\n> Arguing with staff members in public channels is not allowed. If you see a staff member abusing powers, open a [ticket](https://discord.com/channels/1426898495230709852/1426918443533471744).\n9. Use channels for their intended purpose.\n10. Follow Discord Terms of Service and Community Guidelines at all times.\n\n> <@&1426921305290313789> and above can decide which punishments to give.\n> We can reduce punishments duration **only in certain** situations by opening a [ticket.",
      ),
    )
    .addActionRowComponents(
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Discord ToS")
          .setEmoji({
            name: "📝",
          })
          .setURL("https://discord.com/terms"),
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Community Guidelines")
          .setEmoji({
            name: "🔖",
          })
          .setURL("https://discord.com/guidelines"),
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Ticket")
          .setEmoji({
            name: "🛡️",
          })
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
      new TextDisplayBuilder().setContent(
        "## Minecraft Rules\n1. All Discord rules apply\n2. No cheating or hacking of any kind\n> This applies in prison as well.\n3. No exploiting\n4. No mod/texture packs that give unfair advantage\n5. No combat logging\n6. Do not swear in hate or anger at anyone\n7. No duping\n\n> Using any kind of automation/cheat/hack in prison will result severe punishments.\n> If you stuck in prison for more than 2 days, open a [ticket](https://discord.com/channels/1426898495230709852/1426918443533471744).",
      ),
    )
    .addActionRowComponents(
      new ActionRowBuilder<MessageActionRowComponentBuilder>().addComponents(
        new ButtonBuilder()
          .setStyle(ButtonStyle.Link)
          .setLabel("Ticket")
          .setEmoji({
            name: "🛡️",
          })
          .setURL(
            "https://discord.com/channels/1426898495230709852/1426918443533471744",
          ),
      ),
    ),
];

export default postRules;
