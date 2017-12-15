const config = {
    base: {
        mapKey: "0a2ba157a2874bd41064a40c0f05eeea",
        // mapUrl: "http://m.amap.com/navi/"
        mapUrl: "http://uri.amap.com/navigation/"
    },
    testing: {
        api: "http://service-d.maysatech.com/vankely-mp-merchant-api"
    },
    local: {
        api: "http://service-d.maysatech.com/vankely-mp-merchant-api"
    },
    development: {
        api: "http://service-t.maysatech.com/vankely-mp-merchant-api"
    },
    alpha: {
        api: "http://service-t.maysatech.com/vankely-mp-merchant-api"
    },
    beta: {
        api: "http://service-demo.maysatech.com/vankely-mp-merchant-api"
    },
    production: {
        api: "http://service-vankely.maysatech.com/vankely-mp-merchant-api"
    }
};

export default Object.assign(config.base, config[process.env.PACK_ENV]);
