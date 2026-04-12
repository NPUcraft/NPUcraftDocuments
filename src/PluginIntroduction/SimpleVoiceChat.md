---
title: SimpleVoiceChat  
icon: fluent-emoji:microphone  
author: SUPER2FH  
category:  
  - FunctionalPlugin  
tag:  
  - Survival-Main  
  - Survival-Industry  
  - Survival-Resource
---

[Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)（**SVC**）提供 Minecraft Java 版**近距离语音**：附近玩家实时通话，支持按键说话、语音激活、小组与音量调节。服务端已安装插件时，你仍须在**本机**安装与**游戏版本、模组加载器一致**的客户端模组，否则无法使用语音。

::: tip 官方与版本

- 项目页（下载、更新日志、说明）：[Modrinth · Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)  
- 客户端游戏版本以 **[更新日志](/Overview/Changelog)** 中「服务器当前版本」为准，模组须选 **同一 Minecraft 小版本** + **Fabric / Forge / NeoForge / Quilt** 中与启动器一致的分支。

:::

## **一、为什么必须装客户端模组？**

- **服务端**：以 **Bukkit / Paper 插件**形式运行，负责转发与同步。  
- **客户端**：语音采集、编解码在**你的电脑**上完成，须安装 **Simple Voice Chat 模组**。  
- **原版客户端**：**无法替代**——不装模组则不能使用语音（常见为无界面或无法连接语音通道）。

## **二、客户端安装**

1. **对齐版本**：打开 [更新日志](/Overview/Changelog)，确认当前周目 Java 版版本号（如 `1.21.x`）。
2. **选定加载器**：在 **Fabric**、**Forge**、**NeoForge**、**Quilt** 中任选其一（与整合包或你惯用的加载器一致）。
3. **下载模组**：进入 [Modrinth 项目页 → Versions](https://modrinth.com/plugin/simple-voice-chat/version)，筛选 **相同 MC 版本** + **相同加载器**，下载 `.jar`。
4. **放入 mods 文件夹**：为该版本装好加载器后，将模组文件放入对应版本的 `mods` 文件夹；若无此文件夹，可先启动一次带加载器的游戏，或通过启动器打开「版本目录」查看路径。

::: tip PCL2 / HMCL 用户

在对应版本的 **版本设置** 中可查看 **游戏目录 / 模组目录**；部分启动器支持一键安装 Fabric、Forge 并管理模组列表。

:::

## **三、进服与操作**

1. 按 [软件环境](/QuickStart/Environment)、[账号注册](/QuickStart/Register) 配置外置登录并启动游戏。
2. 进入 NPUcraft 对应子服；若语音长期未连接，可尝试**重进该子服**，并查阅本节 **五、常见问题**。
3. 默认按 `V` 键打开语音界面（**选项 → 控制** 中可搜索 `voice` / `Simple Voice Chat` 修改）。
4. 在界面中可设置 **麦克风 / 扬声器**、**按键说话**、**静音**、**附近玩家音量**；小组语音可通过界面或 `/voicechat` 相关子命令（随模组版本略有差异）。

::: note 指令与界面文案

完整快捷键、指令与图标含义以 **Modrinth 页面外链 Wiki** 及游戏内说明为准，不同版本菜单可能略有不同。

:::

## **四、麦克风、系统与网络**

- **系统权限**：Windows / macOS 若弹出「是否允许 Java / Minecraft 访问麦克风」，请选择**允许**。  
- **输入输出设备**：先在系统声音设置里确认默认麦克风、耳机无误，再在 SVC 游戏内设置中做**麦克风测试**。  
- **蓝牙设备**：部分耳机延迟或声道异常，可换有线或更换设备对比。  
- **UDP 与端口**：语音走 **UDP**；端口为 **25577**。端口由**服务器与机房防火墙**开放，玩家侧通常**不必**手动开端口；若全员无法使用语音，请联系管理员排查。

## **五、常见问题**

- **别人听不见我，或没有语音界面**  
核对 **加载器 + MC 小版本 + 模组文件** 是否一致；重启客户端后进服。仍无效请按 [提问的智慧](/QuickStart/HowToAsk) 说明版本、加载器、模组全名，并附上截图或报错原文。
- **能否不装客户端、只靠服务端插件？**  
不可以，必须在本地 `mods` 文件夹中安装对应模组。



::: info 进阶功能

录音、API、图标含义等请参考 [Modrinth · Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat) 项目说明与 Wiki 链接。

:::