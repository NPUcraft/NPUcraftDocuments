---
title: FastAsyncWorldEdit
icon: https://cos.npucraft.com/2025/03/23/67dfe9cb98da8.png
author: SUPER2FH
category:
  - FunctionalPlugin
tag: 
  - Lobby
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---



::: info 完整文档请查阅[FastAsyncWorldEdit](https://intellectualsites.gitbook.io/fastasyncworldedit)
:::



**FastAsyncWorldEdit (FAWE)** 是一款高性能的WorldEdit分支插件，专为大规模地形编辑优化。它支持异步操作，能在不卡顿服务器的情况下处理海量方块操作，同时保留了原版WorldEdit的所有核心功能，并新增了多种高效工具和命令。

## 一、命令语法说明📜
| 符号           | 说明                             |
| -------------- | -------------------------------- |
| `<arg>`        | **必填参数**                     |
| `[arg]`        | **可选参数**                     |
| `<arg1\|arg2>` | **多选参数**（用`\|`分隔）       |
| `<arg=默认值>` | **默认值/建议值**                |
| `-a`           | 命令标志（如 `//<命令> -a`） |

## **二、核心命令🛠️**

### **1. WorldEdit 基础命令🌐**
| 命令               | 权限节点               | 描述                       |
| ------------------ | ---------------------- | -------------------------- |
| `/we version`      | 无                     | 查看FAWE版本信息           |
| `/we help [命令]`  | `worldedit.help`       | 显示FAWE命令帮助           |
| `/we reload`       | `worldedit.reload`     | 重载插件配置               |
| `/fawe debugpaste` | `worldedit.debugpaste` | 上传调试信息到在线分析工具 |

### **2. 实用工具命令⚙️**
| 命令                       | 权限节点            | 描述                         |
| -------------------------- | ------------------- | ---------------------------- |
| `//drain <半径>`           | `worldedit.drain`   | 排干区域内的液体             |
| `//fill <图案> <半径>`     | `worldedit.fill`    | 填充地面凹陷                 |
| `//snow [半径]`            | `worldedit.snow`    | 模拟降雪效果                 |
| `//thaw [半径]`            | `worldedit.thaw`    | 融化区域内的冰雪             |
| `//butcher [半径] [-标志]` | `worldedit.butcher` | 清理附近生物（支持多种过滤） |

**标志说明**：  
`-p` 包含宠物，`-a` 包含动物，`-t` 包含命名生物，`-r` 摧毁盔甲架。

### **3. 选区操作命令📦**
| 命令                 | 权限节点                    | 描述                                |
| -------------------- | --------------------------- | ----------------------------------- |
| `//set [图案]`       | `worldedit.region.set`      | 填充选区为指定方块                  |
| `//copy [-e] [-m]`   | `worldedit.clipboard.copy`  | 复制选区到剪贴板（`-e` 包含实体）   |
| `//paste [-s]`       | `worldedit.clipboard.paste` | 粘贴剪贴板内容（`-s` 选中粘贴区域） |
| `//stack [次数]`     | `worldedit.region.stack`    | 堆叠选区内容                        |
| `//regen [生物群系]` | `worldedit.regen`           | 重新生成选区自然地形                |

### **4. 历史记录管理⏳**
| 命令             | 权限节点                  | 描述         |
| ---------------- | ------------------------- | ------------ |
| `//undo [次数]`  | `worldedit.history.undo`  | 撤销操作     |
| `//redo [次数]`  | `worldedit.history.redo`  | 重做操作     |
| `//clearhistory` | `worldedit.history.clear` | 清空操作历史 |

### **5. 生物群系控制🎨**
| 命令                     | 权限节点               | 描述                                      |
| ------------------------ | ---------------------- | ----------------------------------------- |
| `//setbiome <群系> [-p]` | `worldedit.biome.set`  | 设置选区生物群系（`-p` 以玩家位置为中心） |
| `/biomelist`             | `worldedit.biome.list` | 列出所有可用生物群系                      |

### **6. 笔刷与工具🖌️**
#### **基础笔刷命令**
```markdown
| 命令                          | 描述                     |
|-------------------------------|------------------------|
| `/brush sphere <图案> [半径]` | 创建球体（`-h` 空心）    |
| `/brush cylinder <图案>`      | 创建圆柱体               |
| `/brush smooth [半径]`        | 平滑地形表面             |
| `/brush erode [半径]`         | 模拟自然侵蚀效果         |
```

#### **高级笔刷功能**
- 剪贴板笔刷：`/brush clipboard` 结合 `//copy` 和 `//paste` 快速复用结构。
- 地形生成：使用 `//generate` 按数学公式生成复杂形状。

---

### **7. 辅助工具🔍**
| 工具命令       | 描述                                  |
| -------------- | ------------------------------------- |
| `//wand`       | 获取选区工具（默认木斧）              |
| `//info`       | 查看当前选区信息                      |
| `//distr [-d]` | 统计选区方块分布（`-d` 按数据值细分） |

---

## **三、注意事项🚨**
- 实体操作风险：使用 `-e` 标志复制/粘贴实体时，**无法撤销**，请谨慎操作！ ⚠️
- **性能优化**：大规模操作建议分区域执行，避免服务器过载。
- 权限管理：合理配置权限节点（如 `fawe.admin` 仅限管理员）。

---

