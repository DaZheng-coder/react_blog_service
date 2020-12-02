/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:23:57
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 20:23:48
 * @Description: file content
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result = await this.app.mysql.get('blog_content', {})
    console.log(result)
    this.ctx.body = result
  }
}

module.exports = HomeController;