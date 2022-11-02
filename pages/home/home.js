// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [
            "上传学习强国积分",
            "打卡知米背单词",
            "撕掉祛疤贴再洗澡"
        ],
        inputValue: "",
    },

    handleInput(e) {
        // console.log(e.detail.value,'输入框输入的值');
        this.setData({
            inputValue: e.detail.value
        });
    },

    handleTap() {
        const {
            list,
            inputValue
        } = this.data;
        if (inputValue.length) {
            const newList = [...list, inputValue];
            this.setData({
                list: newList,
                inputValue: ""
            });
        }
    },

    handleDelete(e) {
        // 拿到标签上绑定的值
        const id = e.target.dataset.id;
        const newList = this.data.list.map((item, index) => {
            if (index !== id) {
                return item;
            }
        }).filter(item => item);
        this.setData({
            list: newList
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