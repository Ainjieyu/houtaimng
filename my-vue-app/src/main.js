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
app.use(ElementPlus)
app.use(router).use(store)

app.mount('#app')

