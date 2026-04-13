---
title: 生存服介绍
icon: material-icon-theme:minecraft
next: ./Survival-Main
tag:
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---

生存服采用**三世界协同架构**，通过功能分层构建完整的生存生态：社交与聚居在主服、规模化生产在工业服、探索与富集资源在资源服。三大世界均基于 **Paper 系列**服务端构建（工业服使用 [Leaves](https://leavesmc.org/software/leaves) 核心以更好支持生电），经 **Velocity** 代理统一接入；背包、经济、权限等关键数据由第三方插件跨服同步，玩家可在各世界间无缝切换而无需重复准备多套角色。



## 各世界职责一览


| 世界                                | 定位        | 适合做什么                                              |
| --------------------------------- | --------- | -------------------------------------------------- |
| **[主服](./Survival-Main.md)**      | 核心社交与聚居枢纽 | 主城周边活动、社区共建、轨道交通；**不宜**大规模生电与破坏性开采                 |
| **[工业服](./Survival-Industry.md)** | 生电与自动化量产  | 刷怪塔、全自动农场、各类大型机器；机器间距与公共机器使用须遵守该页规范                |
| **[资源服](./Survival-Resource.md)** | 动态探索维度    | Terralith 与数据包增强地形、`/rtp` 随机传送、富集资源与战斗向玩法；世界会不定期重置 |


- **主服**承担玩家聚居区与社区活动，并对规划区、实体数量、流动水等有明确要求，生电与重开采请迁往工业服或资源服。
- **工业服**聚焦自动化生产体系，依托生电设备与大型机械形成物资供应链；与主服分工清晰，避免「家用电器」级小机器过度占用跨服传送成本。
- **资源服**定期重置地图，保障非工业化、探索向资源的可持续获取；具体群系、战斗与传送规则见该页说明。

## 如何切换服务器

在代理（大厅或任一已开放切服别名的生存子服）中，可使用自研 Velocity 插件 **ServerTeleport** 的短命令，效果等同于 `/server <后端ID>`。常用别名（以当前配置为准，详见 [ServerTeleport 文档](/PluginIntroduction/ServerTeleport)）：

- `/zf` → 主服（`Survival-Main`）
- `/gyf` → 工业服（`Survival-Industry`）
- `/zyf` → 资源服（`Survival-Resource`）
- `/hub`、`/lobby` → 大厅

别名可能受**当前所在后端白名单**与**冷却时间**限制；若提示无权或无法切服，请对照 ServerTeleport 页的「按服限制」与常见问题。

## 卫星地图

- [主服 Dynmap](https://map.npucraft.com/dynmap/)
- [工业服 Dynmap](https://map.npucraft.com/dynmap-industry/)
- [资源服 Dynmap](https://map.npucraft.com/dynmap-resource/)

## 文档导航

按游玩顺序或关心主题可继续阅读：

1. [主服](./Survival-Main.md) — 规划区、基地建造、轨道交通与卫星图
2. [工业服](./Survival-Industry.md) — 机器间距、使用守则与 [《机器使用手册》](/MachineInstruction/)
3. [资源服](./Survival-Resource.md) — 世界生成、战斗与 `[/rtp](/PluginIntroduction/RandomTeleport)` 等；文末可衔接 [经济系统](../EconomicSystem/) 等相关指南

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

