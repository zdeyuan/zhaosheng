import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import { constantRouterMap } from "@/config/router.config"
import {
	UserLayout,
	Dashboard,
	Default,
	// BlankLayout
} from '@/components/layouts'
Vue.use(VueRouter)

export const asyncRouterMap = [

	{ // 首页默认菜单
		path: '/baseData',
		component: Default,
		meta: {
			title: '基础信息管理',
			breadcrumbs: ['公共系统', '基础信息管理'],
			roles: ['system','ceshi']
		},
		redirect: '/baseData/index',
		children: [{
			//用户管理
			path: '/baseData/index',
			meta: {
				title: '学校基础信息',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','学校基础信息'],
			},
			name: 'schoolInfo',
			component: () => import('@/views/common/basicsData/schoolInfo/index')
		},{
			path: '/baseData/schoollMsg/index',
			meta: {
				title: '校区信息',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','校区信息'],
			},
			name: 'schoollMsg',
			component: () => import('@/views/common/basicsData/schoollMsg/index')
		},{
			path: '/baseData/department/index',
			meta: {
				title: '部门管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','部门管理'],
			},
			name: 'department',
			component: () => import('@/views/common/basicsData/departmentManagement/index')
		},{
			path: '/baseData/schoolSystem/index',
			meta: {
				title: '学制管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','学制管理'],
			},
			name: 'schoolSystem',
			component: () => import('@/views/common/basicsData/schoolSystem/index')
		},
		{
			path: '/baseData/semester/index',
			meta: {
				title: '学期管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','学期管理'],
			},
			name: 'semester',
			component: () => import('@/views/common/basicsData/semester/index')
		},{
			path: '/baseData/schoolFaculties/index',
			meta: {
				title: '院系管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','院系管理'],
			},
			name: 'schoolFaculties',
			component: () => import('@/views/common/basicsData/schoolFaculties/index')
		},{
			path: '/baseData/schoolClass/index',
			meta: {
				title: '年级管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','年级管理'],
			},
			name: 'schoolClass',
			component: () => import('@/views/common/basicsData/schoolClass/index')
		}
		,{
			path: '/baseData/schoolSpecialized/index',
			meta: {
				title: '专业管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','专业管理'],
			},
			name: 'schoolSpecialized',
			component: () => import('@/views/common/basicsData/schoolSpecialized/index')
		},{
			path: '/baseData/zyzInfo/index',
			meta: {
				title: '专业组管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','专业组管理'],
			},
			name: 'zyzInfo',
			component: () => import('@/views/common/basicsData/zyz/index')
		},{
			path: '/baseData/classManage/index',
			meta: {
				title: '班级管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','班级管理'],
			},
			name: 'classManage',
			component: () => import('@/views/common/basicsData/classManage/index')
		},{
			path: '/baseData/teacherinfo/index',
			meta: {
				title: '教师管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','教师管理'],
			},
			name: 'teacherinfo',
			component: () => import('@/views/common/basicsData/teacherinfo/index')
		},{
			path: '/baseData/stuInfo/index',
			meta: {
				title: '学生管理',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理','学生管理'],
			},
			name: 'stuInfo',
			component: () => import('@/views/common/basicsData/stuInfo/index')
		},
		{
			path: '/baseData/holidays/index',
			meta: {
				title: '',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理',''],
			},
			name: 'holidays',
			component: () => import('@/views/common/basicsData/holidays/index')
		},
		{
			path: '/baseData/holidays/index',
			meta: {
				title: '',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理',''],
			},
			name: 'holidays',
			component: () => import('@/views/common/basicsData/holidays/index')
		},
		{
			path: '/baseData/academicCalendar/index',
			meta: {
				title: '',
				roles: ['system','ceshi'],
				breadcrumbs: ['基础信息管理',''],
			},
			name: 'academicCalendar',
			component: () => import('@/views/common/basicsData/academicCalendar/index')
		},
		],
	}, 
	
	{
		path: '/basemsg',
		redirect: '/basemsg/templateMng',
		component: Default,
		meta: {
			title: '招生基础设置',
			breadcrumbs: ['招生管理', '招生基础设置'],
			roles: ['system','ceshi']
		},
		children: [{
				path: '/basemsg/templateMng',
				meta: {
					title: '通知书模版',
					roles: ['system','ceshi'],
					breadcrumbs: ['招生基础设置', '通知书模版']
				},
				component: () => import('@/views/enroll/basemsg/templateMng')
			},
			{
				path: '/basemsg/curYearSet',
				meta: {
					title: '招生年份设置',
					roles: ['system','ceshi'],
					breadcrumbs: ['招生基础设置', '招生年份设置']
				},
				component: () => import('@/views/enroll/basemsg/curYearSet')
			},
			{
				path: '/basemsg/curSeasonSet',
				meta: {
					title: '招生季设置',
					roles: ['system','ceshi'],
					breadcrumbs: ['招生基础设置', '招生季设置']
				},
				component: () => import('@/views/enroll/basemsg/curSeasonSet')
			},
			{
				path: '/basemsg/numRuleSet',
				meta: {
					title: '学号生成设置',
					roles: ['system','ceshi'],
					breadcrumbs: ['招生基础设置', '学号生成设置']
				},
				component: () => import('@/views/enroll/basemsg/numRuleSet')
			},
		]
	},

	{
		path: '/enrollplan',
		redirect: '/enrollplan/planMng',
		component: Default,
		meta: {
			title: '招生计划',
			breadcrumbs: ['招生管理', '招生计划'],
			roles: ['system','ceshi']
		},
		children: [{
				path: '/enrollplan/planMng',
				meta: {
					title: '招生计划管理',
					roles: ['system','ceshi'],
					breadcrumbs: ['招生计划', '招生计划管理']
				},
				component: () => import('@/views/enroll/enrollplan/planMng')
			},
			{
				path: '/enrollplan/planQuery',
				meta: {
					title: '招生计划查询',
					roles: ['system','ceshi'],
					breadcrumbs: ['招生计划', '招生计划查询']
				},
				component: () => import('@/views/enroll/enrollplan/planQuery')
			},
		]
	},


	{
		path: '/admission',
		redirect: '/admission/replaceApply',
		component: Default,
		meta: {
			title: '录取管理',
			breadcrumbs: ['招生管理', '录取管理'],
			roles: ['system','ceshi']
		},
		children: [{
				path: '/admission/replaceApply',
				meta: {
					title: '代报名',
					roles: ['system','ceshi'],
					breadcrumbs: ['录取管理', '代报名']
				},
				component: () => import('@/views/enroll/admission/replaceApply')
			},
			{
				path: '/admission/applyCheck',
				meta: {
					title: '网上报名审核',
					roles: ['system','ceshi'],
					breadcrumbs: ['录取管理', '网上报名审核']
				},
				component: () => import('@/views/enroll/admission/applyCheck')
			},
			// {
			// 	path: '/admission/singleExpandCheck',
			// 	meta: {
			// 		title: '单扩报名审核',
			// 		roles: ['system'],
			// 		breadcrumbs: ['录取管理', '单扩报名审核']
			// 	},
			// 	component: () => import('@/views/enroll/admission/singleExpandCheck')
			// },
			{
				path: '/admission/applyMsgMng',
				meta: {
					title: '报名信息管理',
					roles: ['system','ceshi'],
					breadcrumbs: ['录取管理', '报名信息管理']
				},
				component: () => import('@/views/enroll/admission/applyMsgMng')
			},
			{
				path: '/admission/applyMsgQuery',
				meta: {
					title: '报名信息查询',
					roles: ['system','ceshi'],
					breadcrumbs: ['录取管理', '报名信息查询']
				},
				component: () => import('@/views/enroll/admission/applyMsgQuery')
			},
			{
				path: '/admission/admissionPrint',
				meta: {
					title: '录取通知书打印',
					roles: ['system','ceshi'],
					breadcrumbs: ['录取管理', '录取通知书打印']
				},
				component: () => import('@/views/enroll/admission/admissionPrint')
			},
			// {
			// 	path: '/admission/admissionList',
			// 	meta: {
			// 		title: '录取名单',
			// 		roles: ['system'],
			// 		breadcrumbs: ['录取管理', '录取名单']
			// 	},
			// 	component: () => import('@/views/enroll/admission/admissionList')
			// },
			// {
			// 	path: '/admission/showResults',
			// 	meta: {
			// 		title: '成绩公示',
			// 		roles: ['system'],
			// 		breadcrumbs: ['录取管理', '成绩公示']
			// 	},
			// 	component: () => import('@/views/enroll/admission/showResults')
			// },
			// {
			// 	path: '/admission/paymentReview',
			// 	meta: {
			// 		title: '缴费审核',
			// 		roles: ['system'],
			// 		breadcrumbs: ['录取管理', '缴费审核']
			// 	},
			// 	component: () => import('@/views/enroll/admission/paymentReview')
			// },
			// {
			// 	path: '/admission/loanReview',
			// 	meta: {
			// 		title: '贷款审核',
			// 		roles: ['system'],
			// 		breadcrumbs: ['录取管理', '贷款审核']
			// 	},
			// 	component: () => import('@/views/enroll/admission/loanReview')
			// },
		]
	},


	{
		path: '/meet',
		redirect: '/meet/reportMng',
		component: Default,
		meta: {
			title: '迎新管理',
			breadcrumbs: ['招生管理', '迎新管理'],
			roles: ['system','ceshi']
		},
		children: [{
				path: '/meet/reportMng',
				meta: {
					title: '新生报到管理',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '新生报到管理']
				},
				component: () => import('@/views/enroll/meet/reportMng')
			},
			{
				path: '/meet/reportedMng',
				meta: {
					title: '报到新生管理',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '报到新生管理']
				},
				component: () => import('@/views/enroll/meet/reportedMng')
			},
			{
				path: '/meet/divideClassMng',
				meta: {
					title: '学生分班管理',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '学生分班管理']
				},
				component: () => import('@/views/enroll/meet/divideClassMng')
			},
			{
				path: '/meet/stuInfoQuery',
				meta: {
					title: '新生信息查询',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '新生信息查询']
				},
				component: () => import('@/views/enroll/meet/stuInfoQuery')
			},
			{
				path: '/meet/printReport',
				meta: {
					title: '打印报到卡',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '打印报到卡']
				},
				component: () => import('@/views/enroll/meet/printReport')
			},
			{
				path: '/meet/createNum',
				meta: {
					title: '编制学号',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '编制学号']
				},
				component: () => import('@/views/enroll/meet/createNum')
			},
			// {
			// 	path: '/meet/reportMessage',
			// 	meta: {
			// 		title: '新生报道信息',
			// 		roles: ['system'],
			// 		breadcrumbs: ['迎新管理', '新生报道信息']
			// 	},
			// 	component: () => import('@/views/enroll/meet/reportMessage')
			// },
			{
				path: '/meet/reportStatistics',
				meta: {
					title: '报到情况统计',
					roles: ['system','ceshi'],
					breadcrumbs: ['迎新管理', '报到情况统计']
				},
				component: () => import('@/views/enroll/meet/reportStatistics')
			},
		]
	},

	{ // 首页默认菜单
		path: '/userRole',
		component: Default,
		meta: {
			title: '系统管理',
			breadcrumbs: ['系统管理', '用户角色管理'],
			roles: ['system']
		},
		redirect: '/userRole/operationLog/index',
		children: [{
				//用户管理
				path: '/userRole/operationLog/index',
				meta: {
					title: '用户管理',
					roles: ['system'],
					breadcrumbs: ['用户角色管理', '用户管理'],
				},
				name: 'operationLog',
				component: () => import('@/views/common/operationLog/index')
			},
			{
				//角色管理
				path: '/userRole/menuConfiguration/index',
				meta: {
					title: '角色管理',
					roles: ['system'],
					breadcrumbs: ['用户角色管理', '角色管理'],
				},
				name: 'menuConfiguration',
				component: () => import('@/views/common/menuConfiguration/index')
			},
			// {
			// 	path: '/common/permissionManage/index',
			// 	meta: {
			// 		title: '菜单管理',
			// 		roles: ['system'],
			// 		breadcrumbs: ['系统管理', '菜单管理'],
			// 	},
			// 	name: 'permissionManage',
			// 	component: () => import('@/views/common/permissionManage/index')
			// },
		]
	},
	{ // 首页默认菜单
		path: '/dictionary',
		component: Default,
		meta: {
			title: '系统管理',
			breadcrumbs: ['系统管理', '数字字典管理'],
			roles: ['system']
		},
		redirect: '/dictionary/operationLog/index',
		children: [
			{
				//字典管理
				path: '/dictionary/dictionaryManagement/index',
				meta: {
					title: '字典管理',
					roles: ['system'],
					breadcrumbs: ['数字字典管理', '字典管理'],
				},
				name: 'dictionaryManagement',
				component: () => import('@/views/common/dictionaryManagement/DictList')
			},
		]
	},
	
	{ // 首页默认菜单
		path: '/notificationAnnouncement',
		component: Default,
		meta: {
			title: '系统管理',
			breadcrumbs: ['系统管理', '通知公告'],
			roles: ['system','student','teacher','bzr']
		},
		redirect: '/notificationAnnouncement/operationLog/index',
		children: [
			{
				//通知管理
				path: '/notificationAnnouncement/notice/index',
				meta: {
					title: '通知管理',
					roles: ['system','student','teacher','bzr','ceshi'],
					breadcrumbs: ['系统管理', '通知消息'],
				},
				name: 'notice',
				component: () => import('@/views/common/notice/index')
			},
			{
				//通知管理
				path: '/notificationAnnouncement/notice/content',
				meta: {
					title: '',
					roles: ['system','student','teacher','bzr'],
					breadcrumbs: ['系统管理', ''],
				},
				name: 'notice',
				component: () => import('@/views/common/notice/content')
			},
		]
	},
	
	{ // 首页默认菜单
		path: '/processManagement',
		component: Default,
		meta: {
			title: '系统管理',
			breadcrumbs: ['系统管理', '流程管理'],
			roles: ['system','bzr']
		},
		redirect: '/processManagement/operationLog/index',
		children: [
			// {
			// 	//流程表单管理
			// 	path: '/processManagement/processList/index',
			// 	meta: {
			// 		title: '流程申请',
			// 		roles: ['system'],
			// 		breadcrumbs: ['系统管理', '流程申请'],
			// 	},
			// 	name: 'processList',
			// 	component: () => import('@/views/common/processList/index')
			// },
			{
				//流程表单管理
				path: '/processManagement/processManagement/index',
				meta: {
					title: '流程管理',
					roles: ['system','bzr'],
					breadcrumbs: ['系统管理', '流程管理'],
				},
				name: 'processManagement',
				component: () => import('@/views/common/processManagement/index')
			},
			{
				//流程审批管理
				path: '/processManagement/processApprovals/index',
				meta: {
					title: '流程审批',
					roles: ['system','bzr'],
					breadcrumbs: ['系统管理', '流程审批'],
				},
				name: 'processApprovals',
				component: () => import('@/views/common/processApprovals/index')
			},
		]
	},
	
	// {
	// 	path: '/userInfo',
	// 	redirect: '/userInfo/info',
	// 	component: Default,
	// 	meta: {
	// 		title: '基本信息',
	// 		breadcrumbs: ['个人中心', '学籍信息'],
	// 		roles: ['system','student']
	// 	},
	// 	children: [{
	// 			path: '/userInfo/info',
	// 			meta: {
	// 				breadcrumbs: ['基本信息', '学籍信息'],
	// 				title: '学籍信息',
	// 				roles: ['system','student','teacher'],
	// 			},
	// 			component: () => import('@/views/user/userInfo/index')
	// 		},
	// 	]
	// },
]


const createRouter = () => new VueRouter({
	mode: 'hash',
	// mode: 'history', // require service support
	scrollBehavior: () => ({
		y: 0
	}),
	base: process.env.BASE_URL,
	routes: constantRouterMap
})

const router = createRouter()
router.beforeEach(async (to, from, next) => {
  // 触发获取菜单的 action
  if(localStorage.getItem('menus')){
  	  let menus=JSON.parse(localStorage.getItem('menus'));
  	  menus.forEach((e) => {
  	  	if (e.children && e.children.length > 0) {
  	  		e.children.forEach((ite) => {
  	  			if (ite.children) {
  	  				ite.children.forEach((ii) => {
  	  					if (ii.path === to.path) {
  	  					  store.commit('sidebar/SET_SIDEOBJ', ite);
  						  store.commit('sidebar/SET_NAVSELECTEDKEY', [ite.name]);
  						  store.commit('sidebar/SET_NAVITEMS', e.children);
  						  store.commit('sidebar/SET_SIDESELECTEDKEY', [ii.name]);
  						  store.commit('sidebar/SET_MENUSELECTEDKEY', [e.name]);
  	  					}
  	  				});
  	  			}
  	  		});
  	  	}else{
			store.commit('sidebar/SET_SIDEOBJ', {});
			store.commit('sidebar/SET_NAVSELECTEDKEY', []);
			store.commit('sidebar/SET_NAVITEMS', []);
			store.commit('sidebar/SET_SIDESELECTEDKEY', []);
			store.commit('sidebar/SET_MENUSELECTEDKEY', [e.name]);
		}
  	  });
  }
  next();
});
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
	const newRouter = createRouter()
	router.matcher = newRouter.matcher // reset router
}

export default router