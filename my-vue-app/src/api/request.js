import axios from "axios";
import config from "../config";
import { ElMessage } from "element-plus";
const NETWORK_ERROR = '网络请求异常，请稍后重试'

const service = axios.create({
    baseURL : config.baseApi
})

service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (res) {
    // 根据后端协商   视情况而定
    const {code,data,msg}  = res.data
    if(code == 200){
        return data
    }else{
        //网络错误
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
  });
  //封装的核心函数
  function request(options){
    options.method = options.method || 'get'
    if(options.method.toLowerCase() == 'get'){
        options.params = options.data
    }
    let isMock = config.mock
    if(typeof options.mock !== 'undefined'){
        isMock = options.mock
    }
    //对线上环境做处理
    if(config.env == 'prod'){
        //不给你用到mock的机会
        service.defaults.baseURL = config.baseApi
    }else{
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }
    return service(options)
  }
  export default request