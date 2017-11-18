// pages/lilv/lilv.js
//利率计算
import {$wuxToptips} from '../../components/wux'
import WxValidate from '../../assets/plugins/WxValidate'

Page({

    /**
     * 页面的初始数据
     *
     *   focusMonthAmount: false,
     *   focusMonthInterest: false,
     *   totalAmount: '',
     *   month: '',
     *   monthAmount: '',
     *   monthInterest: '',
     *   type: '',
     *   trueInterest: '',
     *   surfaceInterest: ''
     *
     */
    data: {
        focusMonthAmount: false,//
        focusMonthInterest: false,//
        totalAmount: '',//总本金
        month: '',//分期月数
        monthAmount: '',//每月还款金额
        monthInterest: '',//月利率
        type: '',//计算方式：1月还款额，2单期利率

        mingyinianlilv: '',//名义年利率
        yuebenjin: '',//每月本金
        yuelixi: '',//每月利息
        zonglixi: '',//总利息
        zonghuankuanjine: '',//总还款金额
        trueInterest: ''//真实年利率

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

    resetForm: function () {
        this.setData({
            focusMonthAmount: false,//
            focusMonthInterest: false,//
            totalAmount: '',//总本金
            month: '',//分期月数
            monthAmount: '',//每月还款金额
            monthInterest: '',//月利率
            type: '',//计算方式：1月还款额，2单期利率
            mingyinianlilv: '',//名义年利率
            yuebenjin: '',//每月本金
            yuelixi: '',//每月利息
            zonglixi: '',//总利息
            zonghuankuanjine: '',//总还款金额
            trueInterest: ''//真实年利率
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

        if (!this.WxValidate.checkForm(e)) {
            const error = this.WxValidate.errorList[0]
            this.showToptips(error)
            return false
        }

        // $wuxToptips.success({
        //     hidden: !0,
        //     text: '提交成功',
        // })


        if (this.data.type == 1) {
            //知道月还款额
            var yuebenjin = (this.data.totalAmount / this.data.month).toFixed(2) //每月本金
            var yuelixi = this.data.monthAmount - yuebenjin //每月利息
            var yuelilv = yuelixi / this.data.totalAmount * 100 //月利率
            var zonghuankuanjine = (this.data.monthAmount * this.data.month).toFixed(2)//总还款金额
            var zonglixi = this.data.month * yuelixi//总利息

            var mingyinianlilv = yuelilv * 12  //名义年利率
            var trueInterest = (24 * this.data.month * yuelilv / (parseInt(this.data.month) + 1)).toFixed(2)
            this.setData(
                {
                    mingyinianlilv: mingyinianlilv + "%",//名义年利率
                    trueInterest: trueInterest + "%",//实际年利率
                    yuebenjin: yuebenjin,//每月本金
                    yuelixi: yuelixi,//每月利息
                    zonglixi: zonglixi,//总利息
                    zonghuankuanjine: zonghuankuanjine,//总还款金额
                }
            )

        } else if (this.data.type == 2) {
            //知道单期利率
            var mingyinianlilv = (this.data.monthInterest * 12 ).toFixed(2) //名义年利率
            var yuebenjin = (this.data.totalAmount / this.data.month).toFixed(2) //每月本金
            var yuelixi = this.data.totalAmount * this.data.monthInterest / 100 //每月利息
            var zonglixi = this.data.month * yuelixi//总利息
            var zonghuankuanjine = parseInt(zonglixi) + parseInt(this.data.totalAmount)//总还款金额
            var trueInterest = (24 * this.data.month * this.data.monthInterest / (parseInt(this.data.month) + 1)).toFixed(2)
            this.setData(
                {
                    mingyinianlilv: mingyinianlilv + "%",//名义年利率
                    trueInterest: trueInterest + "%",
                    yuebenjin: yuebenjin,//每月本金
                    yuelixi: yuelixi,//每月利息
                    monthAmount: parseInt(yuebenjin) + parseInt(yuelixi),//每月还款金额
                    zonglixi: zonglixi,//总利息
                    zonghuankuanjine: zonghuankuanjine//总还款金额
                }
            )
        }
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