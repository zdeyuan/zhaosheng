/*
 * @Descripttion: 教科研人员表（总表） 接口
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-02-14
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-02-15 14:31:02
 */

import http from '@/utils/kq/http';

const veJkyUserApi = {
  //添加接口
  add(data) {
    return http.post(http.service.jkl + 'veJkyUser/add', data);
  },
  //删除接口
  delete(ids) {
    return http.delete(http.service.jkl + 'veJkyUser/deleteBatch?ids=' + ids);
  },
  //修改接口
  update(data) {
    return http.put(http.service.jkl + 'veJkyUser/edit', data);
  },
  //分页查询接口
  page(pageData) {
    return http.post(http.service.jkl + 'veJkyUser/page', pageData);
  },
  //查询单个数据接口
  get(id) {
    return http.get(http.service.jkl + 'veJkyUser/queryById', { id: id });
  },
  //更新状态
  updateStatus(data) {
    return http.post(http.service.jkl + 'veJkyUser/updateStatus', data);
  },
  //更新状态
  findByIds(ids) {
    return http.get(http.service.jkl + 'veJkyUser/findByIds?ids=' + ids);
  }
};
export default veJkyUserApi;
