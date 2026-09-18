---
title: 工业服
icon: noto-v1:factory
prev: ./Survival-Main.md
next: ./Survival-Resource.md
tag:
  - Survival-Industry
category:
  - GroupServer
---

工业服（`Survival-Industry`）基于 [Leaves 1.21.8](https://leavesmc.org/software/leaves) 运行，面向**生电与量产**：可建造在 [主服](./Survival-Main.md) 受限或不宜放置的大型机器与刷怪塔，用稳定产出支撑个人与公共仓库。世界**长期保留**，不会像资源服那样整图重置。视距 **16**、模拟距离 **12**，难度困难，已开 PVP。

::: tip 如何进入工业服

在代理端使用 `/gyf`（后端 `Survival-Industry`），或在大厅走通往工业服的传送门。切服限制与冷却见 [ServerTeleport](/PluginIntroduction/ServerTeleport)。三世界关系总览见 [生存服介绍](./README.md)。

:::

::: tip 先在虚空实验室验证

大规模施工前，可在 [VoidLab](/ServerIntroduction/GroupServer/Creative/VoidLab.md) 用创造模式搭原型、测机制，再把投影搬回工业服。VoidLab 与工业服机制保持一致，且不消耗本服资源、不占用正式施工区。

:::

## **与主服、资源服的区别**

- **相对主服**：主服侧重居住与社区；工业服承担**规模化红石与生电**，并执行更明确的**机器间距**规则。这里**没有** QuickShop 玩家店，钱仍是同一套西瓜币，货物用背包带走即可。
- **相对资源服**：资源服会**不定期重置**且偏探索与一次性采集；工业服适合需要持续挂机、固定选址的产线。
- **在线奖励**：每小时 **150🍉**，单日上限 **1,500🍉**（高于主服）；AFK 不发。见 [赚钱](/SurvivalGuide/EconomicSystem/MakeMoney.md)。

## **生电向机制（Leaves）**

工业服在三服共用的技术生存模式之外，额外打开了若干对机器友好的选项（以当前 `leaves.yml` 为准）：

- **强制虚空交易**（`force-void-trade`）：末地折跃门相关的虚空交易按 Leaves 的强制开启处理，便于传统交易机。
- **持方块的末影人会消失**：减少末影人把机器方块挪走后到处乱放的情况。
- **袭击行为偏旧版**：部分袭击逻辑按旧版处理，减少新版本对现有设计的干扰。
- **投影放置**：与主服一样开启 Litematica 相关协议，方便对着原理图落地。
- **剪刀当扳手**（`redstone-shears-wrench`）：手持**剪刀**对活塞、粘性活塞、侦测器、发射器、投掷器、漏斗等红石元件**右键**，可像扳手一样旋转朝向，不用拆了重放。不消耗剪刀耐久。普通剪树叶、剪羊毛不受影响。

这些是服务端机制，不是「可以破坏他人机器」的许可证。公共机器仍须遵守下一节。

## **假人**

工业服是假人用得最多的地方。`/bot` 由 Leaves 提供，配置为：

- 名前缀 `bot_`，全服同时最多 **10** 个
- **重启后保留**（`resident-fakeplayer`），可手动存盘 / 读盘
- 可打开假人背包、执行动作；假人不能进传送门
- 创建者视角与位置会被继承；和真人对撞会挤位

常用：`/bot create <名字>`、`/bot action <名字> <动作>`、`/bot list`。完整动作表见 [LeavesFakePlayer](/PluginIntroduction/LeavesFakePlayer)。请把挂机点放在自己的机器加载范围内，不要在别人产线里堆假人。

## **机器建造规范**

- 不同机器之间原则上至少相隔 **16 区块**（平面约 **256×256** 格，x 与 z 方向均计），使各设施的加载范围尽量互不重叠。若距离过近导致互相影响（刷怪、卡顿、串线等），按**先来后到**原则，后建方负责迁移或改建。
- 因地形或群系限制**必须挤在空置域等敏感区域**时，在不影响他人的前提下可适当缩小间距，并相应调整挂机点与开关逻辑。
- 对**群系/地形强依赖**的设施（如守卫者农场、史莱姆农场、凋灵骷髅塔等），在纠纷处理中会给予**更高保护优先级**。
- **「家用电器」原则**：地毯机、小型熔炉组等体量很小的装置，若全部堆在工业服，跨服传送与管理的成本可能得不偿失；此类设施更适合留在 [主服](./Survival-Main.md) 个人基地，**工业服优先收录中大型、共享型或对主服负载不友好的项目**。

## **机器使用守则**

- 使用他人或公共机器时，**不得**随意拨动关键开关、拆走核心部件或改变他人预设模式。
- 使用前请阅读 [《机器使用手册》](/SurvivalGuide/MachineInstruction/)；误操作造成损坏应**及时联系所有者**并协商修复。
- 公共机器旁的存储箱一般允许**适量取用**；若发现库存见底，使用者有义务**挂机补产**或反馈维护，避免「只取不补」。

::: warning 纠纷与公共秩序

因机器占地、噪声、光照或产物分配产生矛盾时，以本页规范与先来后到原则为基础，必要时联系管理组协调。

:::

## **保护、死亡与日常**

- **小范围保护**：工业服也装了 Residence，但默认组圈地上限远小于主服（约 **16×16**、最多 **3** 块，界面目前为英文）。只适合给机器核心区做一小圈保护，**不能**当主基地用。日常大领地、出租与网页地图上的领地边界仍以 [主服](./Survival-Main.md) 为准。
- **死亡箱**：与主服同一套 [DeathChest](/PluginIntroduction/DeathChest)（私人 12 小时、公开 3 天，潜行右键取回）。挂机前建议确认 `/dc` 已开启，并备好创建箱子所需的西瓜币。
- **语音 / 坐下**：与其它生存子服相同，见 [Simple Voice Chat](/PluginIntroduction/SimpleVoiceChat)、[GSit](/PluginIntroduction/GSit)。

## **卫星地图**

- [Dynmap 平面图](https://map.npucraft.com/dynmap-industry/)
- [BlueMap 三维预览](https://map.npucraft.com/bluemap-industry)

<iframe
src="https://map.npucraft.com/dynmap-industry/"
width="100%"
height="600px"
frameborder="0"
allowfullscreen>
</iframe>
