//index.js
//获取应用实例
const app = getApp()

Page({



    //跳转利率计算
    toLilv: function () {
        wx.navigateTo({
            url: '../lilv/lilv'
        })
    }
})
