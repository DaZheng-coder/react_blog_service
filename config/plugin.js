/*
 * @Author: DaZheng
 * @Date: 2020-12-02 15:45:37
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 23:33:37
 * @Description: file content
 */
'use strict';

/** @type Egg.EggPlugin */
// module.exports = {
//   // had enabled by egg
//   // static: {
//   //   enable: true,
//   // }
// };

exports.mysql = {
  enable: true,
  package: 'egg-mysql'
}

exports.cors = {
  enable: true,
  package: 'egg-cors'
}
