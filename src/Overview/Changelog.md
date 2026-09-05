---
title: 更新日志
icon: fluent-color:history-32
author: SUPER2FH
---

::: important 服务器当前版本【支持跨版本兼容】
Java 版：`1.21.11`
:::

自研插件的玩家用法见 [插件介绍](/PluginIntroduction/)。下列日期为各插件**首次正式发布并部署到群组服**的时间（以 GitHub Release / 仓库公开日为准）。

### 📌2025.03.03

- 更新为 Velocity 代理
- 全服版本升级 1.21.4

### 📌2025.06.01

- 服务器配置升级 9950X

### 📌2026.04.11

- 部署自研插件 [RandomTeleport](/PluginIntroduction/RandomTeleport)（`v1.0.0`）
  - 安装在 **生存服-资源服**（Paper）
  - 提供 `/rtp` 随机传送、`/rtp back` 返回传送前位置，支持经济扣费与冷却

### 📌2026.04.12

- 部署自研插件 [ServerTeleport](/PluginIntroduction/ServerTeleport)（`v1.0.0`）
  - 安装在 **Velocity 代理**
  - 将 `/zf`、`/gyf`、`/zyf`、`/hub`、`/lobby` 等短命令映射到各后端，等价于 `/server <服务器ID>`

### 📌2026.04.17

- 部署自研插件 [GlobalChat](/PluginIntroduction/GlobalChat)
  - 安装在 **Velocity 代理**
  - 提供跨子服全局聊天：`/g on`、`/g off`、多频道、`@` 提及，以及管理员公告 `/gb`

### 📌2026.09.05

- 部署自研插件 [DeathChest](/PluginIntroduction/DeathChest)（当日发布至 `v1.0.3`）
  - 安装在 **生存服-主服**、**生存服-工业服**
  - 替代已弃用的 [AngelChest](/PluginIntroduction/AngelChest)：死亡后生成受保护箱子，`/dc on`、`/dc off` 开关，潜行右键取回物品
