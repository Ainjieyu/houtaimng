<template>
  <el-header>
    <div class="l-content">
      <el-button size="small">
        <el-icon @click="collapseMenu()" :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item 
        v-for="item in $store.state.tabList"
        :key="item.name"
        :to="{ path: item.path }">{{ item.label }}</el-breadcrumb-item>      
      </el-breadcrumb>
    </div>

    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img src="../assets/images/user-default.png" alt="" class="user" />
        </span>

        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>
<style lang="less" scoped>
.el-header {
  padding: 0;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.l-content {
  color: #fff;
  display: flex;
  /deep/.is-link{
    color: #fff;
    font-weight: normal;
  }
  /deep/.el-breadcrumb__inner:hover{
    color: #fff;
    cursor: pointer;
  }
  .el-button {
    margin-right: 15px;
  }
}
.r-content {  
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    const collapseMenu = () => {
      store.commit("collapseMenu");
    };
    // const menuTab = ()=>{
    //   store.commit("menuTab");
    // }

    return {
      collapseMenu,
      // menuTab
    };
  },
};
</script>