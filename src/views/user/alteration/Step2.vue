<template>
  <div>
    <a-form :form="form" style="max-width: 500px; margin: 40px auto 0;" @keyup.enter.native="nextStep">
      <a-form-item
        label="手机"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
      >
        <a-input
          type="text"
          autocomplete="false"
          style="width:310px;margin-left:-10px"
          v-decorator="['phone',{ rules: validatorRules.phone.rule}]"
          placeholder="请输入手机号">
          <a-icon slot="prefix" type="phone" :style="{ color: 'rgba(0,0,0,.25)'}"/>
        </a-input>
      </a-form-item>
      <a-form-item
        label="验证码"
        :labelCol="{span: 5}"
        :wrapperCol="{span: 19}"
        v-if="show">
        <a-row :gutter="16" style="margin-left: 2px">
          <a-col class="gutter-row" :span="12">
            <a-input
              v-decorator="['captcha',validatorRules.captcha]"
              type="text"
              placeholder="手机短信验证码">
            </a-input>
          </a-col>
          <a-col class="gutter-row" :span="8">
            <a-button
              tabindex="-1"
              size="default"
              :disabled="state.smsSendBtn"
              @click.stop.prevent="getCaptcha"
              v-text="!state.smsSendBtn && '获取验证码' || (state.time+' s')"></a-button>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <router-link style="float: left;line-height: 40px;" :to="{ name: 'login' }">使用已有账户登录</router-link>
        <a-button type="primary" @click="nextStep" style="margin-left: 20px">下一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
  import {postAction} from '@/api/common/manage'

  export default {
    name: "Step2",
    props: ['userList'],
    data() {
      return {
        form: this.$form.createForm(this),
        loading: false,
        // accountName: this.userList.username,
        dropList: "0",
        captcha: "",
        show: true,
        state: {
          time: 60,
          smsSendBtn: false,
        },
        formLogin: {
          captcha: "",
          mobile: "",
        },
        validatorRules: {
          captcha: {rule: [{required: true, message: '请输入短信验证码!'}, {validator: this.validateCaptcha}]},
          phone: {rule: [{required: true, message: '请输入手机号码!'}, {validator: this.validatePhone}]},
        },
      }
    },
    computed: {
    },
    methods: {
      nextStep() {
        let that = this
        that.loading = true
        this.form.validateFields((err, values) => {
          console.log(values);
          if (!err) {
            if (that.dropList == "0") {
              if (values.captcha == undefined) {
                this.cmsFailed("请输入短信验证码!");
              } else {
                var params = {}
                params.phone = values.phone;
                params.smscode = values.captcha;
                postAction("/sys/user/phoneVerification", params).then((res) => {
                  if (res.success) {
                    console.log(res);
                    var userList = {
                      username: res.result.username,
                      phone: values.phone,
                      smscode: res.result.smscode
                    };
                    setTimeout(function () {
                      that.$emit('nextStep', userList)
                    }, 0)
                  } else {
                    this.cmsFailed(res.message);
                  }
                })

              }
            }


          }
        })
      },
      getCaptcha(e) {
        e.preventDefault();
        let that = this;
        let phone=that.form.getFieldValue("phone")
        if(!phone){
          this.cmsFailed("手机号不能为空!");
          return;
        }
        this.state.smsSendBtn = true;
        let interval = window.setInterval(() => {
          if (that.state.time-- <= 0) {
            that.state.time = 60;
            that.state.smsSendBtn = false;
            window.clearInterval(interval);
          }
        }, 1000);

        const hide = this.$message.loading('验证码发送中..', 0);
        let smsParams = {
          mobile: phone,
          smsmode: "2"
        };
        postAction("/sys/sms", smsParams).then(res => {
          if (!res.success) {
            setTimeout(hide, 1);
            this.cmsFailed(res.message);
          }
          setTimeout(hide, 500);
        })
      },
      cmsFailed(err) {
        this.$notification['error']({
          message: "验证错误",
          description: err,
          duration: 4,
        });
      },
      handleChangeSelect(value) {
        var that = this;
        console.log(value);
        if (value == 0) {
          that.dropList = "0";
          that.show = true;
        } else {
          that.dropList = "1";
          that.show = false;
        }
      },
      validatePhone(rule,value,callback){
          if(value){
            var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(!myreg.test(value)){
              callback("请输入正确的手机号")
            }else{
              callback();
            }
          }else{
            callback()
          }
      }
    }

  }
</script>

<style lang="less" scoped>
  .stepFormText {
    margin-bottom: 24px;
  }

  .ant-form-item-label,
  .ant-form-item-control {
    line-height: 22px;
  }

  .getCaptcha {
    display: block;
    width: 100%;
    height: 40px;
  }
</style>