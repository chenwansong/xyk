// pages/lilv/lilv.js
//利率计算
import {$wuxToptips} from '../../components/wux'
import WxValidate from '../../assets/plugins/WxValidate'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        focusMonthAmount: false,
        focusMonthInterest: false,
        totalAmount: '',
        month: '',
        monthAmount: '',
        monthInterest: '',
        type: ''

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.initValidate()
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


    //输入总金额
    input_total_amount: function (e) {

        this.setData({
            totalAmount: e.detail.value
        })

    },

    //输入总分期数
    input_month: function (e) {
        this.setData({
            month: e.detail.value
        })
    },

    //输入月还款金额
    input_amount_month: function (e) {
        this.setData({
            monthAmount: e.detail.value
        })
    },

    //输入了分期费率
    input_interest_month: function (e) {
        this.setData({
            monthInterest: e.detail.value
        })

    },

    //切换选择计算方式
    radioChange: function (e) {
        this.setData({
            type: e.detail.value,
            focusMonthAmount: e.detail.value == 1 ? true : false,
            focusMonthInterest: e.detail.value == 2 ? true : false,
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

    //提交表单计算
    submitForm: function (e) {
        const params = e.detail.value

        console.log("submitForm--totalAmount=" + this.data.totalAmount)
        console.log("submitForm--month=" + this.data.month)
        console.log("submitForm--monthAmount=" + this.data.monthAmount)
        console.log("submitForm--monthInterest=" + this.data.monthInterest)
        console.log("submitForm--type=" + this.data.type)


        if (!this.WxValidate.checkForm(e)) {
            const error = this.WxValidate.errorList[0]
            this.showToptips(error)
            return false
        }

        // $wuxToptips.success({
        //     hidden: !0,
        //     text: '提交成功',
        // })

    },


    initValidate() {
        this.WxValidate = new WxValidate({
            totalAmount: {
                required: true,
            },
            month: {
                required: true,
            },
            radio: {
                required: true,
            },
            monthAmount: {
                assistance: true,
            },
            monthInterest: {
                assistance: true,
            },

        }, {
            totalAmount: {
                required: '请输入分期总金额',
            },
            month: {
                required: '请输入总分期数',
            },
            radio: {
                required: '请选择已知利息计算方式',
            },
        })

        this.WxValidate.addMethod(
            'assistance', (value, param) => {
                // return this.WxValidate.optional(value) || (value.length >= 1 && value.length <= 2)
                return (this.data.type == 1 && this.data.monthAmount > 0 ? true : false) || (this.data.type == 2 && this.data.monthInterest > 0 ? true : false)
            }, '请输入选择的利息计算数据'
        )
    },
})