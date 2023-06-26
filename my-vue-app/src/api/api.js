// 整个项目api的管理
import request from "./request";
export default{
    getTableData(params){ 
        return request({
            url : '/home/getTable',
            methods:'get',
            data:params,
            mock:true
        })
    },
    getCountData(){ 
        return request({
            url : '/home/getCount',
            methods:'get',
            mock:true
        })
    },
    getEhartsData(){ 
        return request({
            url : '/home/getEharts',
            methods:'get',
            mock:true
        })
    }
}