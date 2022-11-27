// pages/10-selecomponent/10-selecomponent.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: ['上衣','鞋子','裙子', '裤子'],
        swiperList: ['上衣的','鞋子的','裙子的', '裤子的'],
        current: 0,
    },

    handleSwiper(event) {
        // console.log(event.detail)
        this.setData({
            current: event.detail.current,
        });
    },

    // 父组件监听子组件传过来的值，event.detail是子组件传递的值
    handleParent(event) {
        // console.log("监听到了子组件", event.detail);
        this.setData({
            current: event.detail
        });
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