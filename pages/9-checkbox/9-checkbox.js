// pages/9-checkbox/9-checkbox.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList: [{
            img: "https://gw.alicdn.com/bao/uploaded/i3/1773612688/O1CN018smirv1Vj9Pf4tWJm_!!1773612688.jpg_Q75.jpg_.webp",
            name: "法式方领百搭内搭上衣",
            price: 105,
            num: 1,
            isChecked: false,
        }, {
            img: "https://gw.alicdn.com/bao/uploaded/i2/1773612688/O1CN01mV1BHM1Vj9LGpx6bC_!!1773612688.jpg_Q75.jpg_.webp",
            name: "baby蓝色羽绒服小个子韩系外套",
            price: 450,
            num: 1,
            isChecked: false,
        }, {
            img: "https://gw.alicdn.com/bao/uploaded/i3/1773612688/O1CN01XI5hVe1Vj9PRb31uu_!!1773612688.jpg_Q75.jpg_.webp",
            name: "百搭休闲高腰直筒显瘦抓绒牛仔裤",
            price: 180,
            num: 1,
            isChecked: false,
        }],
        dd: [1, 2],
        isAllChecked: false,
        total: 0,
    },

    handleBlur(event) {
        const value = event.detail.value;
        const idx = event.target.dataset.id;
        this.data.dataList[idx].num = Number(value);
        this.setData({
            dataList: [...this.data.dataList]
        });
    },

    handleSub(event) {
        const idx = event.target.dataset.id;
        this.data.dataList[idx].num = this.data.dataList[idx].num - 1;
        if (this.data.dataList[idx].num > 1) {
            this.setData({
                dataList: [...this.data.dataList]
            });
        }
    },

    handleAdd(event) {
        const idx = event.target.dataset.id;
        this.data.dataList[idx].num = this.data.dataList[idx].num + 1;
        this.setData({
            dataList: [...this.data.dataList]
        });
    },

    handleCheck(event) {
        const idx = event.target.dataset.id;
        this.data.dataList[idx].isChecked = !this.data.dataList[idx].isChecked;
        this.setData({
            dataList: [...this.data.dataList],
        });
        // 联动全选功能
        const hasChecked = this.data.dataList.filter(item => item.isChecked);
        if (hasChecked.length === this.data.dataList.length) {
            // 勾中全选
            this.setData({
                isAllChecked: true,
            });
        } else {
            this.setData({
                isAllChecked: false,
            });
        }
    },

    handleAllCheck() {
        this.setData({
            isAllChecked: !this.data.isAllChecked
        });
        if (this.data.isAllChecked) {
            // 全部选中
            const checkDataList = this.data.dataList.map(item => {
                return {
                    ...item,
                    isChecked: true
                };
            });
            this.setData({
                dataList: checkDataList
            });
        } else {
            // 取消全选
            const unCheckDataList = this.data.dataList.map(item => {
                return {
                    ...item,
                    isChecked: false
                };
            });
            this.setData({
                dataList: unCheckDataList
            });
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})