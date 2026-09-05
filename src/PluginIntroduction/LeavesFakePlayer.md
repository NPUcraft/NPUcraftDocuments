---
title: LeavesFakePlayer
icon: https://docs.leavesmc.org/logo.svg
author: SUPER2FH
category:
  - 开源插件
tag: 
  - Survival-Main
  - Survival-Industry
---



::: info 完整文档请查阅[LeavesFakePlayer](https://docs.leavesmc.org/zh_Hans/leaves/reference/fakeplayer)
:::



**Leaves核心**提供类似 Carpet 的假人支持，通过 `/bot` 命令即可操控。假人表现为玩家实体形态，包括：
  - 吸引并承受怪物攻击
  - 模拟玩家行为：
    - ✅ 区块随机刻
    - ✅ 生物生成
    - ✅ 物品使用
    - ✅ 方块破坏
    - ✅自然生命恢复
    - ...




## **一、创建假人➕**
```bash
/bot create <假人名> [皮肤名]
```
| 参数   | 必选 | 说明                   |
| ------ | ---- | ---------------------- |
| 假人名 | ✔️    | 需符合MC玩家名规范     |
| 皮肤名 | ❌    | 默认使用假人名对应皮肤 |

📌 **特性**：
- 继承创建者的位置和视角（NBT标签 Rotation 和 Pos）
- ⚠️ 玩家与假人碰撞会导致位置偏移
- 🚫 假人无法穿过传送门

## **二、移除假人❌**
```bash
/bot remove <假人名>
```
**📌 特性**：

- 💀 死亡后立即消失（不受 keepInventory 规则影响）
- 🔄 默认在服务器关闭时自动移除（可在配置中修改重启保留）

## **三、假人动作🛠️**
```bash
/bot action <假人名> <动作名> [参数]
/bot action <假人名> list  # 查看当前动作
```

| 参数      | 类型 | 默认值 | 说明                |
| --------- | ---- | ------ | ------------------- |
| TickDelay | 整数 | 20     | 操作间隔（tick）    |
| DoNumber  | 整数 | -1     | 执行次数（-1=无限） |

### **1. 攻击类**
- **attack**（视线前方）
- **attack_self**（碰撞箱内）  

```bash
参数: [TickDelay] [DoNumber]
```

### **2. 交互类**
- **break**（挖掘前方方块）  

```bash
参数: [TickDelay] [DoNumber]
```

### **3. 特殊动作**
- **fish**（自动钓鱼）
- **drop**（丢弃全部物品）
- **jump**（跳跃）
- **lay**（趴下）
- **sneak**（切换潜行）
- **swim**（自动浮水）

### **4. 视角控制**
- **look**（注视坐标）

```bash
参数: <X> <Y> <Z>
```
- **rotate**（看向玩家位置）

### **5. 物品使用**
| 动作名         | 使用部位 | 目标     |
| -------------- | -------- | -------- |
| use            | 主手     | 空气     |
| use_offhand    | 副手     | 空气     |
| use_on         | 主手     | 前方方块 |
| use_on_offhand | 副手     | 前方方块 |
| use_to         | 主手     | 前方实体 |
| use_to_offhand | 副手     | 前方实体 |

---

## **四、假人列表查询🌐**
```bash
/bot list [世界名]
```
**默认世界**： 
`world` / `world_nether` / `world_the_end`
