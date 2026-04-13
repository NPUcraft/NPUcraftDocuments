---
title: 主服
icon: fluent-emoji-flat:houses
prev: ./
next: ./Survival-Industry.md
tag:
  - Survival-Main
category:
  - GroupServer
---

主服（`Survival-Main`）是生存组的**社交与聚居中心**：轨道交通、玩家聚落与社区活动多集中于此。为控制卡顿与保护景观，主服对规划区、实体与流体、以及「工业级」设施有明确限制；需要大规模生电或破坏性开采时，请使用 [工业服](./Survival-Industry.md) 或 [资源服](./Survival-Resource.md)。

::: tip 如何进入主服

在代理端使用切服别名 `/zf`（等价于连接后端 `Survival-Main`）。大厅与其它生存子服之间的具体规则见 [ServerTeleport](/PluginIntroduction/ServerTeleport)。总览与其它世界说明见 [生存服介绍](./README.md)。

:::

## **与其它世界的分工**

| 内容 | 说明 |
|------|------|
| 日常基地、装饰、社区聚居与轨道交通 | 以主服为主 |
| 刷怪塔、全自动农场、大型生电产线 | 请使用 [工业服](./Survival-Industry.md) |
| 大范围地形破坏、探索向刷资源 | 请使用 [资源服](./Survival-Resource.md) |

## **规划区域限制**

- 主城周边空置域及末地主岛均为**规划区**，禁止擅自建造生存基地或大规模改动地形。
- 建议优先在**已有玩家聚集地**附近发展，便于协作与交通接驳，也有利于形成稳定的社区氛围。
- 卫星地图上的**保留区**边界具有参考价值；保留区外区域在版本迭代时可能被重置，请避免在「远期仍想保留」的工程上过度投入。

::: warning 不确定是否属于规划区时

开工前务必对照 [卫星地图](https://map.npucraft.com/dynmap/) 或与管理员确认，避免建筑日后被纳入调整范围。

:::

## **基地建造要求**

- **实体**：严格限制生物数量与密集圈养，减轻服务端 AI 与碰撞计算压力。若确需大量实体（如交易牛场、部分机器配套），须**提前向管理员报备**，并将设施布置在远离主城、车站等**高频加载区**的位置。
- **流动水 /流体**：大面积流动水、复杂瀑布墙等会显著增加运算负担，请节制使用；生电向流体装置请放在工业服。
- **生电与开采**：凡属**工业级**设施（刷怪塔、全自动作物/矿物农场、大型熔炉组等）以及**破坏性**资源开采，均应转移至 [工业服](./Survival-Industry.md) 或 [资源服](./Survival-Resource.md)，主服仅保留与居住、交通、轻量装饰相匹配的规模。

## **交通线路图**

![服务器轨道交通线路图](https://cos.npucraft.com/2025/03/12/67d149bc7e989.png)

## **[卫星地图](https://map.npucraft.com/dynmap/)**

<iframe
src="https://map.npucraft.com/dynmap/"
width="100%"
height="600px"
frameborder="0"
allowfullscreen>
</iframe>
