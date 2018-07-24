import axios from 'axios'
import qs from 'qs'
const instance = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
const instanceUpload = axios.create({
  headers: {
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarywHzbrpNcVvUhEInA'
  }
})

// request拦截器
// instance.interceptors.request.use(config => {
//   // Do something before request is sent
//   config.headers['aa'] = setToken()
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })
export default {
  fetchGet(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doGet(url, data) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url: url,
        data: qs.stringify(data)
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doPost(url, data) {
    return new Promise((resolve, reject) => {
      instance({
        method: 'post',
        url: url,
        data: qs.stringify(data)
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  doUpLoadFile(url, data) {
    return new Promise((resolve, reject) => {
      instanceUpload({
        method: 'post',
        url: url,
        data: data
      }).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
