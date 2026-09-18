---
title: VoidLab
shortTitle: 虚空实验室
icon: fluent-emoji-flat:test-tube
order: 1
author: NPUcraft
category:
  - GroupServer
tag:
  - VoidLab
---

`VoidLab` 是面向技术研究、机器测试与建筑验证的**创造模式虚空实验服务器**，服务器机制与工业服保持一致，为玩家提供不受生存资源限制的独立测试环境。

::: tip 与工业服机制一致

VoidLab 与工业服机制保持一致，实验结果可用于工业服机器设计与方案验证。大规模施工前，建议先在此搭原型，再把投影搬到 [工业服](/SurvivalGuide/SurvivalServer/Survival-Industry.md)。

:::

::: tip 如何进入

使用 `/server VoidLab`。回来用 `/hub`。大厅传送门以现场为准。本服**没有** HuskSync，不要指望把生存装备带进来。

:::

## 服务器定位

VoidLab 采用**纯虚空世界 + 创造模式**，主要用于：

- 红石机械与工业机器测试
- 游戏机制与特性实验
- 建筑、结构与机器原型设计
- 投影搭建与方案验证
- Tick、实体、方块更新等机制测试
- WorldEdit / FAWE 大规模编辑
- 工业服项目前期设计与调试

VoidLab 并非生存服务器，玩家无需收集资源，可直接使用创造模式完成实验。

## 世界环境

| 项目 | 配置 |
| --- | --- |
| 游戏模式 | `Creative` 创造模式 |
| 世界类型 | 纯虚空世界 |
| 难度 | 和平 |
| PvP | 关闭 |
| 怪物生成 | 关闭 |
| 飞行 | 允许 |
| 命令方块 | 开启 |
| 世界结构 | 不生成 |
| 下界 | 关闭 |
| 出生点保护 | 关闭 |

服务器默认强制使用创造模式，玩家进入 VoidLab 后即可直接开始实验。

## 实验员权限

所有玩家默认拥有 **`experimenter` 实验员权限组**。

实验员开放大部分与创造、测试和世界编辑相关的权限，包括：

| 类型 | 可用功能 |
| --- | --- |
| 游戏模式 | `/gamemode` |
| 传送 | `/tp`、`/teleport` |
| 世界环境 | `/time`、`/weather`、`/difficulty` |
| 游戏规则 | `/gamerule` |
| Tick | `/tick` |
| 物品 | `/give`、`/clear`、`/item` |
| 状态 | `/effect`、`/attribute`、`/experience` |
| 实体 | `/summon`、`/kill`、`/damage`、`/ride` |
| 方块 | `/setblock`、`/fill`、`/clone`、`/fillbiome` |
| 数据 | `/data`、`/execute` |
| 逻辑 | `/scoreboard`、`/team`、`/tag`、`/bossbar` |
| 世界 | `/locate`、`/worldborder`、`/spawnpoint` |
| 红石实验 | Debug Stick、命令方块 |
| 世界编辑 | [WorldEdit / FAWE](/PluginIntroduction/FastAsyncWorldEdit) |

实验员**不拥有服务器管理权限**，包括但不限于：

`/op`、`/deop`、`/stop`、`/reload`、`/ban`、`/kick`、`/whitelist` 以及 LuckPerms 管理权限。

## WorldEdit / FAWE

VoidLab 向实验员开放 [WorldEdit / FAWE](/PluginIntroduction/FastAsyncWorldEdit)，可用于快速创建、复制和修改实验结构。

常用指令：

```text
//wand
//pos1
//pos2
//set <方块>
//replace <原方块> <新方块>
//copy
//paste
//move
//stack
//undo
//redo
```

FAWE 适合处理较大规模的方块编辑，但大范围操作仍可能对服务器性能产生影响。进行大规模操作时请合理控制范围，详见 FAWE 文档中的注意事项。

## 投影与机器测试

VoidLab 可用于配合 **Litematica 等投影 Mod** 进行结构设计与验证。

推荐流程：

```text
工业服项目构思
      ↓
VoidLab 原型搭建
      ↓
机制 / 性能测试
      ↓
修改与优化
      ↓
生成投影
      ↓
工业服正式施工
```

通过 VoidLab，可以在不消耗工业服资源、不占用正式施工区域的情况下提前发现设计问题。

## 使用须知

::: warning 实验权限较高，请合理使用

1. **请勿恶意破坏他人的实验项目。**
2. `/gamerule`、`/time`、`/weather`、`/tick` 等属于世界级设置，修改后可能影响其他正在进行的实验。
3. 使用 `/summon` 时请避免一次性生成大量实体。
4. 使用 `/tick rate` 等指令时请在实验结束后恢复正常设置。
5. 使用 WorldEdit / FAWE 进行超大范围操作前，请确认不会影响其他玩家。
6. 命令方块可执行高权限游戏命令，请勿制作无限循环或可能导致服务器卡顿的命令系统。
7. 实验结束后建议及时清理无用实体、方块与测试结构。

:::

## 推荐用途

VoidLab 特别适合：

- 生电机器设计
- 红石电路测试
- 农场效率测试
- 工业服机器验证
- 投影制作
- 建筑预搭建
- 实体机制实验
- 方块更新测试
- Gamerule 实验
- Tick 机制研究
- 命令方块测试
- WorldEdit / FAWE 建筑设计

## 关于 VoidLab

**VoidLab —— 与工业服机制一致的自由创造与机制实验服务器。**

服务器的目标不是提供独立的生存玩法，而是作为工业服的**设计、实验与验证环境**：先在 VoidLab 完成测试，再将成熟方案应用到工业服。
