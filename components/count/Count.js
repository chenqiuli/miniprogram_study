// components/count/Count.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      // console.log("组件被加载了");
      this.timer = setInterval(() => {
        console.log("11");
        if (this.data.count === 0) {
          // 可以在这里清除定时器，也可以在组件卸载的地方清除
          // clearInterval(this.timer);
          // 通知父组件移除自己，移除了之后，这个组件并没有卸载
          this.triggerEvent("Parent");
          return;
        }
        this.setData({
          count: this.data.count - 1
        });
      }, 1000);
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
      console.log("组件被卸载了");
      clearInterval(this.timer);
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    count: 10,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
});
