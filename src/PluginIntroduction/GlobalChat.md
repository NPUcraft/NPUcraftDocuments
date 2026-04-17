---

title: GlobalChat
icon: mdi:forum-outline
author: SUPER2FH
category:

- FunctionalPlugin
tag:
- Lobby
- Survival-Main
- Survival-Industry
- Survival-Resource

---

**GlobalChat** 是 NPUcraft 自研的 **Velocity 3.x** 全局聊天插件：多频道、**MiniMessage** 模板、按频道的子服白名单、发送冷却与 `@` 提及、可选历史记录，以及管理员公告命令 `/gb`。源码与完整说明：[github.com/NPUcraft/GlobalChat](https://github.com/NPUcraft/GlobalChat)。

::: info 运行环境

需要 **Java 17** 构建与运行目标一致；代理为 **Velocity 3.x**（与插件构建所用 API 一致）。发布 jar 仅内嵌 SnakeYAML；**MiniMessage / Adventure 由 Velocity 提供**。

:::

## **一、玩家命令：`/g`**

别名：`/globalchat`。

```
/g <list|history|info|on|off|reload> [频道|页码]
```


| 子命令               | 作用                         |
| ----------------- | -------------------------- |
| `/g on [频道]`      | 进入全局频道；省略频道时为配置中的**第一个**频道 |
| `/g off`          | 关闭全局频道，恢复后端普通聊天            |
| `/g list`         | 列出频道等（具体以游戏内为准）            |
| `/g history [页码]` | 查看聊天历史（若已启用）               |
| `/g info`         | 信息                         |
| `/g reload`       | 重载配置（需权限）                  |


频道消息格式、允许广播的子服、未开 `/g` 是否仍收某频道消息等均由 `**config.yml`** 中 `channels` 等项控制；频道 id 在配置里会规范为**小写**。

## **二、管理员公告：`/gb`**

别名：`/globalchatbroadcast`。玩家需 `**globalchat.broadcast**`；**控制台不校验该节点**。

```
/gb [chat|title|both] [停留秒数] [--channel <频道>|--channel=<频道>] [-c <频道>] [--current-server|--local] <消息>
```

- **模式**：`chat` 仅聊天栏，`title` 仅大标题，`both` 两者兼有。  
- `**--channel` / `-c`**：指定目标频道；未指定时，玩家侧一般按**当前所开频道**筛选收件人，控制台侧多为默认频道。  
- `**--current-server` / `--local`**：仅向发送者**当前子服**上的玩家投递。

公告模板、全屏标题时长、`wrap-width` 换行等见配置中的 `**admin-broadcast`** 段。

## **三、权限（摘要）**


| 节点                            | 用途                                                             |
| ----------------------------- | -------------------------------------------------------------- |
| `globalchat.send.<channelId>` | 在对应频道发送全局消息                                                    |
| `globalchat.command`          | `/g` 的管理类子命令（`list` / `on` / `off` / `history` 等；`info` 通常不需要） |
| `globalchat.reload`           | `/g reload`                                                    |
| `globalchat.broadcast`        | `/gb`                                                          |
| `globalchat.bypass.cooldown`  | 绕过发送冷却                                                         |


