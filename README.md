# 小程序开发

## 一、小程序开发流程

### 1.[微信公众平台](https://mp.weixin.qq.com/)注册并登录生成 AppID

### 2.下载[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

### 3.新建一个空文件夹，使用微信开发者工具新建一个小程序项目，使用生成的 AppID。这里只有管理员才可以上传代码，但是可以在[成员管理](https://mp.weixin.qq.com/wxamp/user/manage?action=index&use_role=1&token=311186451&lang=zh_CN)里添加项目开发人员

### 4.开发者可以使用微信开发者工具在真机上预览自己的小项目

## 二、项目结构

### 1.小程序所有的页面都是在 pages 文件夹下，app.json 是全局配置文件，在 app.json 的 pages 数组里直接写入路径，会自动在 pages 文件夹下生成每个页面对应的文件夹，每个子目录下有 js/json/wxml/wxss 四个文件

![自动写pages路径，自动生成文件](./assets/md/mulu.png)

### 2.[sitemap.json](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/sitemap.html) 文件：用于配置小程序及其页面是否允许被微信索引(爬虫)

## 三、全局配置

### 1.在 app.json 中全局配置

### 2.window 的配置：导航栏，下拉刷新，loading 样式

### 3.底部 tabBar 的配置：lists，borderStyle，selectedColor，color，backgroundColor

### 4.每个页面的 json 文件可重新配置 app.json 中 window 的属性，达到覆盖的作用

## 四、数据绑定：双大括号
