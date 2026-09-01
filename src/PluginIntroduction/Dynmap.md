---
title: Dynmap
icon: /assets/cos/2025/03/21/67dcfaab77d93.png
author: SUPER2FH
category:
  - BasePlugin
tag: 
  - Survival-Main
  - Survival-Industry
  - Survival-Resource
---



::: info 完整文档请查阅[Dynmap](https://github.com/webbukkit/dynmap/wiki/Commands)
:::



**Dynmap**是一款类似于 Google Maps 的地图，可在浏览器中查看实时服务器地图。目前已搭载在[生存服-主服](https://map.npucraft.com/dynmap)、[生存服-工业服](https://map.npucraft.com/dynmap-industry)和[生存服-资源服](https://map.npucraft.com/dynmap-resource)。除基础地图渲染外，还支持通过**标记**功能添加自定义内容。标记类型包括**标记点**（图标）、**区域标记**（多边形/立方体轮廓）和**折线标记**（连续线段）。这些标记可分层管理，并通过网页界面控制显示状态。



## **一、标记🎯**

标记（Markers）是最常见的地图标记，通常以[图标](#六、图标查询🎨)的形式显示在地图上，并可附带标签和描述。

### **1. 添加标记📍**

| 指令                                                         | 说明                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| `/dmarker add <标记名称> icon:<图标ID> set:<标记集ID>`       | 在玩家当前位置添加标记，若未指定 set，则默认添加到 `Markers` 集 |
| `/dmarker add id:<标记ID> <标记名称> icon:<图标ID> set:<标记集ID> x:<X> y:<Y> z:<Z> world:<世界名称>` | 在指定位置添加标记，适用于控制台操作                         |

🪧 **使用告示牌添加标记**

1. 确保 `enablesigns` 设置为 `true`
2. 在告示牌上书写如下内容：
   - 第一行：`[dynmap]`
   - 其他行：标记名称、`set:<标记集ID>`（可选）、`icon:<图标ID>`（可选）
3. 放置告示牌后，标记会自动创建，移除告示牌后标记也会删除

### **2. 编辑标记✏️**

| 指令                                                         | 说明                   |
| ------------------------------------------------------------ | ---------------------- |
| `/dmarker movehere <标记名称> set:<标记集ID>`                | 移动标记到玩家当前位置 |
| `/dmarker update <标记名称> set:<标记集ID> icon:<图标ID> newlabel:<新名称>` | 更新标记信息           |
| `/dmarker resetdesc id:<标记ID> set:<标记集ID>`              | 清除标记描述           |
| `/dmarker appenddesc id:<标记ID> set:<标记集ID> desc:"<描述>"` | 添加标记描述           |

### **3. 删除标记❌**

| 指令                                         | 说明               |
| -------------------------------------------- | ------------------ |
| `/dmarker delete <标记名称> set:<标记集ID>`  | 删除指定标记       |
| `/dmarker delete id:<标记ID> set:<标记集ID>` | 删除指定 ID 的标记 |

### **4. 列出标记📜**

| 指令                           | 说明                     |
| ------------------------------ | ------------------------ |
| `/dmarker listsets`            | 显示所有标记集及其属性   |
| `/dmarker list set:<标记集ID>` | 显示指定标记集的所有标记 |

## **二、标记集🗂️**

标记集（Marker Sets）用于组织标记，每个标记必须属于一个标记集。

### **1. 创建标记集➕**

| 指令                            | 说明               |
| ------------------------------- | ------------------ |
| `/dmarker addset <标记集名称>`  | 创建新的标记集     |
| `/dmarker addset id:<标记集ID>` | 创建带 ID 的标记集 |

**额外参数**

- `prio:<N>` - 设置图层优先级
- `hide:<true|false>` - 默认是否隐藏
- `minzoom:<N>` - 设定最小可见缩放级别

### **2. 更新标记集🔄**

| 指令                               | 说明               |
| ---------------------------------- | ------------------ |
| `/dmarker updateset <标记集名称>`  | 更新标记集设置     |
| `/dmarker updateset id:<标记集ID>` | 通过 ID 更新标记集 |

### **3. 删除标记集❌**

| 指令                               | 说明                   |
| ---------------------------------- | ---------------------- |
| `/dmarker deleteset <标记集名称>`  | 删除标记集及其所有标记 |
| `/dmarker deleteset id:<标记集ID>` | 通过 ID 删除标记集     |

## **三、区域标记🏞️**

区域标记（Area Markers）用于在地图上创建 2D 或 3D 区域。

### **1. 添加区域📍**

1. 添加角点：
   - `/dmarker addcorner` - 添加玩家当前位置为角点
   - `/dmarker addcorner <X> <Y> <Z>` - 添加指定坐标为角点
   - `/dmarker clearcorners` - 清空角点列表
2. 创建区域：
   - `/dmarker addarea <区域名称> set:<标记集ID>`

### **2. 更新区域✏️**

| 指令                                             | 说明         |
| ------------------------------------------------ | ------------ |
| `/dmarker updatearea id:<区域ID> set:<标记集ID>` | 更新区域设置 |
| `/dmarker deletearea id:<区域ID> set:<标记集ID>` | 删除区域     |

## **四、圆形标记🔵**

圆形标记（Circle Markers）用于创建圆形或椭圆形区域。

### **1. 添加圆形📍**

| 指令                                               | 说明                   |
| -------------------------------------------------- | ---------------------- |
| `/dmarker addcircle <名称> set:<标记集ID>`         | 以玩家当前位置创建圆形 |
| `/dmarker addcircle id:<ID> <名称> set:<标记集ID>` | 以指定 ID 创建圆形     |

**可选参数**

- `radius:<值>` - 设置半径
- `radiusx:<值> radiusz:<值>` - 设置椭圆半径
- `color:RRGGBB` - 轮廓颜色
- `fillcolor:RRGGBB` - 填充颜色

### **2. 删除圆形❌**

| 指令                                           | 说明         |
| ---------------------------------------------- | ------------ |
| `/dmarker deletecircle id:<ID> set:<标记集ID>` | 删除指定圆形 |

## 五、折线标记📏

折线标记（Poly-Line Markers）用于在地图上绘制连接点的线段。

### **1. 添加折线📍**

1. 添加角点：
   - `/dmarker addcorner` - 添加玩家当前位置为角点
   - `/dmarker addcorner <X> <Y> <Z>` - 添加指定坐标为角点
   - `/dmarker clearcorners` - 清空角点列表
2. 创建折线：
   - `/dmarker addline <线段名称> set:<标记集ID>`

### **2. 删除折线❌**

| 指令                                             | 说明     |
| ------------------------------------------------ | -------- |
| `/dmarker deleteline id:<线段ID> set:<标记集ID>` | 删除折线 |

## **六、图标查询🎨**

| 指令                                                         | 说明     |
| ------------------------------------------------------------ | -------- |
| `/dmarker addicon id:<图标ID> <名称> file:<路径>`            | 添加图标 |
| `/dmarker updateicon id:<图标ID> newlabel:<新名称> file:<路径>` | 更新图标 |
| `/dmarker deleteicon id:<图标ID>`                            | 删除图标 |

### 1. 默认图标🏠

![](/assets/cos/2025/03/23/67dfe447a31bf.png)

### 2. 自定义图标🧩

   ::: info 如需自定义请联系SUPER2FH

   :::

| 现有自定义图标名称 |                           图标预览                           |
| :----------------: | :----------------------------------------------------------: |
|     melon_boat     | ![melon_boat](/assets/cos/2025/03/23/67dfe478b7c13.png) |
|   melon_minecart   | ![melon_minecart](/assets/cos/2025/03/23/67dfe47834e0a.png) |

