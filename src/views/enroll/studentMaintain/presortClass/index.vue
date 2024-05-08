<template>
	<div class="oa-meet-page">
		<div>
			<div :class="judget(1)" @click="content = 1">
				手动分班
			</div>
			<div :class="judget(2)" @click="content = 2">
				自动分班
			</div>
		</div>
		<div>
			<manual-distribute v-if="content == 1"></manual-distribute>
			<auto-assembly v-if="content == 2"></auto-assembly>
		</div>	
	</div>	
</template>

<script>
	import  manualDistribute from './manualAssembly/manualDistribute.vue'
	import  autoAssembly from './manualAssembly/autoAssembly.vue'
	export default {
		name: 'index',
		// 在这里注册后标签才可以使用 
		components:{
			manualDistribute,
			autoAssembly
		},
		data() {
			return {
				content:1
			};
		},
		methods:{
			judget(msg){
				if(msg == this.content){
					return 'content-title'
				}else{
					return 'content-title not-title'
				}
			}
		}
	};
</script>

<style scoped>
	@import '~@assets/less/common.less';
	.oa-meet-page{
		position: relative; /**相对定位 */
		width: 100%;
		height: 100%;
		padding: 30px;
		background: rgb(233, 237, 246);
	}
</style>
