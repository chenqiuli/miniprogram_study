// pages/6-request/6-request.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataList: [],
    },

    // 1-没有跨域限制
    // 2-服务器域名配置
    handleAjax() {
        console.log(this)
        wx.request({
            url: 'https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4',
            method: 'GET',
            data: {

            },
            header: {

            },
            success: (res) => { // 使用箭头函数，让this与上下文一致，才可以使用this.setData
                this.setData({
                    dataList: res.data.data.hot
                });
            }
        });
    },

    /**
     * 生命周期函数--监听页面加载，请求ajax接口 ，只有一次
     */
    onLoad(options) {
        console.log("onLoad");
    },

    /**
     * 生命周期函数--监听页面初次渲染完成，只有一次
     */
    onReady() {
        console.log("onReady");
    },

    /**
     * 生命周期函数--监听页面显示，每次切换页面都会走
     */
    onShow() {
        console.log("onShow");
    },

    /**
     * 生命周期函数--监听页面隐藏，每次切换页面都会走
     */
    onHide() {
        console.log("onHide");
    },

    /**
     * 生命周期函数--监听页面卸载，只有一次
     */
    onUnload() {
        console.log("onUnload");
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