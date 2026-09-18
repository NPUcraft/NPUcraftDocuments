---
title: 技术架构
icon: icon-park:server
author: SUPER2FH
date: 2025-03-11
---

玩家只连一个地址，由 **Velocity 代理**分到各个后端。生存三服共用背包和西瓜币；大厅、创造服和小游戏各自独立。模组服、`Reconstruction-forge`、`visitors`**不在**这条群组链路上。

## 当前群组结构

<div class="arch" aria-label="群组服结构">
  <div class="arch-tl">
    <div class="arch-card">
      <div class="arch-kicker">入口</div>
      <p class="arch-title">玩家客户端</p>
      <p class="arch-meta"><span class="arch-host">mc.npucraft.com</span> · 高峰备用 <span class="arch-host">mc2.npucraft.com</span></p>
    </div>
    <div class="arch-card">
      <div class="arch-kicker">代理</div>
      <p class="arch-title">Velocity</p>
      <p class="arch-meta"><a href="/PluginIntroduction/ServerTeleport.html">ServerTeleport</a> · <a href="/PluginIntroduction/GlobalChat.html">GlobalChat</a> · 回大厅 <span class="arch-cmd">/hub</span></p>
    </div>
    <div class="arch-card">
      <div class="arch-kicker">大厅</div>
      <p class="arch-title"><a href="/ServerIntroduction/GroupServer/Lobby.html">登录大厅 Lobby</a></p>
      <p class="arch-meta">Paper 1.21.4 · ViaVersion · 背包不同步到生存</p>
    </div>
  </div>
  <div class="arch-fork">
    <div class="arch-branch">
      <p class="arch-branch-head">生存组<span>Leaves 1.21.8 · 背包与西瓜币互通</span></p>
      <div class="arch-item"><a href="/SurvivalGuide/SurvivalServer/Survival-Main.html">主服</a><span class="arch-cmd">/zf</span></div>
      <div class="arch-item"><a href="/SurvivalGuide/SurvivalServer/Survival-Industry.html">工业服</a><span class="arch-cmd">/gyf</span></div>
      <div class="arch-item"><a href="/SurvivalGuide/SurvivalServer/Survival-Resource.html">资源服</a><span class="arch-cmd">/zyf</span></div>
      <div class="arch-sync">HuskSync + 西瓜币 · 仅这三服</div>
    </div>
    <div class="arch-branch">
      <p class="arch-branch-head">创造服<span>传送门 / <span class="arch-cmd">/server</span></span></p>
      <div class="arch-item"><a href="/ServerIntroduction/GroupServer/Creative/VoidLab.html">虚空实验室</a></div>
      <div class="arch-item"><a href="/ServerIntroduction/GroupServer/Creative/Shipyard.html">船坞</a></div>
    </div>
    <div class="arch-branch">
      <p class="arch-branch-head">小游戏<span>传送门 / <span class="arch-cmd">/server</span></span></p>
      <div class="arch-item"><a href="/ServerIntroduction/GroupServer/MiniGames/Bingo.html">Bingo</a></div>
      <div class="arch-item"><a href="/ServerIntroduction/GroupServer/MiniGames/HideAndSeek.html">躲猫猫</a></div>
      <div class="arch-item arch-item--muted"><a href="/ServerIntroduction/GroupServer/MiniGames/Arcade.html">街机</a><span class="arch-meta">暂未开放</span></div>
    </div>
  </div>
</div>

从外到内可以看成四层：

1. **入口**：公网 `mc.npucraft.com`（高峰备用 `mc2`）打到代理，不直连某一个 Paper 进程。  
2. **代理**：Velocity 负责鉴权转发、[切服别名](/PluginIntroduction/ServerTeleport)（`/zf` `/gyf` `/zyf` `/hub`）和 [全局聊天](/PluginIntroduction/GlobalChat)。  
3. **大厅**：默认落地 [登录大厅](/ServerIntroduction/GroupServer/Lobby.md)。ViaVersion 让较新的客户端也能进 1.21.4 大厅，再切到版本更高的子服。  
4. **后端**：生存三服、创造服与小游戏各是一台独立实例。大厅里的传送门（AdvancedPortals）和短命令指向同一批后端 ID。

<div class="arch arch-scopes" aria-label="群组内外">
  <div class="arch-scope">
    <div class="arch-kicker">走群组地址</div>
    <p class="arch-title">大厅 · 生存 · 创造 · 小游戏</p>
    <ul>
      <li>一个入口，代理切服</li>
      <li>生存三服共享背包和西瓜币</li>
    </ul>
  </div>
  <div class="arch-scope">
    <div class="arch-kicker">独立开服</div>
    <p class="arch-title">不走登录大厅</p>
    <ul>
      <li><a href="/ServerIntroduction/ModServer/SeaPower.html">海权论</a></li>
      <li><a href="/ServerIntroduction/ModServer/Manametal.html">魔法金属</a></li>
      <li><code>Reconstruction-forge</code></li>
      <li><code>visitors</code></li>
    </ul>
  </div>
</div>

**不走登录大厅的**：[海权论](/ServerIntroduction/ModServer/SeaPower.md)、[魔法金属](/ServerIntroduction/ModServer/Manametal.md) 各自使用独立整合包与地址；`Reconstruction-forge` 与 `visitors` 见 [复原工程](/ServerIntroduction/BuildTheWordForNPU.md)，加 QQ **813439644**。

### 数据怎么走

| 数据 | 范围 | 说明 |
| --- | --- | --- |
| 背包、末影箱、经验、进度 | 仅生存三服 | [HuskSync](/PluginIntroduction/HuskSync)，坐标不同步 |
| 西瓜币 | 生存三服同一钱包 | [CoinsEngine](/SurvivalGuide/EconomicSystem/) |
| 大厅 / 创造服 / 小游戏物品 | 各服自己的 | 进生存会按生存数据重载 |
| 权限 | 各后端 + 代理 | LuckPerms |
| 网页地图 | 生存三服 | 主服 / 工业服有 Dynmap 与 BlueMap；资源服只有 Dynmap |
| 语音 | 大厅与多数子服 | 需客户端 [Simple Voice Chat](/PluginIntroduction/SimpleVoiceChat) |

更细的生存分工见 [生存服介绍](/SurvivalGuide/SurvivalServer/)，子服清单见 [群组服](/ServerIntroduction/GroupServer/)。

## 机房与面板（历史示意图）

下图是较早的节点 / 面板关系示意，用来对照「代理 + 多后端」这一层；**当前对外开放的子服以本节上面的结构为准**。

<figure class="arch-photo-frame">
  <img
    class="arch-photo"
    src="/assets/cos/2025/03/22/67de8680eef71.jpg"
    alt="NPUcraft 早期节点示意"
  />
  <figcaption>早期节点 / 面板关系，仅作对照</figcaption>
</figure>

实例用 MCSM 管理，跑在 Docker 里。成都节点上还能看到地图反代等辅助进程，玩家不用连那些地址。

## **[群组服数据面板](https://plan.npucraft.com)**

<iframe
src="https://plan.npucraft.com"
width="100%"
height="600px"
frameborder="0"
allowfullscreen>
</iframe>
