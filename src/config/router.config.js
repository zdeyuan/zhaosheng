import {
	UserLayout,
	TabLayout,
	RouteView,
	BlankLayout,
	PageView
} from '@/components/layouts'

/**
 * 走菜单，走权限控制
 * @type {[null,null]}
 */
export const asyncRouterMap = [

	{
		path: '/',
		name: 'dashboard',
		component: TabLayout,
		meta: {
			title: '首页'
		},
		redirect: '/dashboard/analysis',
		children: [

			// // dashboard
			// {
			//   path: '/dashboard',
			//   name: 'dashboard',
			//   redirect: '/dashboard/workplace',
			//   component: RouteView,
			//   meta: { title: '仪表盘', icon: 'dashboard', permission: [ 'dashboard' ] },
			//   children: [
			//     {
			//       path: '/dashboard/analysis',
			//       name: 'Analysis',
			//       component: () => import('@/views/dashboard/Analysis'),
			//       meta: { title: '分析页', permission: [ 'dashboard' ] }
			//     },
			//     {
			//       path: '/dashboard/monitor',
			//       name: 'Monitor',
			//       hidden: true,
			//       component: () => import('@/views/dashboard/Monitor'),
			//       meta: { title: '监控页', permission: [ 'dashboard' ] }
			//     },
			//     {
			//       path: '/dashboard/workplace',
			//       name: 'Workplace',
			//       component: () => import('@/views/dashboard/Workplace'),
			//       meta: { title: '工作台', permission: [ 'dashboard' ] }
			//     }
			//   ]
			// },
			//
			// // forms
			// {
			//   path: '/form',
			//   redirect: '/form/basic-form',
			//   component: PageView,
			//   meta: { title: '表单页', icon: 'form', permission: [ 'form' ] },
			//   children: [
			//     {
			//       path: '/form/base-form',
			//       name: 'BaseForm',
			//       component: () => import('@/views/form/BasicForm'),
			//       meta: { title: '基础表单', permission: [ 'form' ] }
			//     },
			//     {
			//       path: '/form/step-form',
			//       name: 'StepForm',
			//       component: () => import('@/views/form/stepForm/StepForm'),
			//       meta: { title: '分步表单', permission: [ 'form' ] }
			//     },
			//     {
			//       path: '/form/advanced-form',
			//       name: 'AdvanceForm',
			//       component: () => import('@/views/form/advancedForm/AdvancedForm'),
			//       meta: { title: '高级表单', permission: [ 'form' ] }
			//     }
			//   ]
			// },
			//
			// // list
			// {
			//   path: '/list',
			//   name: 'list',
			//   component: PageView,
			//   redirect: '/list/query-list',
			//   meta: { title: '列表页', icon: 'table', permission: [ 'table' ] },
			//   children: [
			//     {
			//       path: '/list/query-list',
			//       name: 'QueryList',
			//       component: () => import('@/views/list/TableList'),
			//       meta: { title: '查询表格', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/edit-table',
			//       name: 'EditList',
			//       component: () => import('@/views/list/TableInnerEditList'),
			//       meta: { title: '内联编辑表格', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/user-list',
			//       name: 'UserList',
			//       component: () => import('@/views/list/UserList'),
			//       meta: { title: '用户列表', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/role-list',
			//       name: 'RoleList',
			//       component: () => import('@/views/list/RoleList'),
			//       meta: { title: '角色列表', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/permission-list',
			//       name: 'PermissionList',
			//       component: () => import('@/views/list/PermissionList'),
			//       meta: { title: '权限列表', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/basic-list',
			//       name: 'BasicList',
			//       component: () => import('@/views/list/StandardList'),
			//       meta: { title: '标准列表', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/card',
			//       name: 'CardList',
			//       component: () => import('@/views/list/CardList'),
			//       meta: { title: '卡片列表', permission: [ 'table' ] }
			//     },
			//     {
			//       path: '/list/search',
			//       name: 'SearchList',
			//       component: () => import('@/views/list/search/SearchLayout'),
			//       redirect: '/list/search/article',
			//       meta: { title: '搜索列表', permission: [ 'table' ] },
			//       children: [
			//         {
			//           path: '/list/search/article',
			//           name: 'SearchArticles',
			//           component: () => import('../views/list/TableList'),
			//           meta: { title: '搜索列表（文章）', permission: [ 'table' ] }
			//         },
			//         {
			//           path: '/list/search/project',
			//           name: 'SearchProjects',
			//           component: () => import('../views/list/TableList'),
			//           meta: { title: '搜索列表（项目）', permission: [ 'table' ] }
			//         },
			//         {
			//           path: '/list/search/application',
			//           name: 'SearchApplications',
			//           component: () => import('../views/list/TableList'),
			//           meta: { title: '搜索列表（应用）', permission: [ 'table' ] }
			//         },
			//       ]
			//     },
			//   ]
			// },
			//
			// // profile
			// {
			//   path: '/profile',
			//   name: 'profile',
			//   component: RouteView,
			//   redirect: '/profile/basic',
			//   meta: { title: '详情页', icon: 'profile', permission: [ 'profile' ] },
			//   children: [
			//     {
			//       path: '/profile/basic',
			//       name: 'ProfileBasic',
			//       component: () => import('@/views/profile/basic/Index'),
			//       meta: { title: '基础详情页', permission: [ 'profile' ] }
			//     },
			//     {
			//       path: '/profile/advanced',
			//       name: 'ProfileAdvanced',
			//       component: () => import('@/views/profile/advanced/Advanced'),
			//       meta: { title: '高级详情页', permission: [ 'profile' ] }
			//     }
			//   ]
			// },
			//
			// // result
			// {
			//   path: '/result',
			//   name: 'result',
			//   component: PageView,
			//   redirect: '/result/success',
			//   meta: { title: '结果页', icon: 'check-circle-o', permission: [ 'result' ] },
			//   children: [
			//     {
			//       path: '/result/success',
			//       name: 'ResultSuccess',
			//       component: () => import(/* webpackChunkName: "result" */ '@/views/result/Success'),
			//       meta: { title: '成功', hiddenHeaderContent: true, permission: [ 'result' ] }
			//     },
			//     {
			//       path: '/result/fail',
			//       name: 'ResultFail',
			//       component: () => import(/* webpackChunkName: "result" */ '@/views/result/Error'),
			//       meta: { title: '失败', hiddenHeaderContent: true, permission: [ 'result' ] }
			//     }
			//   ]
			// },
			//
			// // Exception
			// {
			//   path: '/exception',
			//   name: 'exception',
			//   component: RouteView,
			//   redirect: '/exception/403',
			//   meta: { title: '异常页', icon: 'warning', permission: [ 'exception' ] },
			//   children: [
			//     {
			//       path: '/exception/403',
			//       name: 'Exception403',
			//       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/403'),
			//       meta: { title: '403', permission: [ 'exception' ] }
			//     },
			//     {
			//       path: '/exception/404',
			//       name: 'Exception404',
			//       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404'),
			//       meta: { title: '404', permission: [ 'exception' ] }
			//     },
			//     {
			//       path: '/exception/500',
			//       name: 'Exception500',
			//       component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/500'),
			//       meta: { title: '500', permission: [ 'exception' ] }
			//     }
			//   ]
			// },
			//
			// // account
			// {
			//   path: '/account',
			//   component: RouteView,
			//   name: 'account',
			//   meta: { title: '个人页', icon: 'user', keepAlive: true, permission: [ 'user' ] },
			//   children: [
			//     {
			//       path: '/account/center',
			//       name: 'center',
			//       component: () => import('@/views/account/center/Index'),
			//       meta: { title: '个人中心', keepAlive: true, permission: [ 'user' ] }
			//     },
			//     {
			//       path: '/account/settings',
			//       name: 'settings',
			//       component: () => import('@/views/account/settings/Index'),
			//       meta: { title: '个人设置', hideHeader: true, keepAlive: true, permission: [ 'user' ]  },
			//       redirect: '/account/settings/base',
			//       alwaysShow: true,
			//       children: [
			//         {
			//           path: '/account/settings/base',
			//           name: 'BaseSettings',
			//           component: () => import('@/views/account/settings/BaseSetting'),
			//           meta: { title: '基本设置', hidden: true, keepAlive: true, permission: [ 'user' ]  }
			//         },
			//         {
			//           path: '/account/settings/security',
			//           name: 'SecuritySettings',
			//           component: () => import('@/views/account/settings/Security'),
			//           meta: { title: '安全设置', hidden: true, keepAlive: true, permission: [ 'user' ]  }
			//         },
			//         {
			//           path: '/account/settings/custom',
			//           name: 'CustomSettings',
			//           component: () => import('@/views/account/settings/Custom'),
			//           meta: { title: '个性化设置', hidden: true, keepAlive: true, permission: [ 'user' ]  }
			//         },
			//         {
			//           path: '/account/settings/binding',
			//           name: 'BindingSettings',
			//           component: () => import('@/views/account/settings/Binding'),
			//           meta: { title: '账户绑定', hidden: true, keepAlive: true, permission: [ 'user' ]  }
			//         },
			//         {
			//           path: '/account/settings/notification',
			//           name: 'NotificationSettings',
			//           component: () => import('@/views/account/settings/Notification'),
			//           meta: { title: '新消息通知', hidden: true, keepAlive: true, permission: [ 'user' ]  }
			//         },
			//       ]
			//     },
			//   ]
			// }
		]
	},
	{
		path: '*',
		redirect: '/404',
		hidden: true
	}
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [{
		path: '/user',
		component: UserLayout,
		redirect: '/user/login',
		hidden: true,
		children: [{
				path: 'login',
				name: 'login',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/Login')
			},
			{
				path: 'register',
				name: 'register',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/register/Register')
			},
			{
				path: 'register-result',
				name: 'registerResult',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/register/RegisterResult')
			},
			{
				path: 'alteration',
				name: 'alteration',
				component: () => import( /* webpackChunkName: "user" */ '@/views/user/alteration/Alteration')
			},
		]
	},

	// {
	//   path: '/',
	//   name: 'index',
	//   component: TabLayout,
	//   meta: {title: '首页'},
	//   redirect: '/dashboard/workplace',
	//   children: [
	//     {
	//       path: '/online',
	//       name: 'online',
	//       redirect: '/online',
	//       component: RouteView,
	//       meta: {title: '在线开发', icon: 'dashboard', permission: ['dashboard']},
	//       children: [
	//         {
	//           path: '/online/auto/:code',
	//           name: 'report',
	//           component: () => import('@/views/modules/online/cgreport/OnlCgreportAutoList')
	//         },
	//       ]
	//     },
	//   ]
	// },

	{
		path: '/test',
		component: BlankLayout,
		redirect: '/test/home',
		children: [{
			path: 'home',
			name: 'TestHome',
			component: () => import('@/views/Home')
		}]
	},
	{
		// 首页默认菜单
		path: '/enroll',
		component: () => import('@/views/enroll/EnrollMain'),
		redirect: '/enroll/index',
		children: [
			// 首页
			{
				//通知书打印
				path: '/enroll/index',
				name: 'index',
				component: () => import('@/views/enroll/index/index')
			},
			//页面路由配置
			{
				//通知书打印
				path: '/enroll/admissionPrint',
				name: 'admissionPrint',
				component: () => import('@/views/enroll/admission/admissionPrint')
			},
			{
				//网上报名审核
				path: '/enroll/applyCheck',
				name: 'applyCheck',
				component: () => import('@/views/enroll/admission/applyCheck')
			},
			{
				//单招，扩招报名审核
				path: '/enroll/singleExpandCheck',
				name: 'singleExpandCheck',
				component: () => import('@/views/enroll/admission/singleExpandCheck')
			},
			{
				// 缴费审核
				path: '/enroll/paymentReview',
				name: 'paymentReview',
				component: () => import('@/views/enroll/admission/paymentReview')
			},
			{
				// 贷款审核
				path: '/enroll/loanReview',
				name: 'loanReview',
				component: () => import('@/views/enroll/admission/loanReview')
			},
			{
				//录取信息管理
				path: '/enroll/applyMsgMng',
				name: 'applyMsgMng',
				component: () => import('@/views/enroll/admission/applyMsgMng')
			},
			{
				//录取信息查询
				path: '/enroll/applyMsgQuery',
				name: 'applyMsgQuery',
				component: () => import('@/views/enroll/admission/applyMsgQuery')
			},
			{
				//网上报名
				path: '/enroll/onlineApply',
				name: 'onlineApply',
				component: () => import('@/views/enroll/admission/onlineApply')
			},
			{
				//录取名单（默认显示拟录取）
				path: '/enroll/admissionList',
				name: 'admissionList',
				component: () => import('@/views/enroll/admission/admissionList/index')
			},
			{
				//成绩公示
				path: '/enroll/showResults',
				name: 'showResults',
				component: () => import('@/views/enroll/admission/showResults')
			},
			{
				//代报名
				path: '/enroll/replaceApply',
				name: 'replaceApply',
				component: () => import('@/views/enroll/admission/replaceApply')
			},
			{
				//当前招生季
				path: '/enroll/curSeasonSet',
				name: 'curSeasonSet',
				component: () => import('@/views/enroll/basemsg/curSeasonSet')
			},
			{
				//当前招生年份
				path: '/enroll/curYearSet',
				name: 'curYearSet',
				component: () => import('@/views/enroll/basemsg/curYearSet')
			},
			{
				//学号生成设置
				path: '/enroll/numRuleSet',
				name: 'numRuleSet',
				component: () => import('@/views/enroll/basemsg/numRuleSet')
			},
			{
				//通知书模板
				path: '/enroll/templateMng',
				name: 'templateMng',
				component: () => import('@/views/enroll/basemsg/templateMng')
			},
			{
				//招生计划管理
				path: '/enroll/planMng',
				name: 'planMng',
				component: () => import('@/views/enroll/enrollplan/planMng')
			},
			{
				//招生计划查询
				path: '/enroll/planQuery',
				name: 'planQuery',
				component: () => import('@/views/enroll/enrollplan/planQuery')
			},
			{
				//编制学号
				path: '/enroll/createNum',
				name: 'createNum',
				component: () => import('@/views/enroll/meet/createNum')
			},
			{
				//分班
				path: '/enroll/divideClassMng',
				name: 'divideClassMng',
				component: () => import('@/views/enroll/meet/divideClassMng')
			},
			{
				//新生报到信息
				path: '/enroll/reportMessage',
				name: 'reportMessage',
				component: () => import('@/views/enroll/meet/reportMessage')
			},
			{
				//报道情况统计
				path: '/enroll/reportStatistics',
				name: 'reportStatistics',
				component: () => import('@/views/enroll/meet/reportStatistics')
			},
			{
				//打印报道卡
				path: '/enroll/printReport',
				name: 'printReport',
				component: () => import('@/views/enroll/meet/printReport')
			},
			{
				//报道新生管理
				path: '/enroll/reportedMng',
				name: 'reportedMng',
				component: () => import('@/views/enroll/meet/reportedMng')
			},
			{
				//新生信息查询
				path: '/enroll/stuInfoQuery',
				name: 'stuInfoQuery',
				component: () => import('@/views/enroll/meet/stuInfoQuery')
			},
			{
				//新生报到管理
				path: '/enroll/reportMng',
				name: 'reportedMng',
				component: () => import('@/views/enroll/meet/reportMng')
			},
			{
				// 学生信息维护 ---> 学生导入
				path: '/enroll/studentImport',
				name: 'studentImport',
				component: () => import('@/views/enroll/studentMaintain/studentImport/index')
			},
			{
				// 学生信息维护 ---> 预分宿舍
				path: '/enroll/presortDormitory',
				name: 'presortDormitory',
				component: () => import('@/views/enroll/studentMaintain/presortDormitory/index')
			},
			{
				// 学生信息维护 ---> 预分班级
				path: '/enroll/presortClass',
				name: 'presortClass',
				component: () => import('@/views/enroll/studentMaintain/presortClass/index')
			},

		]
	},
	{
		path: '/404',
		component: () => import( /* webpackChunkName: "fail" */ '@/views/exception/404')
	},

]
