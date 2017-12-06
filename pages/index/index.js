//index.js

Page({
    data: {
        imgUrls: [
            'https://onlineapp.spdbccc.com.cn/ccoa/new/productactivity/cardProductPicture.json?picUrl=/wsoadata/product/meiyun0186001_20160415004726.jpg',
            'http://www.flyertea.com/hot/cmb/img/baijin.png',
            'http://www.flyertea.com/hot/cmb/img/zuanshi.png',
            'http://www.flyertea.com/hot/cmb/img/aebaijin.png'
        ],

        components: [
            {
                title: '招行天书',
                url: '/pages/cmbmcc/cmbmcc',
                icon: '../../assets/images/iconfont-countup.png',
            },
            {
                title: '真实利率',
                url: '/pages/lilv/lilv',
                icon: '../../assets/images/iconfont-keyboard.png',
            },
            {
                title: '浦发AE酒店',
                url: '/pages/spdbhotel/spdbhotel',
                icon: '../../assets/images/iconfont-keyboard.png',
            },


        ],
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:

        function () {

        }

    ,

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    }
    ,

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    }
    ,

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    }
    ,

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    }


})
