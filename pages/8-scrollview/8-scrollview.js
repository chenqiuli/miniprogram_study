// pages/8-scrollview/8-scrollview.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isRefresh: false,

        idx: 1,
    },

    handleLower() {
        // console.log("到底了");
    },

    handleRefresh() {
        console.log("上拉刷新了");
        setTimeout(() => {
            this.setData({
                isRefresh: false
            });
        }, 2000);
    },

    handleRight() {
        console.log("滚动到右边了");
        this.setData({
            idx: this.data.idx + 1
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