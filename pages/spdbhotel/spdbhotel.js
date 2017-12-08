// pages/spdbhotel/spdbhotel.js
import {$wuxLoading} from '../../components/wux'


var allHotelList = [];

Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [],
        cities: [],
        index: 0,
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getData();

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

    getData: function () {

        //显示加载框
        $wuxLoading.show({
            text: '数据查询中',
        });

        var that = this;
        wx.request({
            url: 'https://www.demoyuan.com/wx/hotel',
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                $wuxLoading.hide();

                var list = [];
                var cities = [];
                for (let i = 0; i < res.data.data.length; i++) {

                    var temp = new Object();
                    temp.id = i;
                    temp.open = false;
                    temp.address = res.data.data[i].address;
                    temp.breakfast = res.data.data[i].breakfast;
                    temp.city = res.data.data[i].city;
                    temp.closeDay = res.data.data[i].closeDay;
                    temp.country = res.data.data[i].country;
                    temp.hotelNameCN = res.data.data[i].hotelNameCN;
                    temp.hotelNameEN = res.data.data[i].hotelNameEN;
                    temp.type = res.data.data[i].type;

                    list.push(temp);

                    if (cities.indexOf(temp.city) < 0) {
                        cities.push(temp.city);
                    }
                }

                console.error("---cities.length=" + cities.length);
                console.error("---list.length=" + list.length);
                that.setData({
                    list: list,
                    cities: cities,
                })
                allHotelList = list;
            }
        })

    },


    //监听器--打开选择器
    bindPickerChange: function (e) {
        let city = this.data.cities[e.detail.value];

        let list = allHotelList.filter(function (item) {
            return item.city == city;
        })

        this.setData({
            list: list,
            index: e.detail.value,
        })
    },


    kindToggle: function (e) {
        var id = e.currentTarget.id, list = this.data.list;
        for (var i = 0, len = list.length; i < len; ++i) {
            if (list[i].id == id) {
                list[i].open = !list[i].open
            } else {
                list[i].open = false
            }
        }
        this.setData({
            list: list
        });
    }


})