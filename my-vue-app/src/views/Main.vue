<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
            <commen-header/>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { defineComponent } from 'vue';
import commenHeader from '../components/commenHeader.vue';
export default defineComponent({
    components:{
        commenHeader,
    }
})
</script>