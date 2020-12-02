/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:23:57
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 16:25:52
 * @Description: file content
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api接口'
  }
}

module.exports = HomeController;