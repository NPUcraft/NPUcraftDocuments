---
title: 常用命令
icon: flat-color-icons:command-line
author: SUPER2FH
date: 2025-03-20
---




|              命令               |              描述               |                        适用范围                         |
| :-----------------------------: | :-----------------------------: | :-----------------------------------------------------: |
|     `/server <服务器名称>`      | 服务器切换，例如`/server lobby` |                      `所有群组服`                       |
|            `/spawn`             |           返回出生点            |                       `登录大厅`                        |
|              `/zf`              |        前往`生存服-主服`        |          `生存服-工业服`<br />`生存服-资源服`           |
|             `/gyf`              |       前往`生存服-工业服`       |           `生存服-主服`<br />`生存服-资源服`            |
|             `/zyf`              |       前往`生存服-资源服`       |           `生存服-主服`<br />`生存服-工业服`            |
|           `/actoggle`           |  开/关死亡物品回收（800🍉/次）   |           `生存服-主服`<br />`生存服-工业服`            |
|             `/rtp`              |            随机传送             |                     `生存服-资源服`                     |
|          `/balancetop`          |        查看全服经济排名         | `生存服-主服`<br />`生存服-工业服`<br />`生存服-资源服` |
| `/coins give <player> <amount>` |   给`<player>` `<amount>`🍉币    | `生存服-主服`<br />`生存服-工业服`<br />`生存服-资源服` |



::: tip 切服与随机传送

- `/zf`、`/gyf`、`/zyf`、`/hub`、`/lobby` 等为 **Velocity** 上的切服别名，由 [ServerTeleport](/PluginIntroduction/ServerTeleport) 映射到各子服，等价于使用 `/server <后端名>`。  
- `/rtp` 仅在 **生存服-资源服** 由 [RandomTeleport](/PluginIntroduction/RandomTeleport) 提供随机传送；扣费与冷却以游戏内 `/rtp help` 为准。

:::

::: tip 更多指令请查阅[《插件介绍》](/PluginIntroduction/)

:::