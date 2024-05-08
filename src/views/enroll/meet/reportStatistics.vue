<template>
	<div style="background:#E9EDF6; padding:20px; margin-top:20px;">
		
		<div class="pageContentBox">
			<div class="headTop"><span class="notTop">报到情况统计</span></div>
			<hr class="right-hr">
			<div class="content-head">

				<div>
					<span class="head-span">学校</span>
					<a-cascader class="condition" :options="school" placeholder="请选择学校" />
				
					<span class="head-span">院系</span>
					<a-cascader class="condition" :options="faculty" placeholder="请选择学院系" @change="facultyChange" v-model="facultyId" />
				
					<span class="head-span">班级</span>
					<a-cascader class="condition" :options="clazz" placeholder="请选择班级" v-model="clazzId" />
					
					<span class="head-span">日期</span>
					<!-- <a-cascader class="condition" :options="schoolDate" placeholder="请选择日期"  /> -->
            		<a-date-picker class="input-style-reply date-style-Apply" @change="onChangeDate" v-model="curDate" placeholder="请选择日期"  />
					
					<a-button  class="search-button" @click="search">
						<!-- <a-icon type="plus" /> -->
						<icon-font type="iconsousuo" style="color: #FFFFFF;"/>
						搜索
					</a-button>
					<a-button  class="empty-button clear-button" style = 'margin-left: 20px;' @click="clean" >
						<img src="@/assets/img/clean.png" class="icon-delete"/>
						清空
					</a-button>
				</div>
				
			</div>
			<div class="statisticsBox">
				<statistics :data = 'statisticsData'/>
			</div>	
		</div>	
	</div>
</template>


<script>
import statistics from './components/statistics.vue'
import { Icon } from 'ant-design-vue'
import {axios} from "@/utils/request"
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2390461_f6v2cx4wmzq.js',
})

export default{
	
	
	mounted() {	
			this.getSchool();		
			this.getFaculty();
			this.getStatistics();
		},
	components:{
		statistics
	},	
	data ( ) {
		
		return {
			statisticsData:[],
			
			school:[],
			
			department:[],
			
			schoolClass:[],
			
			// schoolDate:[],
			
			curSchool:'',

			curFaculty: 0,

			curClazz: 0,

			curDate:'',
			//专业部的下拉框数据
      		faculty: [],
      		facultyId: [],
			
    		//班级的下拉框数据
			clazz: [],
			clazzId: [],
		}
		
	},
	methods: {
			getSchool(){
				this.school.push({
					value:0,
					label:'鹰潭职业技术学院',
				})

			},
			getFaculty() {
				this.faculty = [];
				this.facultyId = [];
				axios({
					url: 'enroll/reportMng/getFaculty',
					method: 'post',
					params: {
						
					}
				}).then(res => {

					for (let faculty of res.result) {
						this.faculty.push({
							value: faculty.id,
							label: faculty.yxmc
						})
					}
				}).catch(err => {
					this.$message.warning("获取专业部失败");
				})
			},
			facultyChange(value){
				console.log(value+"value")
				// this.schoolClass = [];
				this.clazz = [];
				this.clazzId = [];
				let facultyId = value[0];
				if (value.length == 0) {
					return;
				}
			
				axios({
					url: 'enroll/reportStatistics/selectClassByFacultyId',
					method: 'post',
					params: {

						"facultyId":facultyId,

					}
				}).then(res => {

					// this.clazz.splice(0, this.clazz.length);
					console.log(this.clazz+"clazz");
					for (let clazz of res.result) {
						this.clazz.push({
							value: clazz.id,
							label: clazz.xzbmc
						})
					}
				}).catch(err => {
					this.$message.warning("获取班级失败");
				})
			},
			// classChange(){

			// },
			search(){			
						
				this.curFaculty = this.facultyId.length == 0 ? 0 : this.facultyId[0];
				
				this.curClazz = this.clazzId.length == 0 ? 0 : this.clazzId[0];

				console.log(this.curFaculty+this.curClazz+"serch")
				this.getStatistics();

			},
			getStatistics(){
				this.statisticsData = [];
				console.log("."+this.curDate+"weixiugai ")
				if (this.curDate == null) {
					this.curDate = '';
					console.log("curdate=null");
				}
				//出生日期格式修改
				if (this.curDate == '' || this.curDate == undefined) {
				this.curDate == ''
				} else {
				let d = new Date(this.curDate)
				let youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
				this.curDate = youWant
				}
				
				console.log("."+this.curDate+"xiugaihou")
				axios({
					url: 'enroll/reportStatistics/getStatistics',
					method: 'post',
					params: {
						"school":this.school[0].value,
						"facultyId": this.curFaculty,
						"classId":this.curClazz,
						"dateTime":this.curDate,
					}
				}).then(res => {
					if (this.curClazz==0) {
						console.log(res.result);
					}
					console.log(res.result+"clas");
					// this.specialty.splice(0, this.specialty.length);
					for (let statistics of res.result) {
						console.log(statistics.theoryNum+"应到");
						let statisticsName = [];
						if (this.curClazz == 0 && this.curFaculty != 0) {
							statisticsName = [statistics.specialtyName];
							console.log("zhuanye")
						}else if (this.curClazz != 0) {
							statisticsName = [statistics.className];
							console.log("banji")
						}else if (this.curFaculty == 0) {
							statisticsName = [statistics.facultyName];
							console.log("yuanxi")
						}
						console.log("名字"+statistics.facultyName+"statisticsName:"+statisticsName)
						if (this.curDate == "") {//是否单日统计判断
							this.statisticsData.push([
							[statistics.theoryNum],[statistics.realityNum],statisticsName,[statistics.theoryNum-statistics.realityNum]
						])
						}else{
							this.statisticsData.push([
							[],[statistics.realityNum],statisticsName,[]
						])
						}
						
					}
				}).catch(err => {
					this.$message.warning("获取统计数据失败");
				})
			},
			clean(){
				this.curDate = '';
				this.school = [];
				this.clazz= [];
				this.clazzId = [];
				this.facultyId = [];
				this.faculty = [];
				this.getSchool();
				this.getFaculty();
				this.getStatistics();
			},
			// 日期选择器
    		onChangeDate(date, dateString) {
    		},

	}
}
</script>

<style>
	.statisticsBox{
		text-align: center;
		margin: 50px 0;
	}
	.date-style-Apply .ant-input {
		width: 300px;
		height: 34px;
	}
	.input-style-reply {
	font-size: 18px;
	color: #666666;
	width: 300px;
	height: 34px;
	background-color: #ffffff;
	border: 0;
	margin-left: 5px;
	}
</style>