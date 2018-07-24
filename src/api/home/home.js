import http from '../public'
// 首页数据
export const getNavbar = (params) => {
  return http.fetchGet('/static/mock/navbar.json', params)
}
