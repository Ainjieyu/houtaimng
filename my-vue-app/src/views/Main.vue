<template>
  <div class="common-layout">
    <el-container>
      <el-aside >
        <commen-aside/>
      </el-aside>
      <el-container>
        <el-header>
            <commen-header/>
        </el-header>
        
        <el-main>
          <commen-tag />
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import commenHeader from '../components/commenHeader.vue';
import commenAside from '../components/commenAside.vue';
import commenTag from '../components/commenTag.vue';
export default defineComponent({
    components:{
        commenHeader,
        commenAside,
        commenTag
    }
})
</script>
<style lang="less" scoped>
</style>