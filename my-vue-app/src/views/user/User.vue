<template>
  <div class="table">
    <el-table stripe  :data="list1" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="80" />
      <el-table-column prop="age" label="年龄" width="80" />
      <el-table-column prop="sex" label="性别" width="80" />
      <el-table-column prop="birth" label="生日" width="180" />
      <el-table-column prop="addr" label="地址" width="180" />
      <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<style lang="less" scoped>
.table{
    text-align: center;
    width: 65%;
    margin: auto;
}
</style>
<script>
import { getCurrentInstance, onMounted,ref } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const list1 = ref([])
    const getUserList = async () => {
      let res = await proxy.$api.getUserList();
      list1.value  = res.list
      console.log('11',res.list)
    };
    onMounted(() => {
        getUserList();
       
    });
    return{
        list1
    }
  },
};
</script>