<template>
  <div class="manage">
    <el-dialog
      title="新增用户"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
      
    >
      <el-form :inline = true ref="form" :rules="rules" :model="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄"  prop="age">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="性别"  prop="sex">
          <el-select v-model="form.sex" placeholder="请选择性别">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期"  prop="birth">
          <el-col :span="24">
            <el-date-picker v-model="form.birth" type="date" placeholder="选择日期" style="width: 100%"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="地址"  prop="addr">
          <el-input
            v-model="form.addr"
            placeholder="请输入地址"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="text" @click="dialogVisible = true">新增 +</el-button>
    </div>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      dialogVisible: false,
      form:{
        name:'',
        age:'',
        sex:'',
        birth:'',
        addr:''
      },
      rules: {
          name: [
            { required: true, message: '请输入姓名', },
          ],
          age: [
            { required: true, message: '请输入年龄', },
          ],
          sex: [
            { required: true, message: '请选择性别', },
          ],
          birth: [
            { required: true, message: '请选择生日', },
          ],
          addr: [
            { required: true, message: '请输入地址', },
          ],
      }
     
    };
  },
  methods: {},
};
</script>
  