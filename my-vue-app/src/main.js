import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import store from './store'
import  './api/mock'
import api from './api/api'
// import { useRouter } from 'vue-router'

const app = createApp(App)
// const route = useRouter

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$api = api
store.commit('addMenu',router)
function checkRouter(path){
    const hasCheck = router.getRoutes().filter(item => item.path == path).length
   if(hasCheck){
    return true
   }else{
    return false
   }
}
router.beforeEach((to,from,next)=>{
    store.commit('getToken')
    const token  =  store.state.token
    if(!token && to.name !== 'login'){
        next({name:"login"})
    }
    else if(!checkRouter(to.path)){
        next({name:"home"})
    }
    else{
        next()
    }
})
    


app.use(ElementPlus)
app.use(router).use(store)

app.mount('#app')

