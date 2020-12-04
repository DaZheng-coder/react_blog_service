/*
 * @Author: DaZheng
 * @Date: 2020-12-04 16:05:36
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-04 16:08:23
 * @Description: file content
 */
module.exports = options => {
  return async function adminauth(ctx, next) {
    console.log(ctx.session.openId)
    if (ctx.session.openId) {
      await next()
    } else {
      ctx.body = { data: '没有登录' }
    }
  } 
}