export default{
    state:{
        isCollapse: false,
        tabList:[
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
              },
        ]
    },
    mutations:{
        collapseMenu(state){
            state.isCollapse = !state.isCollapse
        },
        menuTab(state,val){
            if(val.name !=="home" ){
                if(state.tabList.findIndex(item => item.name === val.name) === -1){
                    state.tabList.push(val)
                }
            }
        },
        tagClose(state,val){
            const index = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(index,1)
        }
    }
}