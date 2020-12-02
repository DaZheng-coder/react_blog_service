/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:27:27
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 21:55:28
 * @Description: file content
 */

/* 前台路由 */

module.exports = app => {
  const { router, controller } = app
  router.get('/default/index', controller.default.home.index)
  router.get('/default/getArticleList', controller.default.home.getArticleList)
  router.get('/default/getArticleById', controller.default.home.getArticleById)
}