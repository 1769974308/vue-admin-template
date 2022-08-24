import request from '@/utils/request'

/**
 * 用户登录
 */
export function login(data) {
  return request({
    url: '/admin/login',
    method: 'post',
    data
  })
}

/**
 * 获取用户详情
 */
export function getInfo(name) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { name }
  })
}

/**
 * 获取动态路由
 */
export function getMoveRouter(param) {
  return request({
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { param }
  })
}

/**
 * 退出系统
 */
export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}
