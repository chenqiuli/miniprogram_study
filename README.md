# 小程序开发

## 一、小程序开发流程

### 1.[微信公众平台后台](https://mp.weixin.qq.com/)注册并登录生成 AppID

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

```html
<!-- 表达式 -->
<view>{{ 20 + 10 }}</view>
<!-- 三元表达式 -->
<view>{{ 20 > 10 ? 'aaa' : 'bbb' }}</view>
<!-- 变量 -->
<view>{{ value }}</view>
<!-- 属性同样支持变量 -->
<view class="my-{{ class[0] }}">aaa</view>
<view class="my-{{ class[1] }}">bbb</view>
<view class="my-{{ class[2] }}">ccc</view>
<!-- 列表渲染，默认item与index名 -->
<view wx:for="{{list}}" wx:key="index">
  {{index}}：{{item.name}}-{{item.age}}
</view>
<!-- 列表渲染，改变item与index名 -->
<view wx:for="{{list}}" wx:for-index="idx" wx:for-item="ele" wx:key="idx">
  {{idx}}：{{ele.name}}-{{ele.age}}
</view>
<!-- 条件渲染 -->
<!-- wx:if其实就是visibility:visible/hidden，元素会有局部渲染的过程，适用于运行条件不大可能改变的场景 -->
<view wx:if="{{isCreated}}"> 我是动态创建和删除的-if </view>
<view wx:else="{{isCreated}}"> 我是动态创建和删除的-else </view>
<!-- 也可用三元表达式表示 -->
<view class="{{isCreated ? 'show' :'hidden'}}"> 我是动态创建和删除的 </view>
<!-- hidden其实就是display:block/none，dom元素在，一开始就被渲染了，适用于频繁切换的场景 -->
<view hidden="{{isShow}}"> 我是动态隐藏和显示的 </view>
```

```json
 data: {
        value: '测试数据',
        class: ['aaa', 'bbb', 'ccc'],
        list: [{
            name: 'qiu1',
            age: 1,
        }, {
            name: 'qiu2',
            age: 18,
        }, {
            name: 'qiu3',
            age: 182,
        }, {
            name: 'qiu4',
            age: 183,
        }],
        isCreated: true,
        isShow: true,
    }
```

## 五、事件绑定，获取视图状态，改变视图状态

### 1.获取 data：this.data

### 2.改变 data：this.setData({})

### 3.给事件传参：给元素绑定 data-xxx，获取参数是 event.target.dataset.xxx

### 4.事件绑定事件只能用在事件上，不能用在双括号内，双括号内调用函数借助 wsx

```html
<!-- 事件绑定，bindtap会向上冒泡 -->
<button bindtap="handleBindTap" type="primary">点击1</button>
<!-- 事件绑定，catchtap不会向上冒泡 -->
<button catchtap="handleCatchTap" type="primary">点击2</button>
<!-- 尝试使用区别一下bindtap和catchtap -->
<!-- 点击inner view会触发handleInnerTap和handleCenterTap -->
<!-- 点击center view只触发handleCenterTap -->
<!-- 点击outer view只触发handleOuterTap -->
<view bindtap="handleOuterTap" class="outer">
  outer view
  <view catchtap="handleCenterTap" class="center">
    center view
    <view bindtap="handleInnerTap" class="inner">inner view</view>
  </view>
</view>
<!-- 点击事件传递参数 -->
<view wx:for="{{ list }}" wx:key="index">
  <text>{{ item }}</text>
  <!-- 在标签上用data-xx，点击事件可拿到值 -->
  <button class="delete" bindtap="handleDelete" data-id="{{ index }}">
    删除
  </button>
</view>
```

```js
// handleBindTap(){ } es6的写法
    handleBindTap() {
        console.log(this.data.value); // 获取data的数据
        // 改变data的数据，跟react的diff算法一样
        this.setData({
            value: 'cql',
        })
    },

    handleCatchTap() {
        this.setData({
            isCreated: !this.data.isCreated,
            isShow: !this.data.isShow
        })
    },

    handleInnerTap(event) {
        console.log('inner tap', event);
    },

    handleCenterTap(event) {
        console.log('center tap', event);
    },

    handleOuterTap(event) {
        console.log('outer tap', event);
    },

    handleDelete(e) {
        // 拿到标签上绑定的值
        const id = e.target.dataset.id;
        console.log(id);
    },
```

## 六、wxss 语法

### 跟 css 一样，部分不同：

### 1.尺寸单位：rpx---微信小程序独有解决屏幕自适应的尺寸单位，规定屏幕宽度为 750rpx，使用 rpx 设置元素和字体的大小，在不同尺寸自动适配。官方建议以 iphone6 设计稿为标准，1rpx = 0.5px = 1 物理像素。iphone6 量出来的尺寸是多少 px，最终就以多少 rpx 为准 [原因](https://blog.csdn.net/weixin_41829477/article/details/104265054)

### 2.样式导入

```bash
@import "common.wxss";
```

## 七、[wxs 语法](https://developers.weixin.qq.com/miniprogram/dev/reference/wxs/)：小程序的一套脚本语言

### 使用场景：当在 wxml 中，放在双大括号内的数据需要进行逻辑运算的时候，注意里面不能使用 js 的 es6 语法

```html
<!-- 获取js状态的值，传给wxs模块计算格式化时间戳 -->
<wxs src="./utils.wxs" module="utils"></wxs>
<view>{{utils.handleDate(timestamp)}}</view>

<!-- 模糊查询 -->
<view>模糊查询</view>
<view>
  <input
    type="text"
    placeholder="请搜索"
    value="{{textValue}}"
    bindinput="handleInput"
    class="input"
  />
</view>
<view wx:for="{{utils.filterDataList(dataList,textValue)}}" wx:key="index">
  {{item}}
</view>
```

```js
// 5-wxs.js
data: {
    textValue: "",
    timestamp: 1667550940096,
    dataList: ["cherry", "alex", "chris", "niki", "jake", "eric", "annie"]
},
// utils.wsx
// 把时间戳转换为年月日时分秒的格式
function handleDate(timestamp) {
    var year = getDate(timestamp).getFullYear();
    var month = getDate(timestamp).getMonth() + 1;
    var date = getDate(timestamp).getDate();
    var hour = getDate(timestamp).getHours();
    var minute = getDate(timestamp).getMinutes();
    var second = getDate(timestamp).getSeconds();
    return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
};

// 模糊查询
function filterDataList(data, value) {
    return data.filter(function (item) {
        return item.indexOf(value) > -1;
    });
}

module.exports = {
    handleDate: handleDate,
    filterDataList: filterDataList
};
```

## 八、[数据请求](https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html)

### 1.使用微信自带的 api：wx.request、wx.uploadFile、wx.downloadFile，只能请求 https 协议的，wx.connectSocket，只能请求 wss 协议的

### 2.微信小程序不是浏览器，是一个带有浏览器内核的 webview，因此不存在跨域限制，跨域是由于浏览器的同源策略导致的，协议，域名，端口不同，会导致跨域

### 3.不存在跨域，但是需要配置[服务安全域名](https://mp.weixin.qq.com/wxamp/devprofile/get_profile?token=1994225168&lang=zh_CN)，应用到小程序中

![](./assets/md/配置域名.png)
![](./assets/md/域名.png)

```js
wx.request({
  url: "example.php", //仅为示例，并非真实的接口地址
  data: {
    x: "",
    y: "",
  },
  header: {
    "content-type": "application/json", // 默认值
  },
  success: (res) => {
    // 使用箭头函数，让this与上下文一致，才可以使用this.setData
    this.setData({
      dataList: res.data.data.hot,
    });
  },
});
```

### 4.调用自己本地的接口，需要先打开不校验合法域名开关，才可以调通

![](./assets/md/1.png)
