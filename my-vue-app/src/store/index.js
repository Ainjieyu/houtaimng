import { createStore } from 'vuex'
import Cookie from 'js-cookie'


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
                menu:[],
                token : ''
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
            addMenu(state,router){
                console.log('addMenu,router',router)
                if(!localStorage.getItem('menu')){
                    return
                }
                let menu = JSON.parse(localStorage.getItem('menu')) 
                state.menu = menu

                const menuAry = []
                menu.forEach(item => {
                    if(item.children){
                        item.children = item.children.map(item =>{
                            let url  = `../views/${item.url}.vue`
                            item.component = () => import(url)
                            return item
                        });
                        menuAry.push(...item.children)
                    }else{
                        let url  = `../views/${item.url}.vue`
                        item.component =  () => import(url)
                        menuAry.push(item)
                    };
                });
               
                menuAry.forEach(item =>{
                    console.log('menuAry,router',router)
                    router?.addRoute('home1',item)
                })
            },
            clearMenu(state){
                state.menu = []
                localStorage.removeItem('menu')
            },
            setToken(state,val){
                state.token = val
                Cookie.set('token',val)
            },
            removeToken(state){
                state.token = ''
                Cookie.remove('token')
            },
            getToken(state){
                state.token = state.token || Cookie.get('token')
            }
        }   
})
