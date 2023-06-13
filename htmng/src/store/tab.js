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
            // console.log('tab',state.tabList)
            console.log('val',val)
            if(val.name !=="home" ){
                if(state.tabList.findIndex(item => item.name === val.name) === -1){
                    state.tabList.push(val)
                }
                // console.log()
                
            }
        }
    }
}