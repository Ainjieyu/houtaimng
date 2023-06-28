<template>
  <el-card>
    <div class="table">
      <el-table stripe :data="list1" style="width: 100%" height="500px" >
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="age" label="年龄" width="120" />
        <el-table-column prop="sexlabel" label="性别" width="120" />
        <el-table-column prop="birth" label="生日" width="180" />
        <el-table-column prop="addr" label="地址" width="280" />
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
  </el-card>
  <div class="example-pagination-block">
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>
</template>
<style lang="less" scoped>
.el-card{
  width: 90%;
  margin-left: 21px;
  margin-top: 20px;
}
.table {
  text-align: center;
  // width: 82%;
 
  // border: 1px solid #555;
  .el-table {
    text-align: center;
  }
}
</style>
<script>
import { getCurrentInstance, onMounted, ref } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const list1 = ref([]);
    const getUserList = async () => {
      let res = await proxy.$api.getUserList();
      list1.value = res.list;
      list1.value = res.list.map(item =>{
        item.sexlabel = item.sex === 0 ? '女' : '男'
        return item
      })
      // console.log("11", res.list);
    };
    onMounted(() => {
      getUserList();
    });
    return {
      list1,
    };
  },
};
</script>