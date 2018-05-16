/**
 * @file 用户数据服务层
 * @Author wangjie19
 * @Date 2018-05-16 15:59:51
 * @Last Modified by: wangjie19
 * @Last Modified time: 2018-05-16 16:07:16
 */

'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async find(id) {
        const user = await this.app.mysql.get('user', { id });
        return user;
    }
}

module.exports = UserService;
