Page({

    /**
     * 页面的初始数据
     */
    data: {
        // tablist: ['周一','周二','周三','周四','周五']
        tablist: [{
            day: '周一',
            work: '手抓饼'
        }, {
            day: '周二',
            work: '肉夹馍'
        }, {
            day: '周三',
            work: '螺蛳粉'
        }, {
            day: '周四',
            work: '五谷鱼粉'
        }, {
            day: '周五',
            work: '吃个饭吧'
        }],
        idx: 0,
    },

    // bindtap 在text上没有吗？？？
    handleTap(event) {
        // event.target.dataset.id  事件源
        // event.curentTarget.dataset.id 当前绑定的事件源
        const id = event.target.dataset.id;
        this.setData({
            idx: id
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