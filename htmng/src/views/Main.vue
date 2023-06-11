<template>
  <div>
    <el-container>
      <el-aside style="overflow: hidden; width: auto;">
        <commen-aside/>
      </el-aside>
      <el-container>
        <el-header>
          <commen-header/>
        </el-header>
        <el-main>
            <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  <script>
  import commenAside from '@/components/commenAside.vue';
  import commenHeader from '@/components/commenHeader.vue';
export default {
  data() {
    return {};
  },
  components:{
    commenAside,
    commenHeader
  }
};
</script>
  