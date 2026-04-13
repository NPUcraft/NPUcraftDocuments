---
title: 资源服
icon: emojione:mountain
prev: ./Survival-Industry.md
next: ../EconomicSystem/
tag:
  - Survival-Resource
category:
  - GroupServer
---

资源服（`Survival-Resource`）在**原版玩法基底**上叠加数据包，重写了大量群系、地形与结构，会出现许多在主服与工业服难以见到的景观与探索点。世界为**获取资源、战斗与跑图**而设计，矿物与部分战利品相对富集；**地图会不定期重置，且不保证保留种子**，因此不适合作为长期「唯一主基地」，重要物资请通过背包与经济系统带回其它世界或做好转移。

::: tip 如何进入资源服

在代理端使用 `/zyf`（后端 `Survival-Resource`）。详见 [ServerTeleport](/PluginIntroduction/ServerTeleport) 与 [生存服介绍](./README.md)。

:::

::: warning 关于重置与建筑

重置前管理组会按惯例公告；**请勿在资源服投入无法承受损失的工程**。长期聚居、大型生电仍以 [主服](./Survival-Main.md) / [工业服](./Survival-Industry.md) 为主。

:::

## **一、世界生成🌍**

- 搭载 **Terralith** 风格的地形生成，新增大量奇幻与写实向生物群系（如火山、月光森林、巨型洞穴等），整体探索密度高于普通主世界。
- 结合 **Hopo 系列数据包**扩展地下与遗迹：多种主题矿洞、水下与战争遗迹变体等，考古与箱庭探索内容更丰富。
- 对原版村庄与部分遗迹做了重构，会出现樱花林村庄、沼泽村庄等**新版聚落形态**，便于补给与临时落脚。

## **二、战斗系统⚔️**

- **怪物强度随等级成长**，越往深处或高难区域推进，战斗压力通常越大，请备好装备与补给。
- 部分生物会**掉落头颅**等纪念品或战利品，具体以当前数据包版本为准。
- 怪物生成常带有**粒子等视觉效果**，便于识别刷怪点与事件区域。
- **末影龙**击败后**必掉鞘翅**（具体数量与分配以服内版本为准），降低末地门槛。
- **死亡不掉落**：适合高强度探索与开荒；仍建议重要物品及时存入末影箱或带回其它世界，避免误操作或插件例外情况。

## **三、传送与资源体系🚀**

- **随机传送 `/rtp`**：由自研插件 [RandomTeleport](/PluginIntroduction/RandomTeleport) 提供，支持多世界随机落点、`/rtp back` 回到传送前位置，以及经济扣费、冷却等（参数以插件文档与游戏内为准）。适合快速离开出生密集区或寻找新群系。
- **巨型矿脉**等生成改动使探矿更有策略性；可配合卫星地图与 `/rtp` 规划路线。

::: tip 探索建议

初进服可先 `/rtp` 拉开距离再展开基地；注意记录重要坐标或使用 `/rtp back` 的适用条件（见 RandomTeleport 文档）。全图浏览可使用下方 **Dynmap**。

:::

## **四、[卫星地图](https://map.npucraft.com/dynmap-resource/)**

<iframe
src="https://map.npucraft.com/dynmap-resource/"
width="100%"
height="600px"
frameborder="0"
allowfullscreen>
</iframe>
