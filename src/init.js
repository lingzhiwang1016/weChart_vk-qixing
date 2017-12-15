/**
 * Created by vyouyou on 17-8-4.
 */

// import "@/lib/flexible.js";
// import "@/lib/makegrid.js";
import "@/ext/vue-ydui/ydui.flexible";

import Vue from "vue";
import FastClick from "fastclick";

// less
import "@/ext/vue-ydui/styles/base.less";
import "@/assets/less/style-vankely.less";
import "@/assets/less/h5/qixing/base.less";

import logger from "@/util/logger";
import cache from "@/util/cache";
import utils from "@/util/utils";

const install = function (VueClass, opts = {}) {
    VueClass.utils = utils;
    VueClass.prototype.$utils = utils;

    VueClass.logger = logger;
    VueClass.prototype.$logger = logger;

    VueClass.cache = cache;
    VueClass.prototype.$cache = cache;
};

Vue.use(install);

FastClick.attach(document.body);

import NetPlugin from "@/plugin/net";

Vue.use(NetPlugin);

wx.ready(() => {
    Vue.logger.log("wx ready success");
    wx.isReady = true;
    wx.onMenuShareTimeline({
        title: "美好骑行季", // 分享标题
        link: "http://h5-qixing.maysatech.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://h5-qixing.maysatech.com/share.png", // 分享图标
        success: function () {
            Vue.logger.log("wx share success");
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            Vue.logger.log("wx share cancel");
        }
    });

    wx.onMenuShareAppMessage({
        title: "美好骑行季", // 分享标题
        desc: "骑行攻略", // 分享描述
        link: "http://h5-qixing.maysatech.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://h5-qixing.maysatech.com/share.png", // 分享图标
        type: "link", // 分享类型,music、video或link，不填默认为link
        dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
        success: function () {
            Vue.logger.log("wx share success");
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            Vue.logger.log("wx share cancel");
        }
    });

    wx.onMenuShareQQ({
        title: "美好骑行季", // 分享标题
        desc: "骑行攻略", // 分享描述
        link: "http://h5-qixing.maysatech.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://h5-qixing.maysatech.com/share.png", // 分享图标
        success: function () {
            Vue.logger.log("wx share success");
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            Vue.logger.log("wx share cancel");
        }
    });

    wx.onMenuShareWeibo({
        title: "美好骑行季", // 分享标题
        desc: "骑行攻略", // 分享描述
        link: "http://h5-qixing.maysatech.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://h5-qixing.maysatech.com/share.png", // 分享图标
        success: function () {
            Vue.logger.log("wx share success");
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            Vue.logger.log("wx share cancel");
        }
    });

    wx.onMenuShareQZone({
        title: "美好骑行季", // 分享标题
        desc: "骑行攻略", // 分享描述
        link: "http://h5-qixing.maysatech.com", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "http://h5-qixing.maysatech.com/share.png", // 分享图标
        success: function () {
            Vue.logger.log("wx share success");
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
            Vue.logger.log("wx share cancel");
        }
    });
});

wx.error((err) => {
    Vue.logger.log("wx error", err);
});

const url = window.location.href.split("#")[0];
const api = "http://service-t.maysatech.com/vankely-mp-merchant-api/wechat/jsapi/signature";
Vue.logger.log("wx config url", url);

Vue.request({
    method: "get",
    url: api,
    params: {
        url,
        wechatCode: "qixing"
    }
}).then(res => {
    Vue.logger.log("res", res);

    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: res.data.appid, // 必填，企业微信的cropID
        timestamp: res.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.data.noncestr, // 必填，生成签名的随机串
        signature: res.data.signature, // 必填，签名，见附录1
        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone", "openLocation"] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
}).catch(err => {
    Vue.logger.log("err", err);
});

