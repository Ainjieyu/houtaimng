import Mock from "mockjs"; 
import homeApi from './mockData/homeApi'
import userApi from './mockData/user'

Mock.mock('/home/getTable',homeApi.getTableData)

Mock.mock(/user\/getUser/,'get',userApi.getUserList)