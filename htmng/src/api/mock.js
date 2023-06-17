import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import userApi from './mockServerData/user'

Mock.mock('/api/home/getData',homeApi.getStatisticalData())

Mock.mock('/api/user/getUser',userApi.getUserList)
Mock.mock('/api/user/del','post',userApi.deleteUser) 
Mock.mock('/api/user/update','post',userApi.updateUser)
Mock.mock('/api/user/add','post',userApi.createUser)
