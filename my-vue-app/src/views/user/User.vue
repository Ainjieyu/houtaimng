<template>
  <el-dialog v-model="dialogFormVisible" title="新增" width="34%">
    <el-form :model="form">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名"  placeholder="请输入姓名">
            <el-input width="80px" v-model="form.name" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="年龄" >
            <el-input autocomplete="off" v-model="form.name" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="性别" >
            <el-select v-model="form.region" placeholder="请选择">
              <el-option label="Zone No.1" value="shanghai" />
              <el-option label="Zone No.2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="出生日期" >
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >确认</el-button
        >
      </span>
    </template>
  </el-dialog>
  <div class="userHead">
    <el-button type="primary" @click="dialogFormVisible = true"
      >新增+</el-button
    >

    <el-form :inline="true" :model="formInline">
      <el-form-item label="请输入">
        <el-input v-model="formInline.keyword" />
      </el-form-item>
      <el-button @click="sousuo" type="primary">搜索</el-button>
    </el-form>
  </div>
  <el-card>
    <div class="table">
      <el-table stripe :data="list1" style="width: 100%" height="500px">
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="age" label="年龄" width="120" />
        <el-table-column prop="sexlabel" label="性别" width="120" />
        <el-table-column prop="birth" label="生日" width="180" />
        <el-table-column prop="addr" label="地址" width="280" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
  <div class="example-pagination-block">
    <el-pagination
      @current-change="pageChange"
      layout="prev, pager, next"
      :total="100"
    />
  </div>
</template>
<style lang="less" scoped>
:deep(.el-dialog){
  :deep(.el-input){
    width: 180px!important;
  }
}
.userHead {
  width: 90%;
  .el-form--inline .el-form-item {
    margin: 9px;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 21px;
  margin-top: 10px;
}
.el-card {
  width: 90%;
  margin-left: 21px;
  margin-top: 2px;
}
.example-pagination-block {
  margin-left: 20px;
  // width: 50%;
}
.table {
  text-align: center;
  .el-table {
    text-align: center;
  }
}
</style>
<script>
import { getCurrentInstance, onMounted, reactive, ref } from "vue";
export default {
  setup() {
    const { proxy } = getCurrentInstance();
    const form = reactive({
      name: "",
      region: "",
    });
    const dialogFormVisible = ref(false);
    const zengjia = () => {
      dialogFormVisible = !dialogFormVisible;
    };
    const formInline = reactive({
      keyword: "",
    });
    const list1 = ref([]);
    const sousuo = () => {
      config.name = formInline.keyword;
      getUserList(config);
    };
    const config = reactive({
      num: 0,
      page: 1,
      name: "",
    });
    const pageChange = (pager) => {
      config.page = pager;
      getUserList(config);
    };
    const getUserList = async (config) => {
      let res = await proxy.$api.getUserList(config);
      console.log(res);
      config.num = res.count;
      list1.value = res.list;
      list1.value = res.list.map((item) => {
        item.sexlabel = item.sex === 0 ? "女" : "男";
        return item;
      });
      // console.log("11", res.list);
    };
    onMounted(() => {
      getUserList(config);
    });
    return {
      list1,
      config,
      pageChange,
      formInline,
      sousuo,
      dialogFormVisible,
      zengjia,
      form,
    };
  },
};
</script>