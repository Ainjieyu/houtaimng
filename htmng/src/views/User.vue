<template>
  <div class="manage">
    <el-dialog
      :title="this.modalType === 0 ?'新增用户':'编辑用户'"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form
        :inline="true"
        ref="form"
        :rules="rules"
        :model="form"
        label-width="80px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-col :span="24">
            <el-date-picker
              v-model="form.birth"
              value-format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input v-model="form.addr" placeholder="请输入地址"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button @click="submit()" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary"   @click="addUser()">新增 +</el-button>
      <!-- form搜索区 -->
    </div>
    <el-table  height="90%"  :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="180"> </el-table-column>
      <el-table-column prop="sex" label="性别">
        <template slot-scope="scope">
          <span> {{ scope.row.sex === 1 ? '男' : '女' }}</span>
        </template>
      </el-table-column>
      <el-table-column  prop="birth" label="出生日期"> </el-table-column>
      <el-table-column prop="addr" label="地址"> </el-table-column>
      <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
  <script>
  import {getUser,addUser,updateUser,delUser} from '../api/index'
export default {
  data() {
    return {
      dialogVisible: false,
      modalType:0,//0新增，，1编辑
      form: {
        name: "",
        age: "",
        sex: "",
        birth: "",
        addr: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名" }],
        age: [{ required: true, message: "请输入年龄" }],
        sex: [{ required: true, message: "请选择性别" }],
        birth: [{ required: true, message: "请选择生日" }],
        addr: [{ required: true, message: "请输入地址" }],
      },
      tableData:[]
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate((vali) => {
        if (vali) {
          if(this.modalType === 0){
            addUser(this.form).then(()=>{
              this.getList()
            })
          }else{
            updateUser(this.form).then(()=>{
              this.getList()
            })
          }
          this.dialogVisible = false;
          this.$refs.form.resetFields();
        }
      });
    },
    getList(){
      getUser().then(({data}) =>{
      this.tableData = data.list
    })
    },
    handleEdit(row){
      this.modalType = 1;
      this.dialogVisible = true;
      this.form = JSON.parse(JSON.stringify(row))
      // this.submit()
    },
    addUser(){
      this.modalType = 0;
      this.dialogVisible = true
      // this.submit()
    },
    handleDelete(row){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delUser({id : row.id}).then(()=>{
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
          })
         
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  },
  mounted(){
   this.getList()
  }
};
</script>
<style lang="less" scoped>
.manage{
  height: 90%;
}
</style>
  