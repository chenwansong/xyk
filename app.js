//app.js


App({

    onLaunch: function () {
        console.log('app.js--->onLaunch')

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        console.log("app.js--->onLoad")
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log("app.js--->onReady")
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log("app.js--->onShow")
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log("app.js--->onHide")
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log("app.js--->onUnload")
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log("app.js--->onPullDownRefresh")
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log("app.js--->onReachBottom")
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log("app.js--->onShareAppMessage")
    }

})