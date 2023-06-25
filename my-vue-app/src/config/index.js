//当前环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development:{
        baseApi:'/api',
        mockApi:'https://www.fastmock.site/mock/4bb8cd1dc7f797907e74bab3db9237db/api'
    },
    test:{
        baseApi:'//test.future.com/api',
        mockApi:'https://www.fastmock.site/mock/4bb8cd1dc7f797907e74bab3db9237db/api'
    },
    development:{
        baseApi:'//future.com/api',
        mockApi:'https://www.fastmock.site/mock/4bb8cd1dc7f797907e74bab3db9237db/api'
    },
}

export default{
    env,
    mock:true,
    ...EnvConfig[env]
}