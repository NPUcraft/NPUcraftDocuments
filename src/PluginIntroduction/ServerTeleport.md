---
title: ServerTeleport
icon: mdi:transit-connection-variant
author: SUPER2FH
category:
  - FunctionalPlugin
tag:
  - Lobby
  - Survival-Main
  - Survival-Industry
  - Survival-Resource

---


**ServerTeleport** 是 NPUcraft 自研的 **Velocity 3.x** 插件：在**代理端**把短命令（如 `/zf`）映射到 `velocity.toml` 里已注册的**后端服务器 ID**，效果等价于玩家执行 `**/server <服务器ID>`**，并支持可选**冷却**、**双语消息**与**按当前服限制可用别名**。源码与文档：[github.com/NPUcraft/ServerTeleport](https://github.com/NPUcraft/ServerTeleport)。

::: warning 与旧版 Spigot「ServerTeleport」无关

网上部分 Spigot 资源也使用同名插件，**与本站 Velocity 插件不是同一项目**。本文档仅描述 NPUcraft 仓库中的 **Velocity** 版本。

:::

## **一、玩家如何使用切服别名**

在聊天框输入下列**别名**（无需输入 `/server` 前缀），即可请求切换到对应后端（具体以代理配置为准）：

- `**/hub`**、`**/lobby**` → 大厅 `**Lobby**`
- `**/zf**` → **生存服-主服**（`Survival-Main`）
- `**/gyf`** → **生存服-工业服**（`Survival-Industry`）
- `**/zyf`** → **生存服-资源服**（`Survival-Resource`）

别名在配置中**不区分大小写**；键名可写 `zf` 或带斜杠的写法，以服内实际注册为准。

### **当前「按服限制」规则（摘要）**

当启用 `**server_commands`** 白名单时：**只有**在配置里列出的后端上，才允许使用切服别名；未列出的后端**不能**使用这些别名。

- `**Lobby`**：允许使用**全部**已注册别名（配置为 `'*'` 表示全部）。  
- `**Survival-Main`**、`**Survival-Industry**`、`**Survival-Resource**`：仅允许使用 `**hub`、`lobby`、`zf`、`gyf`、`zyf**` 等别名（与文档编写时配置一致，**若管理组调整过 `config.yml`，以游戏内 `/servertp list` 为准**）。

发起连接前会显示灰色提示文案（如「正在切换服务器，请稍候…」）；同一玩家两次**发起**切换之间约有 **3 秒**冷却（`teleport_cooldown_millis: 3000`，为 0 则不限制）。

## **二、管理命令**

主命令：`**/servertp`**，等价别名 `**/stp**`、`**/serverteleport**`。

- `**/servertp help**`：查看说明与当前 `server_commands` 规则摘要（**所有玩家**可用）。  
- `**/servertp list`**：列出切服别名；玩家仅看到**当前有权限且所在服允许**的项；**控制台**列出全部已注册项。  
- `**/servertp reload`**：热重载 `config.yml` 与 `lang.yml`（需权限 `servertp.reload`；**控制台**无需权限）。

修改 `plugins/serverteleport/config.yml` 或 `lang.yml` 后执行 `**reload`** 一般即可生效，**无需重启** Velocity。

## **三、权限**

当前配置为 `**servertp_permissions: false`**（默认）：**不要求** `servertp.use` 或 `servertp.alias.*`，即**全员可用**已注册的切服别名（仍受 `server_commands` 与代理连接结果约束）。

若改为 `true`，则需使用 LuckPerms 等授予：

- `servertp.use`：使用全部别名；或  
- `servertp.alias.<命令名>`：使用单个别名（命令名小写、无 `/`，如 `servertp.alias.zf`）。

`servertp.reload` 仅用于 `**reload`** 子命令。

## **四、常见问题**

- **提示无权或无法切服**  
确认你**当前所在后端**是否在 `server_commands` 白名单内；若你所在服不在表中，则**不能使用**别名切服（设计如此，防止滥用）。
- **已在目标服**  
插件会提示已在目标服务器，不会重复发起连接。
- **冷却中**  
在冷却时间内重复点击别名会提示等待；冷却在**发起连接时**计时，与最终是否连上无关。
- **配置 `servers` 名称**  
`aliases` 中的目标 ID 必须与 `**velocity.toml` 的 `[servers]`** 名称一致，否则无法连接。

::: tip 延伸阅读

完整配置键、日志级别、`lang.yml` 占位符与迁移说明见 [ServerTeleport README](https://github.com/NPUcraft/ServerTeleport/blob/main/README.md) 与 [README_en.md](https://github.com/NPUcraft/ServerTeleport/blob/main/README_en.md)。

:::