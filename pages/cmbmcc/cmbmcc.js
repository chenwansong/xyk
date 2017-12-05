// pages/cmbmcc/cmbmcc.js
//招商无积分MCC查询
import {$wuxLoading, $wuxToast, $wuxToptips} from '../../components/wux'
import WxValidate from '../../assets/plugins/WxValidate'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        mcc: "",
        mccblacklist: [],

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initValidate();
        this.formatData(null);
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    input_mcc: function (e) {

        this.setData({
            mcc: e.detail.value
        })
    },


    showToptips(error) {
        const hideToptips = $wuxToptips.show({
            timer: 3000,
            text: error.msg || '请填写正确的字段',
            success: () => console.log('toptips', error)
        })

        setTimeout(hideToptips, 1500)
    },

    resetForm: function () {
        this.setData({
            mccblacklist: []
        })
    },

    //未在黑名单中查询到该MCC
    showNoData() {
        $wuxToast.show({
            type: 'success',
            timer: 3000,
            color: '#fff',
            text: '恭喜!\n未查询到该MCC',
            success: () => console.log('已完成')
        })
    },


    //提交表单计算
    submitForm: function (e) {

        //验证输入格式
        if (!this.WxValidate.checkForm(e)) {
            const error = this.WxValidate.errorList[0]
            this.showToptips(error)
            return false
        }

        //重置查询结果列表
        this.setData({
            mccblacklist: []
        })

        //显示加载框
        $wuxLoading.show({
            text: '数据查询中',
        })


        var that = this
        wx.request({
            url: 'https://www.demoyuan.com/wx/wx', //仅为示例，并非真实的接口地址
            method: 'GET',
            data: {
                info: this.data.mcc,
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                $wuxLoading.hide()

                var total_count = JSON.stringify(res.data.data.total_count)
                console.error("total_count=" + total_count)

                if (total_count == "0") {
                    //未查询到
                    console.error("----未查询到mcc")
                    that.showNoData()
                } else {
                    that.setData({
                        mccblacklist: res.data.data.objects
                    })
                }

                console.log(res.data)
            }

        })

    },


        // data:
        //     {
        //          "total_count": 1,
        //         "objects": [
        //             {
        //                 "blackmcc": "836614670110080",
        //                 "mccname": "无",
        //                 "month": "2017年9月",
        //             }, {
        //                 "blackmcc": "836614670110080",
        //                 "mccname": "无",
        //                 "month": "2017年9月",
        //             }
        //         ]
        //     }
    //整理数据
    formatData: function (mccblacklist) {
        // if (mccblacklist.length > 0) {

            let date = new Date;
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            month = (month < 10 ? "0" + month : month);
            let currentData = (year.toString() + month.toString());//201712


            // let mccblacklist;

        console.error(month);

        // }
    },


    initValidate() {
        this.WxValidate = new WxValidate({
            inputmcc: {
                required: true,
                assistance: true
            },

        }, {
            inputmcc: {
                required: '请输入MCC',
            },
        })

        this.WxValidate.addMethod(
            'assistance', (value, param) => {
                return (this.data.mcc.length == 15 ? true : false) && (new RegExp(/^[0-9a-zA-Z]*$/g).test(this.data.mcc))
            }, '请输入正确的MCC'
        )
    }
})