import Mock from "mockjs"; 
import homeApi from './mockData/homeApi'
import userApi from './mockData/user'
import permissionApi from './mockData/permission'

Mock.mock('/home/getTable',homeApi.getTableData)

Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/addUser/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)
Mock.mock(/user\/del/,'get',userApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)