<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: Erik Zhang
 * @Date: 2021-03-05 14:28:25
 * @LastEditors: Erik Zhang
 * @LastEditTime: 2021-05-31 23:29:34
-->
<template>
  <edu-tree-select ref="eduTree" @onChange="handleChange" :width="width" :check="false" :nodes="treeNodes"></edu-tree-select>
</template>

<script>
export default {
  model: {
    // prop即 父组件使用 v-model 绑定的属性,这个名称是自定义的
    prop: 'value',
    // event即 子组件会向父组件触发的事件,父组件的 v-model可以监听到这个事件,并将vlaue赋值给v-model绑定的属性
    event: 'input'
  },
  props: {
    width: {
      type: String,
      default: '200px'
    },
    value: {
	  type: Number,
	  default: function() {
		return 0;
	  }
	}
  },
  data() {
    const data = {
      treeNodes: []
    };
    return data;
  },
watch: {
	value: {
	  immediate: true,
	  handler(newVal) {
		// 当外部传入的 value 发生变化时，更新内部的值
		this.$refs.eduTree.setValue(newVal);
	  }
	}
  },
  mounted() {
    this.init();
  },
  methods: {
    getValueData() {
      return this.$refs.eduTree.getValueData();
    },
    getValue() {
      return this.$refs.eduTree.getValue();
    },
    setValue(arr) {
      return this.$refs.eduTree.setValue(arr);
    },
    getList() {
      return this.treeNodes;
    },
    init() {
      const sub = {
        //  conditions: [{ operator: 'eq', column: 'status', value: 1 }]
      };
      this.$http.get(this.$http.service.base + 'veCommon/queryDepartmentList?interfaceUserId=' + this.$constant.commonApi, sub).then(res => {
        res.result.forEach(element => {
          element.name = element.jgmc;
        });
        this.treeNodes = res.result;
      });
    },
	 handleChange() {
	  // 当用户选择节点时，触发 input 事件，并将新的值传递给父组件
	  const selectedValue = this.$refs.eduTree.getValue();
	  this.$emit('input', selectedValue);
	}
  }
};
</script>
<style scoped>
/* 单选间距 */
.a-radio {
  margin-right: 10px;
}
</style>
