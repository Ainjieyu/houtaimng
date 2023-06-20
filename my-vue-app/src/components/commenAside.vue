<template>
  <el-aside   :width="$store.state.isCollapse ? '300px' : '264px'"    > 

    <el-menu  class="el-menu-vertical-demo" background-color="#369" text-color="#fff" :collapse="!$store.state.isCollapse">
      <el-menu-item
        v-for="item in nochildren()"
        :index="item.path"
        :key="item.path"
      >
        <component class="icons" :is="item.icon"></component>
        <span>{{ item.label }}</span>
      </el-menu-item>
      <el-sub-menu
        v-for="item in haschildren()"
        :index="item.path"
        :key="item.path"
      >
        <template #title>
          <component class="icons" :is="item.icon"></component>
          <span>{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(subitem ) in item.children"
            :index="subitem.path"
            :key="subitem.path"
            >{{ subitem.label }}</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<style lang="less" scoped>
.el-aside {
  text-align: center;
}
.icons {
  width: 18px;
  height: 18px;
}
.el-aside{
    height: 100vh;
    width: auto;
}
</style>
<script>
export default {
  setup() {
    const list = [
      {
        path: "/",
        name: "home",
        label: "首页",
        icon: "s-home",
        url: "Home/Home",
      },
      {
        path: "/mall",
        name: "mall",
        label: "商品管理",
        icon: "video-play",
        url: "MallManage/MallManage",
      },
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "UserManage/UserManage",
      },
      {
        label: "其他",
        icon: "location",
        path: "/Other",
        children: [
          {
            path: "/page1",
            name: "page1",
            label: "页面1",
            icon: "setting",
            url: "Other/PageOne",
          },
          {
            path: "/page2",
            name: "page2",
            label: "页面2",
            icon: "setting",
            url: "Other/PageTwo",
          },
        ],
      },
    ];
    const nochildren = () => {
      return list.filter((item) => !item.children);
    };
    const haschildren = () => {
      return list.filter((item) => item.children);
    };

    return {
      nochildren,
      haschildren,
    };
  },
};
</script>