<template>
  <a-row class="j-select-biz-component-box" type="flex" :gutter="8">
    <a-col class="left" :class="{'full': !buttons}" :style="{ width: width+'px' }">
      <slot name="left" >
        <a-select
          mode="multiple"
          :placeholder="placeholder"
          v-model="selectValue"
          :options="selectOptions"
          allowClear
          :disabled="disabled"
          :open="selectOpen"
          :style="{ width: width+'px' }"
          @dropdownVisibleChange="handleDropdownVisibleChange"
          @click.native="visible=(buttons || disabled ?visible:true)"
        />
      </slot>
    </a-col>

    <a-col v-if="buttons" class="right" :style="'left:20px'">
<!--      <a-button type="primary" icon="search"  style="margin-right: 10px;" :disabled="disabled" @click="visible=true">{{selectButtonText}}</a-button>-->
      <a-button type="primary"  icon="search" :disabled="disabled" @click="visible=true" >{{selectButtonText}}</a-button>
    </a-col>

    <j-select-biz-component-modal
      v-model="selectValue"
      :visible.sync="visible"
      :ellipsisLength="ellipsisLength"
      v-bind="modalProps"
      @options="handleOptions"
    />
  </a-row>
</template>

<script>
  import JSelectBizComponentModal from './JSelectJwBizComponentModal'

  export default {
    name: 'JSelectBizComponent',
    components: { JSelectBizComponentModal },
    props: {
      value: {
        type: String,
        default: ''
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
      // 过长裁剪长度，设置为 -1 代表不裁剪
      ellipsisLength: {
        type: Number,
        default: 30
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
		width:{
		 type:String,
		 default:'100%'
		},
    },
    data() {
      return {
        selectValue: [],
        selectOptions: [],
        dataSourceMap: {},
        visible: false,
        selectOpen: false,
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
      },
    },
    watch: {
      value: {
        immediate: true,
        handler(val) {
		  // var msg = val+''
          if (val&&val!=0) {
			this.selectValue = val.split(',')
          } else {
            this.selectValue = []
          }
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
      },
    }
  }
</script>

<style lang="less" scoped>
  .j-select-biz-component-box {

    @width: 82px;

    .left {
      width:150px;
    }

    .right {
      width: @width;
    }

    .full {
      width: 100%;
    }

  }
</style>