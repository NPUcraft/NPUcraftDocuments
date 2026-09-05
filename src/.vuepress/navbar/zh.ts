import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/", // 主页
  "/Overview/", // 服务器概览
  "/QuickStart/", // 快速入门
  {
    text: "生存服指南",
    icon: "noto:light-bulb",
    prefix: "/SurvivalGuide/",
    children: [
      "SurvivalServer/",
      "EconomicSystem/",
      "Support/",
    ],
  },
  "/MachineInstruction/",
  "/PluginIntroduction/",
  "/ServerIntroduction/",

  {
    text: "玩家档案",
    icon: "fluent-emoji:busts-in-silhouette",
    link: "/PlayerProfiles/",
  },
  "/Chronicle/",

  // {
  //   text: "NPUskin",
  //   icon: "book",
  //   link: "https://skin.npucraft.com/",
  // },
]);
