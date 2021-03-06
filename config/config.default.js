/*
 * @Author: DaZheng
 * @Date: 2020-12-02 15:45:37
 * @LastEditors: g05047
 * @LastEditTime: 2020-12-07 19:11:09
 * @Description: file content
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606895131688_6893';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'root',
      // password
      password: '888888',
      // database
      database: 'react_blog',    
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };

  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };

  config.cors = {
    origin: 'http://localhost:3000',
    credentials: true, //允许cook可以跨域
    allowMethods: 'GET, HEAD, PUT, POST, DELETE, PATCH, OPTIONS'
  };

  return {
    ...config,
    ...userConfig,
  };
};
