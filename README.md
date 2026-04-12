# NPUcraft Documents 
![MIT License](https://img.shields.io/badge/license-MIT-blue) ![VuePress 2.0](https://img.shields.io/badge/VuePress-2.0-42b883)

## 🌟 项目简介
**NPUcraft一站式文档站**是基于VuePress构建的技术文档平台，整合了以下核心特性：

- 📚 基于VuePress 2.x + Vite的现代化文档架构
- 🎨 采用[vuepress-theme-hope](https://theme-hope.vuejs.press/zh/)主题
- 🔍 集成DocSearch搜索方案
- 🖥️ 支持Reveal.js幻灯片演示功能
- 📱 响应式布局适配多端设备
- 🧩 包含自动目录生成、思维导图呈现等增强功能

## 🛠️ 仅本地部署调试

### 1. 前置条件
- [Node.js](https://nodejs.org/zh-cn/download) 18+ (建议v20 LTS)

- npm 9+ (随Node.js自动安装)
- [Git](https://git-scm.com/downloads) 2.30+

### 2. 镜像加速（中国地区建议）

```bash
# 设置淘宝镜像源
npm config set registry https://registry.npmmirror.com

# 验证配置
npm config get registry
```

### 3. 快速启动

```bash
# 克隆主仓库
git clone https://github.com/NPUcraft/Documents.git
cd Documents

# 安装依赖
npm install

# 启动开发服务器（http://localhost:9090）
npm run docs:dev
```

### 4. 构建命令

|         命令          |   功能说明   |       技术原理        |
| :-------------------: | :----------: | :-------------------: |
|     `docs:build`      | 生产环境构建 | Vite Tree Shaking优化 |
|   `docs:clean-dev`    | 清除缓存启动 |     Vite HMR重置      |
| `docs:update-package` | 依赖版本检测 |     npx执行器机制     |

## 🤝 贡献流程

参考：[如何开始在Github上参与开源项目贡献代码](https://www.informat.cn/qa/250362)

推荐使用：[WebStorm](https://www.jetbrains.com/webstorm/)

### 1. Fork仓库到个人账户
- **访问目标仓库**
   登录GitHub，找到需要贡献的仓库（如`https://github.com/org/project`），点击右上角 **Fork** 按钮。

- **选择目标位置**
   在弹出的界面中选择个人GitHub账号作为Fork目标，系统将自动创建副本仓库（如`https://github.com/your-username/project`）。

---

### 2. 本地开发环境配置
- **克隆仓库到本地**

   ```bash
   git clone https://github.com/your-username/project.git
   cd project
   ```

- **添加上游仓库关联**
   添加原始仓库为远程源，便于同步更新：

   ```bash
   git remote add upstream https://github.com/org/project.git
   git remote -v  # 验证远程仓库配置
   ```

- **创建开发分支**
   避免污染主分支，使用语义化分支命名：

   ```bash
   git checkout -b feat/add-new-feature  # 示例分支名
   ```

---

### 3. 代码修改与提交
- **进行代码变更**
   在本地IDE或编辑器中修改文件，遵循项目编码规范（如代码风格、注释要求）。

- **提交变更到本地仓库**  
   ```bash
   git add .  # 添加所有修改
   git commit -m "feat(core): 新增XXX功能"  # 符合Conventional Commits规范
   ```
   - **Commit Message规范**
     - 类型前缀：`feat`（功能）、`fix`（修复）、`docs`（文档）等
     - 范围：可选模块名，如`(auth)`
     - 描述：简明说明改动内容

- **同步上游最新代码**

   避免后续合并冲突：

   ```bash
   git fetch upstream
   git rebase upstream/main  # 或目标分支名
   ```

---

### 4. 推送代码到远程仓库
- **强制推送分支**  

   ```bash
   git push -u origin feat/add-new-feature --force  # 首次推送需建立追踪
   ```
   若遇到冲突，解决后使用`--force`覆盖远程分支

---

### 5. 创建Pull Request
- **进入GitHub仓库页面**
   在个人Fork仓库中，点击 **Compare & pull request** 按钮。

- **配置PR参数**

   - Base repository：选择原始仓库的目标分支（如 `org/project:main`）
   - Head repository：选择个人分支（如 `your-username:feat/add-new-feature`）

- **填写PR描述**

   - 标题：概括改动核心（如 `新增XXX功能`）
   - **正文模板**：

     ```markdown
     ## 改动目的
     * 解决XXX问题（关联Issue #123）
     * 实现XXX功能需求
   
     ## 修改内容
     - 修改文件A：增加XXX逻辑
     - 新增文件B：实现YYY模块
   
     ## 测试验证
     - [x] 本地单元测试通过
     - [ ] 集成测试待验证
     ```
   ​	引用相关Issue：使用`Closes #123`或`Fixes #456`语法

---

### 6. PR审核与后续处理
- **处理CI/CD检查**

   查看GitHub Actions等自动化检查结果：

   - 若失败：本地修复后重新提交，PR会自动更新

   - 常见问题：代码格式错误、测试覆盖率不足、依赖冲突

- **响应维护者反馈**

   - 在PR讨论区回复评论
   - 追加提交或合并Commits：

     ```bash
     git commit --amend  # 修改最后一次提交
     git push -f origin feat/add-new-feature  # 强制推送更新
     ```

- **合并后的清理**

   ```bash
   git branch -d feat/add-new-feature  # 删除本地分支
   git push origin --delete feat/add-new-feature  # 删除远程分支
   ```

---

### 7. 注意事项
- **Commit规范**
   避免混乱的提交历史，推荐使用交互式Rebase合并多个Commits：

   ```bash
   git rebase -i HEAD~3  # 合并最近3次提交
   ```

- **同步上游仓库**
   定期拉取原始仓库更新，保持Fork仓库的活跃状态：

   ```bash
   git fetch upstream
   git merge upstream/main  # 或使用rebase
   ```

