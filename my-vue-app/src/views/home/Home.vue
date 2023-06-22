<template>
  <el-row class="content" :gutter="20">
    <el-col class="l-content" :span="8">
      <el-card class="userinfo">
        <div class="user">
          <img src="../../assets/images/user.png" alt="" />
          <div class="utxt">
            <p class="username">Admin</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
      </el-card>
      <el-card class="sales"></el-card>
    </el-col>
    <el-col class="r-content" :span="16">2</el-col>
  </el-row>
</template>
<style lang="less" scoped>
.content {
  height: 100%;
  background: #155700;
  display: flex;
  justify-content: center;
  // text-align: center;

  .l-content {
    .userinfo {
      height: 160px;

      .user {
        display: flex;
        align-items: center;
        .utxt{
            line-height: 5px;
        }
      }
      .username {
        font-weight: 700;
        font-size: 22px;
        // margin-top: 0px;
      }
      .access{
        font-size: 14px;
        color: #aaa;
      }
      img {
        width: 120px;
        border-radius: 50%;
        margin-right: 32px;
      }
    }
    .sales {
      height: 455px;
      margin-top: 20px;
    }
  }
  .r-content {
    background: #439600;
  }
}
</style>
<script>
</script>