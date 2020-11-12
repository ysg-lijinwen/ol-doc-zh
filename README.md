# OpenLayers说明文档汉化版
此项目用于维护OpenLayers说明文档的翻译。

- [OpenLayers官方网站](https://openlayers.org/)
- [OpenLayers官方接口文档](https://openlayers.org/en/latest/apidoc/)

## 获取项目
仓库地址：`https://github.com/ysg-lijinwen/ol-doc-zh.git`

拉取项目源码：`git clone https://github.com/ysg-lijinwen/ol-doc-zh.git`

### 项目运行

### 安装项目依赖
1. cd到ol-doc-zh项目目录下；
2. 执行`npm install`，安装依赖，等待完成安装

### 运行
执行`npm run docs:dev`

### 打包
 - 执行`npm run docs:build`
 - 在`/docs/.vuepress`目录下会生产`dist`文件夹，此文件夹中的资源即为放到服务器进行发布所需的资源。