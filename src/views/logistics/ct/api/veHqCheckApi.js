/*
 * @Descripttion: 餐厅检查表 接口
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-03-05
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-03-05
 */

import http from '@/utils/kq/http'

const veHqCheckApi = {
  //添加接口
  add(data){
    return http.post(http.service.hq+'veHqCheck/add',data)
  },
  //删除接口
  delete(ids){
    return http.delete(http.service.hq+'veHqCheck/deleteBatch?ids='+ids)
  },
  //修改接口
  update(data){
    return http.put(http.service.hq+'veHqCheck/edit',data)
  },
  //分页查询接口
  page(pageData){
    return http.post(http.service.hq+'veHqCheck/page',pageData)
  },
  //查询单个数据接口
  get(id){
    return http.get(http.service.hq+'veHqCheck/queryById',{id:id})
  },
  //更新状态
  updateStatus(data){
    return http.post(http.service.hq+'veHqCheck/updateStatus',data)
  },

};
export default veHqCheckApi;
