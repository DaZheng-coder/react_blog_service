/*
 * @Author: DaZheng
 * @Date: 2020-12-04 10:29:06
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-04 22:32:16
 * @Description: file content
 */
'use strict'
const Controller = require('egg').Controller

class MainController extends Controller {
  async index () {
    this.ctx.body = "hi api"
  }
  async checkLogin () {
    let userName = this.ctx.request.body.userName
    let password = this.ctx.request.body.password
    const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password = '" + password + "'"
    const res = await this.app.mysql.query(sql)
    if (res.length > 0) {
      let openId = new Date().getTime()
      this.ctx.session.openId = { 'openId': openId }
      this.ctx.body = { 'data': '登陆成功', 'openId': openId }
    } else {
      this.ctx.body = {'data': '登录失败'}
    }
  }

  // 获得类型信息
  async getTypeInfo () {
    const resType = await this.app.mysql.select('type')
    this.ctx.body = {data: resType}
  }

  // 添加文章
  async addArticle () {
    let tmpArticle = this.ctx.request.body
    const result = await this.app.mysql.insert('article', tmpArticle)
    const insertSuccess = result.affectedRows === 1
    const insertId = result.insertId
    this.ctx.body = {
      // 是否插入成功
      isSuccess: insertSuccess,
      // 返回id
      insertId: insertId   
    }
  }

  async updateArticle () {
    let tempArticle = this.ctx.request.body
    const result = await this.app.mysql.update('article', tempArticle)
    const updateSuccess = result.affectedRows === 1
    this.ctx.body = {
      isSuccess: updateSuccess
    }
  }
}

module.exports = MainController