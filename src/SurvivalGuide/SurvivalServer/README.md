---
title: 生存服介绍
icon: material-icon-theme:minecraft
next: ./Survival-Main
tag:
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---

生存组是当前周目的主玩法集群：三个子服各管一块事，经 **Velocity** 代理统一进出。社交与聚居在 [主服](./Survival-Main.md)，规模化生电在 [工业服](./Survival-Industry.md)，探索、采集与战斗在 [资源服](./Survival-Resource.md)。

三服后端均为 **[Leaves](https://leavesmc.org/software/leaves) 1.21.8**（由 1.21.4 升上来），难度 **困难**，游戏模式 **生存**，已开 **PVP** 与鞘翅飞行。客户端推荐版本与跨版本兼容见 [更新日志](/Overview/Changelog)。背包、末影箱、经验等由 [HuskSync](/PluginIntroduction/HuskSync) 对齐；西瓜币由 [CoinsEngine](/SurvivalGuide/EconomicSystem/) 单独记账。大厅不在这套同步里。

::: tip 第一次进生存组怎么走

1. 在大厅走传送门，或直接 `/zf` 到主服，先落脚、圈地、熟悉商店与轨道交通。  
2. 缺材料时 `/zyf` 去资源服用 `/rtp` 开荒；打到的东西会跟着背包回主服。  
3. 要做刷怪塔、全自动农场或长期挂机产线时，再 `/gyf` 去工业服选址；大规模机器可先在 [虚空实验室](/ServerIntroduction/GroupServer/Creative/VoidLab.md) 用创造模式验证。

切服别名、冷却与「当前所在服才能用哪些命令」见 [ServerTeleport](/PluginIntroduction/ServerTeleport)。

:::

## 各世界职责一览


| 世界 | 定位 | 适合做什么 | 不要指望什么 |
| --- | --- | --- | --- |
| **[主服](./Survival-Main.md)** | 社交与聚居枢纽 | 基地、领地、玩家商店、轨道交通、社区活动 | 大规模生电、破坏性开采 |
| **[工业服](./Survival-Industry.md)** | 生电与量产 | 刷怪塔、全自动农场、大型机器、假人挂机；世界长期保留 | 当唯一主城、开大商店、当探索图 |
| **[资源服](./Survival-Resource.md)** | 动态探索图 | Terralith / 结构包地形、`/rtp`、富集资源、等级怪与精英区域 | 当长期唯一基地（会重置） |


- **主服**管人怎么住、怎么交易、怎么坐车。规划区、实体数量、流动水都有要求；工业级设施请迁走。
- **工业服**管机器怎么摆、怎么共用。有明确的机器间距，并开放 Leaves 假人与若干生电向机制。
- **资源服**管「去远处挖、打、跑图」。地图会不定期重置；2026-09-05 前后刚重置过一轮，**不保证下次仍用同一种子**。

## 三服共通的东西

下列规则在三个生存子服上一致（大厅除外）。管理组日后若改配置，以游戏内提示为准。


| 项目 | 当前情况 |
| --- | --- |
| 后端 / 难度 | Leaves `1.21.8` / 困难 / 生存 |
| 人数上限 | 每服 50 |
| 视距 / 模拟距离 | 主服 **24 / 12**；工业服、资源服 **16 / 12** |
| 出生点保护 | 关闭（`0`），主城靠领地与规划区，不靠原版保护圈 |
| 背包与进度 | 三服同一套 [HuskSync](/PluginIntroduction/HuskSync) 数据；**坐标不同步**，切服后出现在目标服上次离开的位置 |
| 西瓜币 | 三服同一钱包，新人起始 **10,000🍉**；余额看 `Tab` 或 `/balance` |
| 在线奖励 | **只在主服、工业服**按小时发（见 [赚钱](../EconomicSystem/MakeMoney.md)）；资源服没有挂机发钱 |
| 死亡 | 主服 / 工业服走 [DeathChest](/PluginIntroduction/DeathChest)；资源服一般为死亡不掉落 |
| 语音 | 三服均有 [Simple Voice Chat](/PluginIntroduction/SimpleVoiceChat)；需客户端模组，附近约 **48** 格可听，密语约 **24** 格，可开小组 |
| 坐下 / 躺下 | 三服均有 [GSit](/PluginIntroduction/GSit)：楼梯、半砖、地毯可右键坐，也可用 `/sit`、`/lay` |
| 假人 | 三服 Leaves 均开启 `/bot`，名前缀 `bot_`，上限 **10**，重启后可保留；用法见 [LeavesFakePlayer](/PluginIntroduction/LeavesFakePlayer) |
| 皮肤 | 外置登录与联盟皮肤，说明见 [账号注册](/QuickStart/Register) |


::: warning 切服时请等同步结束

刚进某个生存子服时，动作栏会提示数据对齐，期间指令会被拦住。看到完成后再开箱、丢东西或连续切服，以免出现短暂「空背包」错觉。大厅里的物品**不会**带到生存组。

:::

## 如何切换服务器

在大厅或已开放切服别名的生存子服中，可用自研 Velocity 插件 **ServerTeleport** 的短命令，效果等同于 `/server <后端ID>`：

- `/zf` → 主服（`Survival-Main`）
- `/gyf` → 工业服（`Survival-Industry`）
- `/zyf` → 资源服（`Survival-Resource`）
- `/hub`、`/lobby` → 大厅

大厅里也有通往三个生存子服的 [AdvancedPortals](/PluginIntroduction/AdvancedPortals) 传送门，和命令是同一批后端。别名受**当前所在后端白名单**与约 **3 秒**冷却限制；提示无权或无法切服时，对照 ServerTeleport 页的「按服限制」。

在代理启用 **GlobalChat** 时，可用 `/g on [频道]`、`/g off` 在配置的子服间收发全局聊天，详见 [GlobalChat](/PluginIntroduction/GlobalChat)。

## 卫星地图

平面图用 Dynmap，主服与工业服另有 BlueMap 三维预览：

- [主服 Dynmap](https://map.npucraft.com/dynmap/) · [主服 BlueMap](https://map.npucraft.com/bluemap)
- [工业服 Dynmap](https://map.npucraft.com/dynmap-industry/) · [工业服 BlueMap](https://map.npucraft.com/bluemap-industry)
- [资源服 Dynmap](https://map.npucraft.com/dynmap-resource/)（资源服未部署 BlueMap）

## 文档导航

1. [主服](./Survival-Main.md) — 规划区、领地与商店、轨道交通、死亡箱  
2. [工业服](./Survival-Industry.md) — 机器间距、假人、在线奖励与 [《机器使用手册》](/SurvivalGuide/MachineInstruction/)  
3. [资源服](./Survival-Resource.md) — 重置、结构、战斗、`[/rtp](/PluginIntroduction/RandomTeleport)`；文末衔接 [经济系统](../EconomicSystem/)

```markmap
---
markmap:
  colorFreezeLevel: 2
---

# 生存服

## Survival-Main【主服】

## Survival-Industry【工业服】

## Survival-Resource【资源服】

```
