// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
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
    },

    // handleBindTap(){ } es6的写法 
    handleBindTap() {
        console.log(this.data.value); // 获取data的数据
        // 改变data的数据，跟react的diff算法一样
        this.setData({
            value: '陈秋丽',
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