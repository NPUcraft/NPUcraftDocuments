---
title: 登录大厅
icon: fluent-emoji-flat:classical-building
order: 1
category:
  - GroupServer
tag:
  - Lobby
---

登录大厅（`Lobby`）是连上 `mc.npucraft.com` 后的第一站：和平难度，没有下界，出生点附近有传送门和全息说明。后端为 **Paper 1.21.4**，并装了 ViaVersion / ViaBackwards，因此客户端可以用更新日志里写的版本进来。大厅物品**不会**和生存服同步。

::: tip 掉进水里或走丢了

出生点附近全息会提示：掉进水里用 `/spawn`。从生存或其它子服回来用 `/hub`、`/lobby`。

:::

## **怎么去其它服**

大厅中央按方向摆了传送门（[AdvancedPortals](/PluginIntroduction/AdvancedPortals)）。也可以在聊天栏打切服命令。


| 去向 | 门的大致位置 / 触发方块 | 命令 |
| --- | --- | --- |
| [生存主服](/SurvivalGuide/SurvivalServer/Survival-Main.md) | 东侧水门 | `/zf` |
| [生存工业服](/SurvivalGuide/SurvivalServer/Survival-Industry.md) | 东侧下界门 | `/gyf` |
| [生存资源服](/SurvivalGuide/SurvivalServer/Survival-Resource.md) | 东侧末地门 | `/zyf` |
| [虚空实验室](./Creative/VoidLab.md) | 大厅传送门以现场为准 | `/server VoidLab` |
| [船坞](./Creative/Shipyard.md) | 北侧末地折跃门 | `/server Shipyard` |
| [Bingo](./MiniGames/Bingo.md) | 西侧末地折跃门 | `/server Bingo` |
| [街机](./MiniGames/Arcade.md) | 西侧下界门 | `/server GameArcade` |


::: warning 生存门可能要权限

通往生存三服的门带了 `bungeecord.server.survival`。一般正式玩家会有；若提示没权限，在群里说明账号名即可。

:::

## **大厅里能干什么**

- **看公告**：出生点附近有全息（注意、生存组说明、各门简介）。生存组那块会提到版本更新时只保留主服 / 工业服当前存档等规则，以现场文字为准。
- **做任务**：装了 Quests，NPC 由 Citizens 提供。具体任务以游戏内为准。
- **坐下 / 语音**：可用 [GSit](/PluginIntroduction/GSit)；语音需客户端装 [Simple Voice Chat](/PluginIntroduction/SimpleVoiceChat)。
- **跨服聊天**：在代理开了 GlobalChat 时，可用 `/g on`，见 [GlobalChat](/PluginIntroduction/GlobalChat)。

大厅是和平模式且 `force-gamemode` 为开，不会在这里生存发育。世界范围很小（`max-world-size` 约 1000），出生点保护 16 格。

## **和生存组的关系**

大厅**没有** HuskSync。身上的东西进生存服会按生存组数据重载；从生存回来也不会带着矿和装备。西瓜币在大厅插件列表里有 CoinsEngine，但生存组那套商店、领地、小时奖都在生存子服，见 [生存服](./Survival.md)。
