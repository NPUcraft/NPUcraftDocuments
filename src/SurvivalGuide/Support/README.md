---
title: 常见问题
icon: fluent-color:notebook-question-mark-20
prev: ../EconomicSystem/Shop
---

::: important 提问前请先看 [提问的智慧](/QuickStart/HowToAsk)

多数情况在文档、群公告或群文件里已有说明。问之前先搜一遍，把版本、启动器和报错原文准备好。

:::

## 怎么求助

**问：进不去、卡了、物品丢了，该去哪问？**  
答：日常问题先看本文和 [快速入门](/QuickStart/)，再在 QQ 群 [598445021](https://qm.qq.com/q/Mu9dtXLRq8) 问。账号安全、严重漏洞、整服故障按群公告找管理员，不要无差别私聊所有人。

**问：技术问题谁负责？**  
答：群里说明现象即可，有人能答会接。需要运维处理时 **@ 或私聊群主**，并附上报错原文、发生时间和所在子服。

**问：提问要带哪些信息？**  
答：客户端版本、启动器、登录方式、所在子服（大厅 / 主服 / 工业服 / 资源服等），以及「做了什么 → 出现了什么」。模板见 [提问的智慧](/QuickStart/HowToAsk)。

**问：文档写错了或过时了怎么办？**  
答：欢迎按 [参与修订](/QuickStart/Contribute) 提 PR，或在群里指出页面和哪一句不对。

## 进服与账号

**问：服务器地址是什么？当前版本？**  
答：公网 `mc.npucraft.com`，高峰备用 `mc2.npucraft.com`。当前版本 **Java 1.21.8**，支持跨版本兼容，说明见 [更新日志](/Overview/Changelog)。

**问：能用微软正版号直接进吗？**  
答：不能只靠正版登录。本服走 [NPUskin](https://skin.npucraft.com) 外置登录，启动器认证服务器填 `https://skin.npucraft.com/api/yggdrasil`。流程见 [账号注册](/QuickStart/Register)。

**问：没有教育邮箱怎么办？**  
答：填 [无教育邮箱注册申请](https://docs.qq.com/form/page/DTVZtd3piRmdIdGlw)，或用高校联盟 [MUA 皮肤站](https://skin.mualliance.ltd/auth/register-notice) 注册，并改启动器认证地址。

**问：启动器提示认证失败？**  
答：核对认证地址是否为上面那条、邮箱是否已验证、密码是否正确。改完后重启启动器再登。

**问：Java 要装哪个？内存给多少？**  
答：建议 **Java 21**。该版本堆内存不少于 **4 GB**（机器紧可以略降）。`java -version` 找不到命令时，重新装 JDK 并勾选 PATH，或在启动器里手动指定 `java.exe`。详见 [软件环境](/QuickStart/Environment)。

**问：连不上、超时、掉线？**  
答：先换备用地址 `mc2.npucraft.com`，确认客户端是 1.21.8 正式版（不要用快照）。仍不行就把报错原文发群里。

## 切服与子服

**问：进了大厅，怎么去生存？**  
答：东侧传送门，或打 `/zf`（主服）、`/gyf`（工业服）、`/zyf`（资源服）。回大厅用 `/hub` 或 `/lobby`。命令对照见 [常用命令](/QuickStart/BasicCommands)。

**问：生存门提示没权限？**  
答：通往生存三服的门带了 `bungeecord.server.survival`。正式玩家一般有；没有就在群里报游戏名。

**问：三个生存服有什么区别？**  
答：主服住人、圈地、开店；工业服做生电和假人；资源服探索采集，地图会不定期重置，不要把唯一基地建在那里。总览见 [生存服介绍](/SurvivalGuide/SurvivalServer/)。

**问：Bingo、躲猫猫、船坞、虚空实验室怎么去？**  
答：大厅对应传送门，或 `/server Bingo`、`/server HideAndSeek`、`/server Shipyard`、`/server VoidLab`。街机后端 `GameArcade` **暂未开放**，门可能连不上。创造服介绍见 [虚空实验室](/ServerIntroduction/GroupServer/Creative/VoidLab.md)、[船坞](/ServerIntroduction/GroupServer/Creative/Shipyard.md)。

**问：复原工程、模组服在大厅有门吗？**  
答：复原施工端从登录大厅进入。`Reconstruction-forge`、`visitors` 和模组服**不走大厅**。前两者加 QQ **813439644**；[海权论](/ServerIntroduction/ModServer/SeaPower.md)、[魔法金属](/ServerIntroduction/ModServer/Manametal.md) 各自使用独立整合包与地址，见 [模组服](/ServerIntroduction/ModServer/)。

## 背包、死亡与指令

**问：大厅里的东西为什么进生存没了？**  
答：大厅**没有** HuskSync。进生存会按生存组数据重载；从生存回大厅也不会带着矿和装备。

**问：刚切到生存，背包是空的？**  
答：先等动作栏提示数据对齐结束，再开箱、丢东西或连续切服。坐标不同步，你会出现在该子服上次离开的位置。见 [HuskSync](/PluginIntroduction/HuskSync)。

**问：西瓜币三个生存服通用吗？**  
答：通用，同一钱包。新人起始 **10,000🍉**。余额看 `Tab` 或 `/balance`。大厅、创造服和小游戏不走这套商店。

**问：死亡会掉东西吗？**  
答：主服 / 工业服用 [DeathChest](/PluginIntroduction/DeathChest)，潜行右键取回，`/dc on`、`/dc off` 开关。资源服一般为死亡不掉落。找不到箱子时用 `/dc status`。

**问：玩家商店、`/rtp` 在哪个服用？**  
答：玩家店只在**主服商场**（[地图](https://map.npucraft.com/dynmap/?worldname=world&mapname=flat&zoom=6&x=875&y=64&z=1167#)）。`/rtp` 只在**资源服**。挂机小时奖只在主服、工业服，资源服没有。

**问：主服能圈多大的地？**  
答：玩家大范围圈地按 [领地](/SurvivalGuide/EconomicSystem/Residence) 执行，最多 8 块。工业服也能圈，但大约只有 16×16、最多 3 块，不能当主基地替代。

## 语音与其它

**问：语音怎么开？别人听不见我？**  
答：客户端要装 [Simple Voice Chat](/PluginIntroduction/SimpleVoiceChat)，版本对齐 **1.21.8** 和你的加载器。语音走 UDP **20227**，附近大约 48 格可听。没界面或没声音时，先核对模组文件再重进子服。

**问：怎么坐下、躺下？**  
答：楼梯、半砖、地毯可右键坐，也可用 `/sit`、`/lay`，见 [GSit](/PluginIntroduction/GSit)。

**问：假人怎么开？**  
答：生存三服 Leaves 均开放 `/bot`，名前缀 `bot_`，上限 10，重启后可保留。说明见 [LeavesFakePlayer](/PluginIntroduction/LeavesFakePlayer)，大型机器请放到工业服。

**问：网页地图在哪？**  
答：主服 / 工业服有 Dynmap 与 BlueMap，资源服只有 Dynmap，入口 [map.npucraft.com](https://map.npucraft.com)。在线数据见 [plan.npucraft.com](https://plan.npucraft.com)。
