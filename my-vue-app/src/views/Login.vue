<template>
  <el-card>
    <div class="login">
      <h3>登录</h3>
      <el-form
        :model="loginForm"
        label-width="80px"
      >
        <el-form-item  label="用户名" prop="username">
          <el-input  type="input" v-model="loginForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginForm.password"  width="100px" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button
            size="large"
            id="loginbtn"
            type="primary"
            @click="login"
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
  width: 22%;
  margin: auto;
  margin-top: 150px;
}
.login {
  text-align: center;
}
</style>
<script>
import { getCurrentInstance, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const loginForm = reactive({
      username:'',
      password:''
    })
    const store = useStore()
    const router = useRouter()
    const {proxy} = getCurrentInstance()
    const login = async ()=>{
      let res  = await proxy.$api.getMenu(loginForm)
     
      store.commit('setMenu',res.menu)
      router.push({name : 'home'})

    }
    return{
      loginForm,
      login
    }
  },
};
</script>