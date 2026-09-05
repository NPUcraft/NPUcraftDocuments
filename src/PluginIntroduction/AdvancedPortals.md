---
title: AdvancedPortals
icon: https://advancedportals.sekwah.com/img/advancedportals.png
author: SUPER2FH
category:
  - 开源插件
tag: 
  - Lobby
---



::: info 完整文档请查阅[AdvancedPortals](https://advancedportals.sekwah.com/docs/commands)
:::



AdvancedPortals 是一款功能强大的 Minecraft 传送门管理插件，支持自定义传送门材质、跨服传送、条件触发、指令执行等高级功能。通过灵活的「标签系统」和「粒子特效」，可实现：

- 🌀 **多类型方块**（下界门/末地门/水等）触发
- 🌐 **跨服务器/Bungee/Velocity** 无缝传送
- ⚙️ **条件限制**（权限/冷却/玩家状态等）
- 💬 **自定义消息** 和 **指令执行**



## **一、命令列表📜**

### **1. 传送门指令**

 `/portal` | `/ap` | `/aportals`

| 命令                       | 权限节点                          | 描述                              |
| -------------------------- | --------------------------------- | --------------------------------- |
| `/portal create [标签...]` | `advancedportals.portal.create`   | 创建传送门（必须包含`name:`标签） |
| `/portal selector`         | `advancedportals.portal.selector` | 获取传送门编辑斧（选择区域）      |
| `/portal portalblock`      | `advancedportals.portal.create`   | 获取传送门方块（可调整方向）      |
| `/portal reload`           | `advancedportals.portal.reload`   | 重载配置和数据                    |
| `/portal show`             | `advancedportals.portal.show`     | 显示附近传送门的粒子效果          |

### **2. 目的地指令** 

`/desti` | `/destination`

| 命令                   | 权限节点                         | 描述                 |
| ---------------------- | -------------------------------- | -------------------- |
| `/desti create [名称]` | `advancedportals.desti.create`   | 以当前位置创建目的地 |
| `/desti tp [名称]`     | `advancedportals.desti.teleport` | 传送到指定目的地     |
| `/desti list`          | `advancedportals.desti.list`     | 列出所有目的地       |

## **二、传送门标签说明🏷️**

### **1. 必填标签**
| 标签        | 示例             | 描述                           |
| ----------- | ---------------- | ------------------------------ |
| `name:名称` | `name:NetherHub` | 传送门唯一标识（全局不可重复） |

### **2. 常用可选标签**
| 标签                | 示例                       | 功能                            |
| ------------------- | -------------------------- | ------------------------------- |
| `desti:目的地名`    | `desti:Spawn`              | 指定传送目的地                  |
| `triggerblock:材质` | `triggerblock:WATER`       | 设置触发方块（需大写材质名）    |
| `bungee:服务器名`   | `bungee:Lobby`             | Bungee跨服传送（需开启通道）    |
| `cooldown:秒数`     | `cooldown:60`              | 玩家冷却时间（跨登录保存）      |
| `command:"指令"`    | `command:"#spawn @player"` | 触发时执行控制台指令（`#`前缀） |

## **三、示例用法🌟**
```markdown
# 创建跨服水传送门 ✨
/portal create name:WaterGate triggerblock:WATER bungee:Lobby message:"&a传送至大厅服务器！"

# 添加条件限制 🔐
/portal create name:VIPGate permission:vip.access cooldown:300 desti:VIPZone
```
