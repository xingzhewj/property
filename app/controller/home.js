'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        await this.ctx.render('home/home.ejs', {
            msg: 'hello 行者'
        });
    }
}

module.exports = HomeController;
