const co = require("co");
const OSS = require("ali-oss");
const appConfig = require("./app.config");
const client = new OSS(appConfig.config.oss);

// 上传资源
exports.uploadFiles = function (statics, callback) {
    Object.keys(statics).forEach(co.wrap(function* (key) {
        // console.log("✔︎✘");
        try {
            const result = yield client.get(key);
            console.log(`✔ ${result.res.status} "${key}" already exists.`.input);
        }
        catch (error) {
            if (error.status !== 404) return;

            co(function* () {
                const result = yield client.put(key, statics[key]);

                if (callback) callback({ res: statics[key], status: result.res.status });
                console.log(`✔ ${result.res.status} "${key}" upload success!`.info);
            })
                .catch(function (err) {
                    console.log(`✘ ${error.status} "${key}" error.`.error);
                });
        }
    }));
}

// 同步上传资源
exports.uploadFilesSync = function (statics) {

    const promiseArr = [];

    Object.keys(statics).forEach((key) => {
        promiseArr.push(new Promise((resolve, reject) => {
            co(function* () {
                try {
                    const result = yield client.get(key);
                    console.log(`✔ ${result.res.status} "${key}" already exists.`);
                }
                catch (error) {
                    const result = yield client.put(key, statics[key]);
                    console.log(`✔ ${result.res.status} "${key}" upload success!`);
                }

                resolve(key);
            });
        }));
    });

    return Promise.all(promiseArr).then(values => {
        return values;
    });
};

// 删除资源
exports.deleteFiles = function (statics) {
    Object.keys(statics).forEach(co.wrap(function* (key) {
        // console.log("✔︎✘");
        try {
            const result = yield client.delete(key);
            console.log(`✔ ${result.res.status} "${key}" deleted success.`.warn);
        }
        catch (error) {
            console.log(`✘ ${error.status} ${key} error.`.error);
        }
    }));
}

// 查看文件列表
exports.listFiles = function (obj) {
    let params = obj || {};

    co(function* () {
        const result = yield client.list(params);
        console.log(result);
    })
        .catch(function (err) {
            console.log(err);
        });
}
