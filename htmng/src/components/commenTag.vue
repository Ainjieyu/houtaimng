<template>
  <div>
    <el-tag
      v-for="item in tabList"
      :key="item.label"
      :type="item.type"
      :effect=" $route.name === item.name ? 'dark' : 'plain'" 
      closable=true
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {};
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapState({
      tabList: (state) => state.tab.tabList,
    }),
  },
};
</script>
  