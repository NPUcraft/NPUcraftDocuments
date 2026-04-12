---
title: 文档贡献
icon: logos:github-icon
author: SUPER2FH
date: 2026-04-12
prev: ./HowToAsk
---

本站由 [NPUcraft/Documents](https://github.com/NPUcraft/Documents) 仓库构建并部署。**正文与配置均以 Markdown 与 VuePress 配置为主**，欢迎你通过 GitHub 修正笔误、补充玩法说明、更新过时信息或改进排版与导航。

::: tip 若只是想反馈「某页写得不对」，可以在QQ群或Issue中说明；**但直接提交PR能更快上线**。
::: 

## **一、仓库与许可**

| 项目 | 说明 |
| :--- | :--- |
| **源码** | [github.com/NPUcraft/Documents](https://github.com/NPUcraft/Documents) |
| **许可** | MIT（见仓库 `package.json` 中 `license` 字段） |

---

## **二、方式一（在线修改）**

适合：修正错别字、调整一句话、增补一条列表项等，**无需安装本地环境**。

1. 打开仓库中需要修改的文件（文档正文位于 `src/` 下，例如 `src/Overview/README.md`）。
2. 若你**尚未 Fork**：点击仓库右上角 **Fork**，在你的账号下生成一份副本。
3. 在你的 Fork 里打开同一文件，点击铅笔图标 **Edit this file**。
4. 编辑完成后，在页面下方填写 **Commit message**（建议见下文「提交说明」），选择 **Create a new branch** 并发起 **Propose changes**。
5. 在随后页面点击 **Create pull request**，填写 PR 标题与说明，提交到 **上游仓库** `NPUcraft/Documents` 的默认分支（一般为 `main`）。

维护者审核通过后会合并；你无需在本地安装 Node.js。

---

## **三、方式二（克隆本地）**

适合：新增整页文档、调整侧栏/导航、批量替换链接，或希望在浏览器中确认排版与主题效果。

### **1. 前置条件**

- [Node.js](https://nodejs.org/) 18+（建议 LTS 20+）
- [Git](https://git-scm.com/downloads)
- 任选代码编辑器（VS Code、WebStorm 等）

### **2. 获取源码**

**首次参与**建议先 **Fork** 上游仓库，再克隆**你自己的 Fork**（便于直接推送分支并开 PR）：

```bash
git clone https://github.com/<你的GitHub用户名>/Documents.git
cd Documents
```

将上游仓库加为 `upstream`，便于之后同步主仓库更新：

```bash
git remote add upstream https://github.com/NPUcraft/Documents.git
git remote -v
```

若你已有仓库的**写权限**，也可直接克隆 `NPUcraft/Documents` 并在此仓库上建分支，具体以团队约定为准。

### **3. 安装依赖并本地预览**

```bash
npm install
npm run docs:dev
```

浏览器访问开发服务器（默认端口见项目 `package.json` 中 `docs:dev` 脚本，一般为 `http://localhost:9090`）。修改 `src/` 下文件后会热更新，便于对照预览。

### **4. 生产构建**

```bash
npm run docs:build
```

用于确认构建无报错；日常改文档通常以 `docs:dev` 为主即可。

---

## **四、站内目录大致说明**

| 路径 | 作用 |
| :--- | :--- |
| `src/**/*.md` | 各页面正文（含各子目录下的 `README.md` 作为章节首页） |
| `src/.vuepress/config.ts` | VuePress 全局配置 |
| `src/.vuepress/theme.ts` | 主题（Hope）与插件、搜索等 |
| `src/.vuepress/sidebar/zh.ts` | **中文侧栏**顺序与条目；新增页面后通常需在此注册 |
| `src/.vuepress/navbar/zh.ts` | 顶部导航 |

**新增一篇文档页面时**，除添加 `.md` 文件外，一般还需在 `sidebar/zh.ts`（及必要时在 `navbar`）中加入对应条目，否则读者从侧栏无法直接点进该页。

---

## **五、分支、提交与 Pull Request**

### **1. 分支命名**

建议使用可读前缀，例如：

- `docs/fix-typo-overview`：修正笔误
- `docs/add-quickstart-xxx`：新增或扩充快速入门某页

### **2. 提交说明**

可采用简洁的前缀，便于浏览历史，例如：

- `docs:` 文档内容变更
- `fix:` 纠正错误链接或明显笔误

示例：`docs: 补充生存服经济说明`、`docs: 修正 Overview 中服务器地址笔误`。

### **3. PR描述写清**

- **动机**：为何要改（纠错 / 补充规则 / 跟进版本等）
- **范围**：主要改了哪些路径下的文件
- **关联**：若仓库使用 Issue，可写 `Fixes #编号` 或 `Closes #编号`

首次贡献者按 GitHub 提示完成 **Contributor 协议**（若仓库启用）即可。

---

## **六、合并之后**

合并后由维护者部署即可在文档站生效；若你本地仍保留分支，可在同步 `upstream/main` 后删除已合并分支，保持 Fork 整洁。

更完整的 Git 工作流（如与上游同步、Rebase、多提交整理）可参考**仓库根目录的 [README.md](https://github.com/NPUcraft/Documents/blob/main/README.md)** 中的「贡献流程」一节。

::: warning 请勿提交敏感信息

不要将真实密码、Token、内网地址、未公开的运维信息写入仓库。文档中引用的公开服务器地址、官方链接等应以社区已公开信息为准。

:::
