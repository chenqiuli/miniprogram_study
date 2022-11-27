// components/navbar/navbar.js
Component({
    /**
     * 组件的属性列表，接收父组件的属性
     */
    properties: {
        list: {
            type: Array,
            value: ["即将上映","已经上映"],
        },
        current: {
            type: Number,
            value: 0,
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        // dataList: ["即将上映","已经上映"],
        // currentIndex: 0,
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleTap(event) {
            // this.setData({
            //     currentIndex: event.target.dataset.index
            // });
            // 子组件与父组件通信：触发父组件定义的参数，回调传递给父组件
            this.triggerEvent("ParentEvent", event.target.dataset.index)
        }
    }
})
