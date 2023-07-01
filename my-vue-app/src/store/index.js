
import { createStore } from 'vuex'

export default createStore({
        state:{
                isCollapse: true,
                tabList: [
                    {
                        path: "/",
                        name: "home",
                        label: "首页",
                        icon: "s-home",
                        url: "Home/Home",
                    },
                ],
                menu:[]
        },
        mutations: {
            collapseMenu(state) {
                state.isCollapse = !state.isCollapse
            },
            menuTab(state,val){
                if(val.name !== 'home' ){
                    if(state.tabList.findIndex(item => item.name === val.name)=== -1){
                        state.tabList.push(val)
                    }
                }
            },
            delTabList(state,val){
                state.tabList = state.tabList.filter(item => item.name !== val.name)
            },
            setMenu(state,val){
                state.menu = val
                localStorage.setItem('menu',JSON.stringify(val))
            },
            addMenu(state){
                // let localStorage.getItem('')
                if(!localStorage.getItem('menu')){
                    return
                }
                let menu = JSON.parse(localStorage.getItem('menu')) 
                state.menu = menu
            }
        }   
})
