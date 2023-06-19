<template>
  <el-card class="loginYe">
    <h3 style="height: 60px">系统登录</h3>
    <el-form
      ref="form"
      label-width="70px"
      :inline="true"
      :model="form"
      :rules="rules"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="loginTag" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<style lang="less" scoped>
.loginYe {
  width: 350px;
  margin: 180px auto;
  border-radius: 20px;
  text-align: center;
}
</style>
<script>
import Mock from "mockjs";
import Cookie from "js-cookie";
import { getMenu } from "../api/index";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入用户名" }],
        password: [{ required: true, message: "请输入密码" }],
      },
    };
  },
  methods: {
    loginTag() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          getMenu(this.form).then(({ data }) => {
           
            if(data.code === 20000){
                Cookie.set('token',data.data.token)
                this.$store.commit('setMenu',data.data.menu)
                this.$store.commit('addMenu',this.$router)
                this.$router.push('home')
            }else{
                this.$message.error(data.data.message);
            }
          });
        }
      });
    },
  },
};
</script>