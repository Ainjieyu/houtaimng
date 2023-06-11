<template>
  <div>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          <el-card class="box-card">
            <div class="user">
              <img src="../assets/images/user-default.png" alt="" />
              <div class="userinfo">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
              </div>
            </div>
            <div class="login-info"></div>
          </el-card>
          <el-card>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="date" label="日期" width="180">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="180">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>
          </el-card></div
      ></el-col>
      <el-col :span="16"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.user {
  display: flex;
  align-items: center;
  img {
    margin-right: 40px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
  .userinfo {
    .name {
      font-size: 32px;
      margin-bottom: 10px;
    }
    .access {
      color: #999999;
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
};
</script>
