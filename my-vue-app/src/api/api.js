// 整个项目api的管理
import request from "./request";
export default{
    getTableData(params){ 
        return request({
            url : '/home/getTable',
            method:'get',
            data:params,
            mock:true
        })
    },
    getCountData(){ 
        return request({
            url : '/home/getCount',
            method:'get',
            mock:true
        })
    },
    getEhartsData(){ 
        return request({
            url : '/home/getEharts',
            method:'get',
            mock:true
        })
    },
    getUserList(params){ 
        return request({
            url : '/user/getUser',
            method:'get',
            data:params,
            mock:false
        })
    },
    createUser(params){ 
        return request({
            url : '/user/addUser',
            method:'post',
            data:params,
            mock:false
        })
    },
    editUser(params){ 
        return request({
            url : '/user/edit',
            method:'post',
            data:params,
            mock:false
        })
    },
    delUser(params){ 
        return request({
            url : '/user/del',
            method:'get',
            data:params,
            mock:false
        })
    }
}