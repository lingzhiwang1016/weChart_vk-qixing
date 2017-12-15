const utils = require("./utils");

module.exports = {
    // 基本的应用配置信息
    apps: [
        {
            id: "index",
            src: utils.resolve("src/main.js"),
            indexPage: utils.resolve("src/index.html"),
            compiled: true
        }
    ],

    // 开发入口配置
    devServer: {
        appEntrySrc: utils.resolve("src/main.js"), //当前待调试的APP的入口文件
        port: 80 //监听的Server端口
    },

    // 依赖项配置
    proxy: {
        //后端服务器地址 http://your.backend/
        // '/api/*': 'http://localhost:3001'
    },

    // 后端 api 配置，这样配置可以避免将测试服务器端口暴露出去
    api: {
        dev: {},
        prod: {}
    },

    defaultConfig: {
        oss: {
            region: "oss-cn-shanghai",
            bucket: "maysa-h5",
            accessKeyId: "LTAIzhXQUPznwfoX",
            accessKeySecret: "YhfCxtRTgfPjTbYd4X2OI6J7gR8m78"
        }
    },
    development: {
        assetsPublicPath: "/"
    },
    alpha: {
        assetsPublicPath: "http://cdn-h5.maysatech.com/"
    },
    beta: {
        assetsPublicPath: "http://cdn-h5.maysatech.com/"
    },
    production: {
        assetsPublicPath: "http://cdn-h5.maysatech.com/"
    }
};

module.exports.config = Object.assign(module.exports.defaultConfig, module.exports[process.env.PACK_ENV || "development"]);
