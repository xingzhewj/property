'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const data = await this.ctx.service.user.find(1);
        this.ctx.body = data;
        // await this.ctx.render('home/home.ejs', {
        //     msg: 'hello 行者'
        // });
    }
}

module.exports = HomeController;
