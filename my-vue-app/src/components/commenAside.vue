<template>
  <el-aside  :class="$store.state.isCollapse ? 'bianda' : 'suoxiao'">  
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
:deep(.el-aside) {
  height: 100vh;
  // width: auto;
  text-align: center;
}
.suoxiao {
  width: 70px !important;
  .el-menu{
    padding-left: 0;
  }
}
.bianda {
  width: 130px !important;
  .el-menu{
    padding-left: 0;
  }
}

</style>
<script>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  setup() {
    const router = useRouter()
    const store  = useStore()
    const nochildren = () => {
      return asyncList.filter((item) => !item.children);
    };
    const haschildren = () => {
      return asyncList.filter((item) => item.children);
    };
    const asyncList  = store.state.menu
    const menuTab = (item) =>{
      store.commit("menuTab",item);
      router.push({
        path : item.path
      })
    }
    onMounted(() => {
      // store.commit('addMenu')
    });
    return {
      nochildren,
      haschildren,
      menuTab
    };
  },
};
</script>