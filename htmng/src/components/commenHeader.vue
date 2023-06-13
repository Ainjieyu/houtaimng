<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        @click="handleMenu()"
        size="mini"
        icon="el-icon-menu"
      ></el-button>
      <span>首页</span>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tabList" :key="item.name" :to="{ path: '/' }"
          >首页</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user-default.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
  <style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.l-content span {
  color: #fff;
  font-size: 14px;
  margin-left: 10px;
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
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
  },
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapState([
      'tabList',
    ])
  }
};
</script>
  