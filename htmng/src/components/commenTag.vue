<template>
  <div class="tabs">
    <el-tag
      v-for=" ( item,index) in tabList"
      :key="item.label"
      :type="item.type"
      :effect=" $route.name === item.name ? 'dark' : 'plain'" 
      @click = 'tagClick(item)'
      @close = 'tagClose(item,index)'
      :closable ="item.name === 'home' ? false: true" 
      size="small"
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
  methods:{
    tagClick(item){
      if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path ==='/'))){
        this.$router.push(item.path)
      }
    },
    tagClose(item,index){
      const last =  this.$store.state.tab.tabList.length - 1 ;
      this.$store.commit('tagClose',item)
      if(this.$route.name !== item.name){
        return
      }
      if(index === last ){
        this.$router.push(this.$store.state.tab.tabList[index - 1].name)
      }else{
        this.$router.push(this.$store.state.tab.tabList[index].name)
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tabs{
  // padding: 10px;
  margin-bottom: 20px;
  .el-tag{
    margin-right: 10px;
    cursor: pointer;
  }
}
</style>
  