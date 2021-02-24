/*
 * @Author: Li Jian
 * @Date: 2021-02-23 10:41:34
 * @LastEditTime: 2021-02-23 10:48:29
 * @LastEditors: Li Jian
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
