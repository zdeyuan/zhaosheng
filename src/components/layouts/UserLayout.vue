<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div :class="title == '招生系统演示环境' ? 'zsbj container' : 'bj container'">
      <div style="margin-left:60%; width: 500px;display:flex;flex-direction:column;height:100%;justify-content: center;">
        <div class="top">
        <div class="header">
          <a href="/">
            <!-- <img src="~@/assets/logo.png" class="logo" alt="logo"> -->
            <!-- <span class="title">招生系统演示环境</span> -->
			<span class="title">{{title}}</span>
          </a>
        </div>
        <!-- <div class="desc">
          教育平台
        </div> -->
      </div>
          

     <router-view />
      </div> 
      <div class="footer">
        
      </div>
    </div>
  </div>
</template>

<script>
  // import RouteView from "@/components/layouts/RouteView"
  import { mixinDevice } from '@/utils/mixin.js'

  export default {
    name: "UserLayout",
    // components: { RouteView },
    mixins: [mixinDevice],
    data () {
      return {
		  title:process.env.VUE_APP_SYSTEM_WEB_TABEL_NAME
	  }
    },
    mounted () {
      document.body.classList.add('userLayout')
    },
    beforeDestroy () {
      document.body.classList.remove('userLayout')
    },
  }
</script>

<style lang="less" scoped>
  #userLayout.user-layout-wrapper {
    height: 100%;
    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }
	
    
	.bj{
		background: #f0f2f5 url(~@/assets/background.png) no-repeat;
	}
	.zsbj{
		background: #f0f2f5 url(~@/assets/background-zs.png) no-repeat;
	}
	
    .container {
      width: 100%;
      height: 100%;
      min-height: 100%;
      background-size: 100%;
      padding: 110px 0 144px;
      position: relative;

      a {
        text-decoration: none;
      }

      .top {
        text-align: center;
        margin-bottom:40px;

        .header {
          height: 44px;
          line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            color: #10569F;
            font-size: 33px;
            // color: rgba(0, 0, 0, .85);
            font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            font-weight: 600;
            position: relative;
            top: 2px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }

      .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;

        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
            &:not(:last-child) {
              margin-right: 40px;
            }
          }
        }
        .copyright {
          color: rgba(0, 0, 0, 0.45);
          font-size: 14px;
        }
      }
    }
  }
</style>