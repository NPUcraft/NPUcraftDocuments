---
title: LuckPerms
icon: https://luckperms.net/img/logo.a4ca2166.svg
author: SUPER2FH
category:
  - BasePlugin
tag: 
  - Lobby
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---



::: info 完整文档请查阅[LuckPerms](https://luckperms.net/wiki/Home)
:::



LuckPerms 是一款高效、模块化的权限管理插件，提供**细粒度权限控制**、**用户/群组继承系统**、**上下文权限**、**实时数据同步**等特性，是构建复杂权限体系的终极解决方案。

## **一、命令别名对照表📜**
| **Bukkit/Sponge/Fabric/Forge/Nukkit** | **BungeeCord**     | **Velocity**         |
| ------------------------------------- | ------------------ | -------------------- |
| `/lp`                                 | `/lpb`             | `/lpv`               |
| `/luckperms`                          | `/luckpermsbungee` | `/luckpermsvelocity` |

⚠️ **注意**：BungeeCord 和 Velocity 使用不同别名，以确保命令在代理端或子服务器正确执行。

## **二、参数说明🛠️**
- `<必填参数>`：必须指定的参数
- `[可选参数]`：可省略，使用默认值
- **空格转义** : 含空格的参数需用引号包裹，如 `"参数 内容"`

## **三、命令分类速查🗂️**

### **1. 通用命令🔧**
| 命令                          | 功能描述              |
| ----------------------------- | --------------------- |
| `/lp sync`                    | 同步所有权限数据      |
| `/lp editor`                  | 打开在线权限编辑器    |
| `/lp verbose <on/record/off>` | 开启/关闭权限调试模式 |
| `/lp import/export <文件>`    | 导入/导出权限数据     |
| `/lp reloadconfig`            | 重载配置文件          |

### **2. 用户管理命令👤**
```markdown
/lp user <用户名> info                # 查看用户信息
/lp user <用户名> permission set ...  # 设置权限节点
/lp user <用户名> parent add admin    # 添加父级组
/lp user <用户名> promote <晋升路线>  # 沿晋升路线升级
```

### **3. 群组管理命令👥**
```markdown
/lp group <组名> setweight 100       # 设置权重（优先级）
/lp group <组名> listmembers         # 列出组成员
/lp group <组名> clone new_group     # 克隆群组配置
```

### **4. 晋升路线命令📈**
| 命令                                | 功能               |
| ----------------------------------- | ------------------ |
| `/lp track <路线> append <组>`      | 在路线末尾添加群组 |
| `/lp track <路线> insert <组> 位置` | 在指定位置插入群组 |
| `/lp track <路线> clear`            | 清空晋升路线       |

## **四、核心功能详解📌**

### **1. 权限管理🔐**
```markdown
# 永久权限
/lp user <用户> permission set minecraft.command.gamemode true

# 临时权限（30分钟）
/lp group default permission settemp worldedit.any 30m
```

### **2. 继承系统🧬**
```markdown
# 添加继承组
/lp group mod parent add admin

# 设置上下文继承（仅在生存世界有效）
/lp user Steve parent add vip server=survival
```

### **3. 元数据管理📝**
```markdown
# 设置前缀
/lp group vip meta addprefix 100 "&6[VIP] "

# 临时后缀（1小时）
/lp user Alex meta addtempsuffix 50 " &a★" 1h
```

## **五、实用工具⚙️**

### **1. 权限树查看🌲**
```markdown
/lp tree              # 查看完整权限树
/lp tree survival     # 查看指定上下文的权限结构
```

### **2. 日志追踪📊**
```markdown
/lp log recent         # 查看近期操作记录
/lp log search give    # 搜索含"give"的操作
/lp log notify on      # 开启实时操作通知
```

### **3. 最佳实践💡**

1. 权重系统：通过 `setweight` 建立组优先级（数字越大优先级越高）
2. 上下文控制：使用 `server=creative` 等参数实现跨服权限隔离
3. **自动化同步**：配置 MySQL 数据库实现多服务器实时同步

遇到问题？尝试 `/lp sync` 手动同步数据，或使用 `/lp verbose` 进行权限调试。
