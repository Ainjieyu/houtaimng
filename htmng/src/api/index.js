import http from '../utils/request'

export const getData = () =>{
    return http.get('/home/getData')
}  

export const getUser = (params) =>{
    return http.get('/user/getUser',params)
}
export const delUser = (data) =>{
    return http.post('/user/del',data)
}
export const addUser = (data) =>{
    return http.post('/user/add',data)
}
export const updateUser = (data) =>{
    return http.post('/user/update',data)
}

