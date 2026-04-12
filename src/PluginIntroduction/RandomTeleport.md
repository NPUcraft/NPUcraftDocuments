---
title: RandomTeleport
icon: emojione:world-map
author: SUPER2FH
category:
  - FunctionalPlugin
tag:
  - Survival-Resource
---


**RandomTeleport** 是 NPUcraft 自研的 **Paper / Spigot** 随机传送插件：在**当前所在世界**内寻找随机安全点并传送，支持**经济扣费**、**冷却**、**传送前延迟**、**返回上一次传送前位置**（`/rtp back`）以及中英双语消息。源码与发行说明见：[github.com/NPUcraft/RandomTeleport](https://github.com/NPUcraft/RandomTeleport)。

::: info 适用范围

本插件安装在 **生存服-资源服**。在其他子服使用 `/rtp` 可能无效或行为不同，请以实际所在服务器为准。

:::

## **一、玩家指令**

- `**/rtp`**（别名：`/randomtp`、`/randomteleport`）  
在当前世界内随机传送。插件会扫描地表/安全落脚点（主世界/末地；下界为固体立足点策略），并遵守**世界边界**与**配置范围**的交集。
- `**/rtp back`**  
传送回**上一次成功 RTP 之前**所站的位置（**不是**多级历史栈；每次成功 RTP 会覆盖记录；成功返回后记录清空）。可与随机传送**分别计费**。
- `**/rtp help`**  
按世界列出**随机传送与返回的单价**、**XZ 范围**等（若某世界无有效范围会单独提示）。
- `**/rtp reload`**  
重载配置（需权限 `randomteleport.admin.reload`，一般为管理员）。

## **二、经济与冷却**

以下为文档编写时 **资源服**侧常见配置，**若管理组调整过 `config.yml`，以游戏内 `/rtp help` 与群内公告为准**。

- **经济**：已启用，通过 **CoinsEngine** 货币 `**coins`** 扣费（需经济插件与货币正常加载）。  
- **大致价格**（与当前 `economy` 配置一致时）：主世界随机传送 **100**；下界 **200**；末地 **300**；`**/rtp back`** **100**（`coins`）。若管理组改动 `config.yml`，以 `**/rtp help`** 为准。  
- **扣费时机**：一般在**传送成功**时扣费；失败会按插件逻辑处理退款（详见仓库 README）。  
- **冷却**：两次**成功** RTP 之间约 **30 秒**（权限 `randomteleport.bypass.cooldown` 可跳过）。  
- **传送延迟**：找到落点后约 **100 ticks**（约 5 秒）再执行传送；延迟期间若**移动超过允许距离**或**受伤**，会取消（具体以 `delay-cancel-move-blocks` 等为准）。  
- **与他人距离**：落点与其他玩家至少约 **16 格**（为 0 则不检查）。

## **三、随机范围与多世界**

- 随机 **XZ** 会在「配置中的 `ranges`」与 **世界边界**之间取交集（`respect-world-border: true` 时）。  
- **主世界 / 下界 / 末地**可分别设置范围；下界与主世界尺度不同（详见配置）。  
- `**worlds`** 为 `all` 时，在允许的世界内均可使用 RTP；若被提示「此世界禁止随机传送」，表示该世界被关闭或未列入白名单。

## **四、权限**

- `**randomteleport.use`**（默认 `true`）：使用 `/rtp`、`/rtp help`。  
- `**randomteleport.back**`（默认 `true`）：使用 `/rtp back`。  
- `**randomteleport.bypass.cooldown**`（默认 `op`）：忽略 RTP 冷却。  
- `**randomteleport.bypass.cost**`（默认 `op`）：忽略 RTP 与 back 扣费。  
- `**randomteleport.admin.reload**`（默认 `op`）：使用 `/rtp reload`。

完整权限表见 [GitHub 仓库说明](https://github.com/NPUcraft/RandomTeleport)。

## **五、常见问题**

- **提示余额不足**  
先通过资源服玩法获取 `**coins`**，或查看 [经济系统](/SurvivalGuide/EconomicSystem/) 与群内说明。
- **长时间「正在寻找安全位置」后失败**  
可能该次随机尝试未找到安全点，或同步加载区块达到上限；可稍后再试，或换维度。持续失败可向管理员反馈。
- **延迟倒计时期间不要乱跑**  
移动或受伤可能取消传送，并可能触发提示（如「移动或受到伤害」）。
- **PlaceholderAPI**（可选）  
若服务器安装了 PAPI，可使用 `%randomteleport_cooldown%`、`%randomteleport_cost%` 等占位符（见仓库 **PlaceholderAPI** 一节）。

::: tip 更多

配置项说明、消息键、占位符、构建方式等请阅读 [RandomTeleport README](https://github.com/NPUcraft/RandomTeleport/blob/main/README.md) 与中文版 [README_zh.md](https://github.com/NPUcraft/RandomTeleport/blob/main/README_zh.md)。

:::