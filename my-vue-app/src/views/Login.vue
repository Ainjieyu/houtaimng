<template>
  <el-card>
    <div class="login">
      <h3>登录</h3>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item height="100px"  label="用户名" prop="">
          <el-input />
        </el-form-item>
        <el-form-item label="密码" prop="">
          <el-input width="150px" type="password" autocomplete="off" />
        </el-form-item>

        <el-form-item>
          <el-button
            size="large"
            id="loginbtn"
            type="primary"
            @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>
<style lang="less" scoped>
:deep(.el-form-item__content) {
  width: 150px !important;
}
:deep(.el-form-item__content) {
  margin-left: 0px !important;
}
#loginbtn {
  margin: auto;
  // margin-left: auto;
}
.el-card {
  width: 30%;
  margin: auto;
  margin-top: 100px;
}
.login {
  text-align: center;
}
</style>
<script>
export default {
  setup() {},
};
</script>