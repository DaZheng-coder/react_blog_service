/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:27:27
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-03 12:47:32
 * @Description: file content
 */

/* 前台路由 */

module.exports = app => {
  const { router, controller } = app
  router.get('/default/index', controller.default.home.index)
  router.get('/default/getArticleList', controller.default.home.getArticleList)
  router.get('/default/getArticleById/:id', controller.default.home.getArticleById)
  router.get('/default/getListById/:id', controller.default.home.getListById)
  router.get('/default/getTypeInfo', controller.default.home.getTypeInfo)
}