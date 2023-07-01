<template>
  <div class="ttag">
    <el-tag
      v-for="(item,index) in $store.state.tabList"
      :key="item.name"
      size="default"
      :effect= "route2 === item.path ? 'dark' : 'plain'"
      closable
      :disable-transitions="false"
      @close="handleClose(item,index)"
      @click="tagClick(item)"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>
<style lang="less" scoped>
.el-tag {
  margin-left: 10px;
  // margin-bottom: -300px;
}
.ttag {
  padding-left: 12px;
}
</style>
<script>
import {  useRouter,useRoute  } from 'vue-router';
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const route = useRoute()
    const tagClick = (item)=>{
        console.log(item)
        router.push({
            path : item.path
        })
    }
    const handleClose = (item,index)=>{
        store.commit('delTabList',item)
        const length = store.state.tabList.length
        console.log('length',length)
        if(item.path == route2.value){
          if(index === length){
            router.push(store.state.tabList[length-1].path) 
          }else{
            router.push(store.state.tabList[index].path)
          }
            
        }
        
    }
    const route2 = computed(() => {
      return route.path;
    });

    return{
        tagClick,
        handleClose,
        route2
    }
  },
};
</script>