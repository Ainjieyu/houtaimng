<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
  
    <h3> {{isCollapse?"后台":"后台管理系统"}}</h3>
    <el-menu-item
      v-for="item in noChildren"
      @click = "menuClick(item)"
      :key="item.name"
      :index="item.name"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>


    <el-submenu  v-for="item in hasChildren" :index="item.name" :key="item.name">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
      
        v-for="subItem in item.children"
        :key="subItem.name"
        
      >
        <el-menu-item @click = "menuClick(subItem)" :index="subItem.name">{{ subItem.label }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

  
  <style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
  height: 113vh;
}
.el-menu{
  
  border-right: none;

  h3 {
    color:#fff;
    text-align:center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}

</style >
  
  <script>
  import Cookie from 'js-cookie';
export default {
  data() {
    return {};
  },
  methods: {
    menuClick(item){
      if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path ==='/'))){
        this.$router.push(item.path)
      }
      this.$store.commit("menuTab",item)
    },
    
  },
  computed: {
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapse(){
        return this.$store.state.tab.isCollapse
    },
    menuData(){
      return JSON.parse(Cookie.get('menu'))  || this.$store.state.tab.menu
    }
  },
 
};
</script>