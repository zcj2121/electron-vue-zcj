import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/404', component: require('@/views/404').default, },

  {
    path: '/',
    redirect: '/work',
    hidden: true
  },
  {
    path: '/work',
    name: 'work',
    meta: { title: '工作空间' },
    component: require('@/views/work/index').default,
  },
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: require('@/views/login/index').default
  },
  {
    path: '/forget',
    name: 'forget',
    meta: { title: '忘记密码' },
    component: require('@/views/forget/index').default,
  },
  {
    path: '/register',
    name: 'register',
    meta: { title: '注册' },
    component: require('@/views/register/index').default,
  },
  {
    path: '/credit',
    name: 'credit',
    meta: { title: '授信管理' },
    component: require('@/views/credit/index').default,
  },
  {
    path: '/usemoney',
    name: 'usemoney',
    meta: { title: '用款管理' },
    component: require('@/views/usemoney/index').default,
  },
  {
    path: '/usermanage',
    name: 'usermanage',
    meta: { title: '用户管理' },
    component: require('@/views/usermanage/index').default,
  },
  {
    path: '/loanconfirm',
    name: 'loanconfirm',
    meta: { title: '借款信息确认' },
    component: require('@/views/loanconfirm/index').default,
  },
  { path: '*', redirect: '/404' }
]

export default new Router({
  routes: constantRouterMap
})

// export const asyncRouterMap = [
//   {
//     path: '/work',
//     component: Layout,
//     redirect: 'work/all',
//     alwaysShow: true, // will always show the root menu
//     meta: { title: '任务管理', icon: 'clipboard', roles: ['admin', 'editor', 'other'] },
//     children: [
//       {
//         path: 'all',
//         name: 'all',
//         component: () => import('@/views/work/all/index'),
//         meta: { title: '全部任务', icon: 'clipboard', roles: ['admin', 'editor'] }
//       },
//       {
//         path: 'me',
//         name: 'me',
//         component: () => import('@/views/work/me/index'),
//         meta: { title: '我的任务', icon: 'clipboard', roles: ['admin', 'editor', 'other'] }
//       }
//     ]
//   },
//   {
//     path: '/user',
//     component: Layout,
//     redirect: 'user/user',
//     meta: { title: '权限管理', icon: 'cog', roles: ['admin'] },
//     children: [
//       {
//         path: 'user',
//         name: 'user',
//         component: () => import('@/views/user/index'),
//         meta: { title: '权限管理', icon: 'cog', roles: ['admin']}
//       }
//     ]
//   },
//   { path: '*', redirect: '/404', hidden: true }
// ]
