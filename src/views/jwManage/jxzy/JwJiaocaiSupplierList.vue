<template>
  <a-card :bordered="false">
    <!-- 查询区域 -->
    <div class="table-page-search-wrapper">
      <a-form layout="inline">
        <a-row :gutter="24">
            <a-form-item label="供应商名称">
              <a-input placeholder="请输入供应商名称" v-model="queryParam.name"></a-input>
            </a-form-item>
            <a-form-item label="状态">
              <j-dict-select-tag v-model="queryParam.status" placeholder="请选择状态" dict-code="enable_state"/>
            </a-form-item>
            <span class="table-page-search-submitButtons">
			  <a-button @click="searchQuery" type="primary" icon="search" style="margin-right: 10px;">搜索</a-button>
			  <a-button @click="searchReset" type="danger" icon="delete" style="margin-right: 10px;">清除</a-button>
            </span>
        </a-row>
		<div class="table-operator">
		  <a-button @click="handleAdd" type="primary" icon="plus" style="margin-right: 10px;">添加</a-button>
		  <a-button @click="batchAble" type="primary" icon="check-circle" style="margin-right: 10px;">启用</a-button>
		  <a-button @click="batchDisable" type="danger" icon="stop" style="margin-right: 10px;">禁用</a-button>	
		  <a-button @click="searchQuery" type="primary" icon="sync" style="margin-right: 10px;">刷新</a-button>	
		  <a-button type="danger" @click="delteIds" style="margin-right: 10px;">批量删除</a-button>
		</div>
      </a-form>
    </div>


    <div>
      <div class="ant-alert ant-alert-info" style="margin-bottom: 16px">
        <i class="anticon anticon-info-circle ant-alert-icon"></i> 已选择
        <a style="font-weight: 600">{{ selectedRowKeys.length }}</a
        >项
        <a style="margin-left: 24px" @click="onClearSelected">清空</a>
      </div>

      <a-table
        ref="table"
        size="middle"
        rowKey="id"
        :columns="columns"
        :dataSource="dataSource"
        :pagination="ipagination"
        :loading="loading"
        :rowSelection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        @change="handleTableChange"
      >
        <span slot="action" slot-scope="text, record">
<!--          <edu-label-button @click="handleEdit(record)" type="3" title="编辑"></edu-label-button>
          <a-divider type="vertical"/>
          <edu-label-button type="2" title="查看" @click="handleDetail(record)"></edu-label-button>
         <a-divider type="vertical"/>
          <edu-delete-button @click="handleDelete(record.id)" type="4" title="删除"></edu-delete-button> -->
          <a @click="handleEdit(record)" >编辑</a>
          <a-divider type="vertical"/>
          <a @click="handleDelete(record.id)" >删除</a>
          <!--          <a-dropdown>
          <!--&lt;!&ndash;              <a class="ant-dropdown-link"> 更多 <a-icon type="down"/> </a>&ndash;&gt;-->
          <!--                <edu-label-button type="2" title="更多" icon="down"></edu-label-button>-->
          <!--            <a-menu slot="overlay">-->
          <!--              <a-menu-item>-->
          <!--&lt;!&ndash;                <a href="javascript:;" @click="handleDetail(record)">详情</a>&ndash;&gt;-->
          <!--                <edu-label-button type="2" title="查看" @click="handleDetail(record)"></edu-label-button>-->
          <!--              </a-menu-item>-->
          <!--              <a-menu-item>-->
          <!--                <edu-delete-button @click="handleDelete(record.id)" type="4" title="删除"></edu-delete-button>-->
          <!--              </a-menu-item>-->
          <!--            </a-menu>-->
          <!--          </a-dropdown>-->
        </span>
      </a-table>
    </div>
    <!-- table区域-end -->
    <!-- 表单区域 -->
    <jw-jiaocai-supplier-modal ref="modalForm" @ok="modalFormOk"></jw-jiaocai-supplier-modal>
  </a-card>
</template>

<script>
  import '@/assets/scss/usercolor.scss';
  import { EduListMixin } from '@/mixins/KwglMixin'
  import { EduUtils } from '@/mixins/EduUtils'
  import { getAction } from '@/api/common/manage'
  import JwJiaocaiSupplierModal from './modules/JwJiaocaiSupplierModal'
  import { formatDate } from '@/utils/util'

  export default {
    name: 'JwJiaocaiSupplierList',
    mixins: [EduListMixin,EduUtils],
    components: {
      JwJiaocaiSupplierModal
    },
    data() {
      return {
        description: '教材供应商表管理页面',
        // 表头
        columns: [
          // {
          //   title: '#',
          //   dataIndex: '',
          //   key: 'rowIndex',
          //   width: 60,
          //   align: 'center',
          //   customRender: function(t, r, index) {
          //     return parseInt(index) + 1
          //   }
          // },
          {
            key: 'rowIndex',
            title: '供应商名称',
            align: 'center',
            dataIndex: 'name'
          },
          {
            title: '联系方式',
            align: 'center',
            dataIndex: 'tel'
          },
          // {
          //   title: '通知内容',
          //   align: 'center',
          //   dataIndex: 'remark'
          // },
          // {
          //   title: '创建时间',
          //   align: 'center',
          //   dataIndex: 'createtime',
          //   customRender: function(t) {
          //     return t ? formatDate(t * 1000, 'yyyy-MM-dd hh:mm:ss') : ''
          //   }
          // },
          // {
          //   title: '终端ID',
          //   align: 'center',
          //   dataIndex: 'terminalid'
          // },
          {
            title: '地址',
            align: 'center',
            dataIndex: 'address'
          },
          {
            title: '状态',
            align: 'center',
            dataIndex: 'status_dictText'
          },
          {
            title: '操作',
            width: 130,
            dataIndex: 'action',
            align: 'center',
            scopedSlots: { customRender: 'action' }
          }
        ],
        url: {
          list: '/jxzy/jwJiaocaiSupplier/list',
          delete: '/jxzy/jwJiaocaiSupplier/delete',
          deleteBatch: '/jxzy/jwJiaocaiSupplier/deleteBatch',
          exportXlsUrl: '/jxzy/jwJiaocaiSupplier/exportXls',
          importExcelUrl: 'jxzy/jwJiaocaiSupplier/importExcel',
          updateStatusBatch: '/jxzy/jwJiaocaiSupplier/updateStatusBatch'
        },
        dictOptions: {},
        superFieldList: [],
        isorter: []
      }
    },
    methods: {
      //时间格式化工具类
      simpleDateFormat(millisecond, format) {
        return formatDate(millisecond, format)
      },

      //批量禁用
      batchDisable: function() {
        if (!this.url.updateStatusBatch) {
          this.$message.error('请设置url.updateStatusBatch属性!')
          return
        }
        if (this.selectedRowKeys.length <= 0) {
          this.$message.warning('请选择一条记录！')
          return
        } else {
          var ids = ''
          for (var a = 0; a < this.selectedRowKeys.length; a++) {
            ids += this.selectedRowKeys[a] + ','
          }
          var that = this
          this.$confirm({
            title: '确认禁用',
            content: '是否禁用选中数据?',
			okText: '确认',
			cancelText:'取消',
            onOk: function() {
              that.loading = true
              getAction(that.url.updateStatusBatch, { ids: ids, status: 0 }).then((res) => {
                if (res.success) {
                  that.$message.success(res.message)
                  that.loadData()
                  that.onClearSelected()
                } else {
                  that.$message.warning(res.message)
                }
              }).finally(() => {
                that.loading = false
              })
            }
          })
        }
      },
      //批量启用
      batchAble: function() {
        if (!this.url.updateStatusBatch) {
          this.$message.error('请设置url.updateStatusBatch属性!')
          return
        }
        if (this.selectedRowKeys.length <= 0) {
          this.$message.warning('请选择一条记录！')
          return
        } else {
          var ids = ''
          for (var a = 0; a < this.selectedRowKeys.length; a++) {
            ids += this.selectedRowKeys[a] + ','
          }
          var that = this
          this.$confirm({
            title: '确认启用',
            content: '是否启用选中数据?',
			okText: '确认',
			cancelText:'取消',
            onOk: function() {
              that.loading = true
              getAction(that.url.updateStatusBatch, { ids: ids, status: 1 }).then((res) => {
                if (res.success) {
                  that.$message.success(res.message)
                  that.loadData()
                  that.onClearSelected()
                } else {
                  that.$message.warning(res.message)
                }
              }).finally(() => {
                that.loading = false
              })
            }
          })
        }
      },
	  
	  delteIds() {
	  	if (this.selectedRowKeys.length == 0) {
	  		this.$message.warning("请先选择信息");
	  		return
	  	}
	  	var then = this
	  	this.$confirm({
	  		title: '是否删除',
	  		content: '是否删除这些数据',
	  		okText: '确认',
	  		cancelText:'取消',
	  		onOk() {
	  			let ids = ''
	  			for (let i = 0; i < then.selectedRowKeys.length; i++) {
	  				if (i == 0) {
	  					ids += then.selectedRowKeys[i]
	  				} else {
	  					ids += ',' + then.selectedRowKeys[i]
	  				}
	  			}
				console.log(then.$http,'then.$http?????????')
	  			 then.$http.delete(then.$http.baseServer + '/jxzy/jwJiaocaiSupplier/deleteBatch?ids=' + ids,{}).then(res => {
	  				then.selectedRowKeys = []
	  				if (res.code == 200) {
	  					then.searchReset()
	  				}
	  			
	  			}).catch(err => {
	  				then.$message.warning("获取年级失败");
	  			})
	  		},
	  		onCancel() {},
	  	});
	  },

    }
  }
</script>
