import Cookie from "js-cookie"
export default {
    state: {
        isCollapse: false,
        tabList: [
            {
                path: "/",
                name: "home",
                label: "首页",
                icon: "s-home",
                url: "Home/Home",
            },
        ],
        menu: []
    },
    mutations: {
        collapseMenu(state) {
            state.isCollapse = !state.isCollapse
        },
        menuTab(state, val) {
            if (val.name !== "home") {
                if (state.tabList.findIndex(item => item.name === val.name) === -1) {
                    state.tabList.push(val)
                }
            }
        },
        tagClose(state, val) {
            const index = state.tabList.findIndex(item => item.name === val.name)
            state.tabList.splice(index, 1)
        },
        setMenu(state, val) {
            state.menu = val
            Cookie.set('menu', JSON.stringify(val))
        },
        addMenu(state, router) {
            if (!Cookie.get('menu')) return
            const menuArray = []
            const menu = JSON.parse(Cookie.get('menu'))
            state.menu = menu
            menu.forEach(item => {
                if (item.children) {
                    item.children = item.children.map(ch => {
                        ch.component = () => import(`../views/${ch.url}`)
                        return ch
                    })
                    menuArray.push(...item.children)
                } else {
                    item.component = () => import(`../views/${item.url}`)
                    menuArray.push(item)
                }
            });
            menuArray.forEach(item =>{
                router.addRoute('Main',item)
            })
        }
    }
}