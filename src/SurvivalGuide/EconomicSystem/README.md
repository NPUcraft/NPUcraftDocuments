---
title: 经济系统
icon: noto:bank
author: SUPER2FH
date: 2025-03-20
prev: ../SurvivalServer/Survival-Resource
next: ./MakeMoney
tag:
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---

生存组三世界共用同一套经济：**背包与余额跨服同步**，在主服消费、在工业服挂机奖励、在资源服支付传送费等，都使用同一种货币。底层由 [CoinsEngine](https://nightexpressdev.com/coinsengine/) 提供虚拟货币记账；商店、领地等插件与之对接，具体玩法见下方子页面。

## 虚拟货币（西瓜币）

- 游戏内按 `Tab`（玩家列表）可查看**当前余额**。
- 货币单位为 **西瓜币**，记作 `🍉`；文档与界面中的数字均指该虚拟货币。

::: tip 与实体货币的关系

虚拟货币用于日常交易、领地、随机传送扣费等；**实体货币**为可兑换的道具面额，便于大额存储或玩家间交接，见下一节。

:::

## CoinsEngine 常用命令 {#coinsengine-player-commands}


| 用途   | 示例命令                                     | 说明                                                                                                                                     |
| ---- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| 查看帮助 | `/coe help`                              | 列出插件侧子命令（部分子命令需权限）                                                                                                                     |
| 查看余额 | `/balance [玩家]`、`/coins balance [玩家]`    | 主货币或指定货币余额；也可使用已开启的 `/wallet [玩家]` 查看多币种                                                                                           |
| 转账   | `/pay <玩家> <金额>`、`/coins pay <玩家> <金额>`  | 向其他玩家支付；金额支持官方文档中的 [数字简写](https://nightexpressdev.com/nightcore/configuration/number-formation/#number-shortcuts)（如 `1k`、`1M` 等，以服内为准） |
| 开关收款 | `/paytoggle [玩家]`、`/coins payments [玩家]` | 是否允许他人向自己转账                                                                                                                            |
| 排行榜  | `/baltop [页码]`、`/coins top [页码]`         | 需开启排行榜功能时可用                                                                                                                            |


::: warning 管理向指令（一般玩家不可用）

`/coins give`、`/coins take`、`/coins set`、`/coins giveall`、`/coe reload` 等用于发放、扣除、重载配置等，**通常仅管理员或控制台可用**。请勿与非权限玩家分享的「转账」混淆。

:::

## 实体货币兑换

- 兑换地点：**生存服-主服**出生点（具体 NPC 或机器位以游戏内为准）。
- 支持面额：`100🍉`、`1,000🍉`、`10,000🍉`（与游戏内实际配置一致；若管理组调整过兑换表，以服内为准）。

将多余现金换成实体货币可减少误操作支出；需要花用时再在出生点兑回虚拟货币即可。

## 子指南导航


| 主题                   | 说明                               |
| -------------------- | -------------------------------- |
| [赚钱](./MakeMoney.md) | 在线奖励、玩家转账、任务与文档贡献等收入来源           |
| [商店](./Shop.md)      | QuickShop-Hikari 创建出售/收购店、补货与冻结等 |
| [领地](./Residence.md) | 创建与尺寸限制、子区、`/res` 相关费用与指令        |


从资源服进入本章的玩家，可继续按 `next` 顺序阅读 [赚钱](./MakeMoney.md)；需要切服说明时见 [生存服介绍](../SurvivalServer/README.md) 与 [ServerTeleport](/PluginIntroduction/ServerTeleport)。