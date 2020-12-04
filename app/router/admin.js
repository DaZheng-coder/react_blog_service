/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:27:51
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-04 22:33:02
 * @Description: file content
 */

/* 后台路由 */
module.exports = app => {
  const { router, controller } = app
  var adminauth = app.middleware.adminauth()
  router.get('/admin/index', controller.admin.main.index)
  router.post('/admin/checkLogin', controller.admin.main.checkLogin)
  router.get('/admin/getTypeInfo', adminauth, controller.admin.main.getTypeInfo)
  router.post('/admin/addArticle', adminauth, controller.admin.main.addArticle)
  router.post('/admin/updateArticle', adminauth, controller.admin.main.updateArticle)
}