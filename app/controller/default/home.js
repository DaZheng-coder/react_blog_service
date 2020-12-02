/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:23:57
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 20:49:38
 * @Description: file content
 */

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'api hi'
  }

  // 得到文章列表
  async getArticleList() {
    let sql = 'SELECT article.id as id ,' +
              'article.title as title ,' +
              'article.introduce as introduce ,' +
              'article.addTime as addTime ,' +
              'article.view_count as view_count ,' +
              'type.typeName as typeName ' +
              'FROM article LEFT JOIN type ON article.type_id = type.id'
    const results = await this.app.mysql.query(sql)
    this.ctx.body = { data:results }
  }
}

module.exports = HomeController;