<!--
 * @since: 2020-12-07 15:45:36
 * @lastTime: 2020-12-07 15:46:09
 * @Description: 月份选择
-->
<template>
  <a-month-picker
    dropdownClassName="j-date-picker"
    :disabled="disabled || readOnly"
    :placeholder="placeholder"
    @change="handleDateChange"
    :value="momVal"
    :showTime="showTime"
    :format="dateFormat"
    :getCalendarContainer="getCalendarContainer"
  />
</template>
<script>
import moment from 'moment'

export default {
  name: 'JMonth',
  props: {
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    value: {
      type: String,
      required: false
    },
    dateFormat: {
      type: String,
      default: 'YYYY-MM',
      required: false
    },
    //此属性可以被废弃了
    triggerChange: {
      type: Boolean,
      required: false,
      default: false
    },
    readOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    showTime: {
      type: Boolean,
      required: false,
      default: false
    },
    getCalendarContainer: {
      type: Function,
      default: node => node.parentNode
    }
  },
  data() {
    let dateStr = this.value
    return {
      decorator: '',
      momVal: !dateStr ? null : moment(dateStr, this.dateFormat)
    }
  },
  watch: {
    value(val) {
      if (!val) {
        this.momVal = null
      } else {
        this.momVal = moment(val, this.dateFormat)
      }
    }
  },
  methods: {
    moment,
    handleDateChange(mom, dateStr) {
      this.$emit('change', dateStr)
    }
  },
  //2.2新增 在组件内定义 指定父组件调用时候的传值属性和事件类型 这个牛逼
  model: {
    prop: 'value',
    event: 'change'
  }
}
</script>
