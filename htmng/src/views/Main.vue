<template>
  <div>
    <el-container>
      <el-aside style="overflow: hidden; width: 200px;">
        <commen-aside/>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  <script>
  import commenAside from '@/components/commenAside.vue';
export default {
  data() {
    return {};
  },
  components:{
    commenAside
  }
};
</script>
  