<template>
  <a-row class="j-select-biz-component-box" type="flex" :gutter="8">
    <a-col class="left" :class="{'full': !buttons}">
      <slot name="left">
        <a-select
          mode="multiple"
          :placeholder="placeholder"
          v-model="selectValue"
          :options="selectOptions"
          allowClear
          :disabled="disabled"
          :open="selectOpen"
          style="width: 100%;"
          @dropdownVisibleChange="handleDropdownVisibleChange"
          @click.native="visible=(buttons || disabled ?visible:true)"
        />
      </slot>
    </a-col>
    <a-col v-if="buttons" class="right">
<!--      <a-button type="primary" icon="search"  style="margin-right: 10px;" :disabled="disabled" @click="visible=true">{{selectButtonText}}</a-button>-->
      <a-button type="primary"  icon="search"  style="margin-right: 10px;"  :disabled="disabled" @click="visible=true" >{{selectButtonText}}</a-button>
    </a-col>

    <j-select-biz-component-modal
      :baseKey="baseKey"
      :labelKey="lableKey"
      :canBatch="canBatch"
      v-model="selectValue"
      :visible.sync="visible"
      :queryParamCode="queryParamCode"
      v-bind="modalProps"
      @options="handleOptions"
    />
  </a-row>
</template>

<script>
  import JSelectBizComponentModal from './JSelectBaseBizComponentModal'

  export default {
    name: 'JSelectBizComponent',
    components: { JSelectBizComponentModal },
    props: {
      baseKey: {
        type: String,
        default: null
      },
      value: {
        type: String,
        default: ''
      },
      lableKey:{
        type: String,
        default:null
      },
      queryParamCode: {
        type: String,
        default: null
      },
      /** 是否返回 id，默认 false，返回 code */
      returnId: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      // 是否支持多选，默认 true
      multiple: {
        type: Boolean,
        default: true
      },
      // 是否显示按钮，默认 true
      buttons: {
        type: Boolean,
        default: true
      },
      // 显示的 Key
      displayKey: {
        type: String,
        default: null
      },
      // 返回的 key
      returnKeys: {
        type: Array,
        default: () => ['id', 'id']
      },
      // 选择按钮文字
      selectButtonText: {
        type: String,
        default: '选择'
      },
      canBatch:{
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        selectValue: [],
        selectOptions: [],
        dataSourceMap: {},
        visible: false,
        selectOpen: false
      }
    },
    computed: {
      valueKey() {
        return this.returnId ? this.returnKeys[0] : this.returnKeys[1]
      },
      modalProps() {
        return Object.assign({
          valueKey: this.valueKey,

          multiple: this.multiple,
          returnKeys: this.returnKeys,
          displayKey: this.displayKey || this.valueKey
        }, this.$attrs)
      }
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
          if (val) {
			 
			  if(val.indexOf(',')!=-1){
				  this.selectValue = val.split(',')
			  }else{
				  this.selectValue = [val]
			  }
            
          } else {
            this.selectValue = []
          }
		   console.log("this.selectValue",this.selectValue)
        }
      },
      selectValue: {
        deep: true,
        handler(val) {
          let rows = val.map(key => this.dataSourceMap[key])
          let data = val.join(',')
          if (data !== this.value) {
            this.$emit('select', rows)
            this.$emit('input', data)
            this.$emit('change', data)
          }
        }
      }
    },
    methods: {

      handleOptions(options, dataSourceMap) {
        this.selectOptions = options
        this.dataSourceMap = dataSourceMap
      },
      handleDropdownVisibleChange() {
        // 解决antdv自己的bug —— open 设置为 false 了，点击后还是添加了 open 样式，导致点击事件失效
        this.selectOpen = true
        this.$nextTick(() => {
          this.selectOpen = false
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .j-select-biz-component-box {
	
    @width: 82px;

    .left {
      width: 150px;
    }

    .right {
      width: @width;
    }

    .full {
      width: 100%;
    }

    /deep/ .ant-select-search__field {
      display: none !important;
    }
  }
  
</style>
<style >
	.ant-form-inline{
		  .ant-form-item{
		  	  vertical-align: middle;
		  }
	} 
</style>