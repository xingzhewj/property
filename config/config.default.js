'use strict';

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1526371947449_9490';

    // add your config here
    config.middleware = [];
    // 模板引擎
    config.view = {
        mapping: {
            '.ejs': 'ejs'
        }
    };
    // 鉴权
    config.passportProperty = {
        key: 'your_clientID',
        secret: 'your_clientSecret'
    };
    config.session = {
        key: 'EGG_SESS',
        maxAge: 24 * 3600 * 1000, // 1 天
        httpOnly: true,
        encrypt: true
    };
    config.mysql = {
        client: {
            host: '180.76.248.249',
            port: '3306',
            user: 'walker',
            password: 'wangjie110',
            database: 'property'
        },
        app: true,
        agent: false
    };
    return config;
};
