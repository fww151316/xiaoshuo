import axios from 'axios'
import { getToken } from './auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (getToken()) {
     
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
 
  response => {
    const res = response.data
    if (res.code !== 20000) {
     
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
     
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
