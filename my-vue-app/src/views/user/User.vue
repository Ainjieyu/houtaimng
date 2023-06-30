<template>
  <el-dialog
    v-model="dialogFormVisible"
    :title="tabletype === 0 ? '新增' : '编辑'"
    width="34%"
  >
    <el-form :model="form" ref="userForm">
      <el-row>
        <el-col :span="12">
          <el-form-item
            :rules="[{ required: true, message: '名字不能为空' }]"
            label="姓名"
            prop="name"
          >
            <el-input
              width="80px"
              v-model="form.name"
              placeholder="请输入姓名"
            />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="年龄"
            prop="age"
            :rules="[
              { required: true, message: '名字不能为空' },
              { type: 'number', message: '年龄应为数字' },
            ]"
          >
            <el-input v-model.number="form.age" placeholder="请输入年龄" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="性别"
            prop="sex"
            :rules="[{ required: true, message: '名字不能为空' }]"
          >
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option label="男" value="1" />
              <el-option label="女" value="0" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item
            label="出生日期"
            prop="birth"
            :rules="[{ required: true, message: '名字不能为空' }]"
          >
            <el-date-picker
              v-model="form.birth"
              type="date"
              placeholder="请选择生日"
              :size="size"
              format="YYYY/MM/DD"
              value-format="YYYY-MM-DD"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            :rules="[{ required: true, message: '名字不能为空' }]"
            label="地址"
            prop="addr"
            :label-width="formLabelWidth"
          >
            <el-input v-model="form.addr" placeholder="请输入地址" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleQuxiao">取消</el-button>
        <el-button type="primary" @click="onSubmit">确认</el-button>
      </span>
    </template>
  </el-dialog>
  <div class="userHead">
    <el-button type="primary" @click="handleAdd">新增+</el-button>

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
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
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
:deep(.el-dialog) {
  :deep(.el-input) {
    width: 180px !important;
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
    const handleDelete =  async (row)=>{
     await proxy.$api.delUser(row); 
      getUserList(config);
      
    }
    let tabletype = ref(0); //0新增。1编辑
    const handleAdd = () => {
      tabletype.value = 0;
      dialogFormVisible.value = true;
    };
    const handleEdit = (row) => {
      tabletype.value = 1;
      dialogFormVisible.value = true;
      Object.assign(form , row)
    };
    const onSubmit = () => {
      proxy.$refs.userForm.validate(async (valid) => {
        if (valid) {
          if (tabletype === 0) {
            let res = await proxy.$api.createUser(form);
            if (res) {
              dialogFormVisible.value = false;
              proxy.$refs.userForm.resetFields();
              getUserList(config);
            }
          } else {
            let res = await proxy.$api.editUser(form);
            if (res) {
              dialogFormVisible.value = false;
              proxy.$refs.userForm.resetFields();
              getUserList(config);
            }
          }
        }
      });
    };
    let form = reactive({
      name: "",
      age: "",
      addr: "",
      birth: "",
      sex: "",
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
    const handleQuxiao = () => {
      dialogFormVisible.value = false;
      proxy.$refs.userForm.resetFields();
    };
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
      handleDelete,
      formInline,
      sousuo,
      dialogFormVisible,
      zengjia,
      form,
      onSubmit,
      handleQuxiao,
      handleEdit,
      tabletype,
      handleAdd,
    };
  },
};
</script>