import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/Overview/": [
      "",
      "TechnicalArchitecture",
      "Changelog",
    ],
    "/QuickStart/": [
      // "",
      "Environment",
      "Register",
      "BasicCommands",
      "Contribute",
      "HowToAsk",
    ],
    "/SurvivalGuide/": [
        {
            text: "生存服介绍",
            icon: "material-icon-theme:minecraft",
            link: "/SurvivalGuide/SurvivalServer/",
            prefix: "/SurvivalGuide/SurvivalServer/",
            collapsible: false,
            expanded: true,
            children: [
                "Survival-Main",
                "Survival-Industry",
                "Survival-Resource"
            ],
        },
        {
            text: "经济系统",
            icon: "noto:bank",
            link: "/SurvivalGuide/EconomicSystem/",
            prefix: "/SurvivalGuide/EconomicSystem/",
            collapsible: false,
            expanded: true,
            children: [
                "MakeMoney",
                "Residence",
                "Shop"
            ],
        },
        {
            text: "常见问题",
            icon: "fluent-color:notebook-question-mark-20",
            link: "/SurvivalGuide/Support/",
            prefix: "/SurvivalGuide/Support/",
            collapsible: false,
            expanded: true,
            children: [
                "Service",
                "Technical",
            ],
        },
    ],

    "/PluginIntroduction/": "structure",
    "/ServerIntroduction/": "structure",
    "/Chronicle/": "structure",

    "/PlayerProfiles/": "structure",

});
