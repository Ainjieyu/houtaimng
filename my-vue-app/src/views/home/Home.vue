<template>
  <el-row class="content">
    <el-col class="l-content" :span="8">
      <div class="leftt">
        <el-card class="userinfo">
          <div class="user">
            <img src="../../assets/images/user.png" alt="" />
            <div class="utxt">
              <p class="username">Admin</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
        </el-card>
        <el-card class="sales">
          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="name" label="课程" />
            <el-table-column prop="todayBuy" label="今日购买" />
            <el-table-column prop="monthBuy" label="本月购买" />
            <el-table-column prop="totalBuy" label="总购买" />
          </el-table>
        </el-card>
      </div>
    </el-col>
    <el-col class="r-content" :span="16">2</el-col>
  </el-row>
</template>
<style lang="less" scoped>
.leftt{
    // display: table-cell;
    // vertical-align: middle;
}
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
        .utxt {
          line-height: 5px;
        }
      }
      .username {
        font-weight: 700;
        font-size: 22px;
        // margin-top: 0px;
      }
      .access {
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
      height: 350px;
      margin-top: 20px;
    }
  }
  .r-content {
    background: #439600;
  }
}
</style>
<script>
export default {
  setup() {
    const tableData = [
      {
        name: "oppo",
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
      },
      {
        name: "vivo",
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
      },
      {
        name: "苹果",
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
      },
      {
        name: "小米",
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
      },
      {
        name: "三星",
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
      },
      {
        name: "魅族",
        todayBuy: 100,
        monthBuy: 300,
        totalBuy: 800,
      },
    ];
    return {
      tableData,
    };
  },
};
</script>