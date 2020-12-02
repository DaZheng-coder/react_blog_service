/*
 * @Author: DaZheng
 * @Date: 2020-12-02 15:45:37
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-02 16:31:07
 * @Description: file content
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/default')(app)
};

