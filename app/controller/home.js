/*
 * @Author: DaZheng
 * @Date: 2020-12-02 15:45:37
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 16:15:05
 * @Description: file content
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async list() {
    const { ctx } = this;
    ctx.body = '<h1>dazheng blog list</h1>'
  }
}

module.exports = HomeController;
