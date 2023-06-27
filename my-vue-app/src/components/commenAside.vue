<template>
  <el-aside :width="$store.state.isCollapse ? '200px' : '100px'"


   :class="($store.state.isCollapse ? 'bianda' : 'suoxiao')">  
    <el-menu
      class="el-menu-vertical-demo"
      background-color="#369"
      text-color="#fff"
      :collapse="!$store.state.isCollapse"
      :collapse-transition ="false"
    >
    <h3>{{$store.state.isCollapse ? '后台管理系统' : '后台'}}</h3>
      <el-menu-item
        v-for="item in nochildren()"
        :index="item.path"
        :key="item.path"
        @click="menuTab(item)"
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
            v-for="subitem in item.children"
            @click="menuTab(subitem)"
            :index="subitem.path"
            :key="subitem.path"
            >{{ subitem.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>
<style lang="less" scoped>
.el-aside {
  text-align: center;
}
.el-menu{
  h3{
    color: #fff;
    font-weight: normal;
    
  }
}

.icons {
  width: 18px;
  height: 18px;
}
.el-aside {
  height: 100vh;
  text-align: center;
}
.suoxiao {
  width: 70px;
  .el-menu{
    padding-left: 0;
  }
}
.bianda {
  width: 130px;
  .el-menu{
    padding-left: 0;
  }
}

</style>
<script>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const router = useRouter()
    const store  = useStore()
    const list = [
      {
        path: "/",
        name: "home",
        label: "首 页",
        icon: "House",
        url: "Home/Home",
      },
      {
        path: "/mall",
        name: "mall",
        label: "商品管理",
        icon: "video-play",
        url: "Mall/Mall",
      },
      {
        path: "/user",
        name: "user",
        label: "用户管理",
        icon: "user",
        url: "User/User",
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
    const menuTab = (item) =>{
      store.commit("menuTab",item);
      router.push({
        path : item.path
      })
    }

    return {
      nochildren,
      haschildren,
      menuTab
    };
  },
};
</script>