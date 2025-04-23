/*
 * @Descripttion: 考勤信息表 接口
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-04-09
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-04-09
 */

import http from '@/utils/kq/http'

const veKaoshiApi = {
  //添加接口
  add(data){
    return http.post(http.service.kwgl+'veJwKaoshi/add',data)
  },
  //删除接口
  delete(ids){
    return http.delete(http.service.kwgl+'veJwKaoshi/deleteBatch?ids='+ids)
  },
  //修改接口
  update(data){
    return http.put(http.service.kwgl+'veJwKaoshi/edit',data)
  },
  //分页查询接口
  page(pageData){
    return http.get(http.service.kwgl+'veJwKaoshi/list',pageData)
  },
  //查询单个数据接口
  get(id){
    return http.get(http.service.kwgl+'veJwKaoshi/queryById',{id:id})
  },
  //更新状态
  updateStatus(data){
    return http.post(http.service.kwgl+'veJwKaoshi/updateStatus',data)
  },

};
export default veKaoshiApi;
