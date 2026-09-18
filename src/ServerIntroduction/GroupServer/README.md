---
title: 群组服
shortTitle: 群组服
icon: /assets/cos/2025/03/21/67dd117c8bf60.jpg
author: NPUcraft
dir:
  collapsible: false
  link: true
  order: 10
---

群组服用 **Velocity** 把多个后端挂在同一入口：连 `mc.npucraft.com`（备用 `mc2.npucraft.com`）后进入 **登录大厅**，再切到生存、创造或小游戏。客户端版本与跨版本说明见 [更新日志](/Overview/Changelog)。

各子服的背包、经济**不共用一套规则**。生存三服之间由 HuskSync 与西瓜币对齐；大厅、创造服、小游戏各自独立，不要指望把生存装备带进其它子服。

## 子服一览


| 页面 | 后端 ID | 怎么去 |
| --- | --- | --- |
| [登录大厅](./Lobby.md) | `Lobby` | 进服默认位置；其它服用 `/hub`、`/lobby` 回来 |
| [生存服](./Survival.md) | `Survival-Main` / `Survival-Industry` / `Survival-Resource` | `/zf`、`/gyf`、`/zyf` 或大厅传送门 |
| [创造服](./Creative/) | `VoidLab`、`Shipyard` | 大厅对应传送门，或 `/server <后端ID>` |
| [小游戏服](./MiniGames/) | `Bingo`、`HideAndSeek`、`GameArcade` | 大厅对应传送门，或 `/server <后端ID>` |


切服短命令由 [ServerTeleport](/PluginIntroduction/ServerTeleport) 提供；大厅里的门由 [AdvancedPortals](/PluginIntroduction/AdvancedPortals) 触发。

## 实例配置

各实例的核心、内存与视距如下。玩家连的是代理地址，不必也不应直连某一个容器。


| 实例 | 核心 | JVM Xmx | 容器上限 | 视距 / 模拟距离 |
| --- | --- | ---: | ---: | ---: |
| Bingo | Paper 1.21.8 | 4G | 6G | 10 / 10 |
| HideAndSeek | Paper 1.21.4 | 3G | 4G | **24 / 10** |
| Lobby | Paper 1.21.4 | 1G | 2G | 10 / 10 |
| NPUReconstruction-Fabric | Fabric 1.21.8 | 3G | 6G | **32 / 10** |
| Velocity | Velocity | 1G | 2G | — |
| Shipyard | Paper 1.21.11 | 3G | 4G | 16 / 10 |
| Survival-Industry | Paper 1.21.8 | 6G | 8G | 16 / **12** |
| Survival-Main | Paper 1.21.8 | 6G | 8G | **24 / 12** |
| Survival-Resource | Paper 1.21.8 | 6G | 8G | 16 / **12** |

`VoidLab` 为新增创造实例，核心与内存以面板为准，上表暂未列入。
