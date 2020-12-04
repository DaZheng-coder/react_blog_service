/*
 * @Author: DaZheng
 * @Date: 2020-12-02 16:27:51
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-04 10:33:19
 * @Description: file content
 */

/* 后台路由 */
module.exports = app => {
  const { router, controller } = app
  router.get('/admin/index', controller.admin.main.index)
}