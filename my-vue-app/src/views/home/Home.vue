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
    <el-col class="r-content" :span="16">
      <div class="tongji">
        <el-card v-for="item in countData" :key="item.name" width="150px">
          <div class="countCard">
            <div :style="{ background: item.color }" class="licon">
              <el-icon color="white" :size="25">
                <component :is="item.icon" />
              </el-icon>
            </div>
            <div class="rtxt">
              <p class="cValue">￥{{ item.value }}</p>
              <p class="cName">{{ item.name }}</p>
            </div>
          </div>
        </el-card>
      </div>
      <el-card>
        <div
          id="zxt"
          ref="zxt"
          class="zxt"
          style="width: 800px; height: 220px"
        ></div>
      </el-card>
      <div class="boTu">
        <el-card style="width: 380px">
          <div id="zzt" style="width: 350px; height: 220px"></div>
        </el-card>
        <el-card style="width: 380px">
          <div id="bt" style="width: 350px; height: 220px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<style lang="less" scoped>
.boTu {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.content {
  height: 100%;
  // background: #155700;
  display: flex;
  justify-content: center;
  .l-content {
    padding: 20px;
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
    // background: #439600;
    padding: 10px 20px 10px 20px;
    .zxt {
    }
  }
}
.tongji {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 180px;
  margin-bottom: 15px;
  // padding: 15px 0px 15px 0px;
  .countCard {
    display: flex;

    .rtxt {
      line-height: 5px;
      margin-left: 15px;
      .cValue {
        font-size: 20px;
      }
      .cName {
        font-size: 12px;
        color: #aaa;
      }
    }
  }
  .el-card__body {
    padding: 0;
    margin: 0;
  }
  .licon {
    height: 70px;
    width: 70px;
    padding: 0;
    text-align: center;
    vertical-align: middle;
    line-height: 80px;
  }
  .el-card {
    width: 250px;
    height: 70px;
    padding: 0;
    border: none;
    /deep/.el-card__body {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
<script>
import * as echarts from "echarts";
import { onMounted,ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const tableData = ref([]) ;
    const countData = [
      {
        name: "今日支付订单",
        value: 1234,
        icon: "SuccessFilled",
        color: "#2ec7c9",
      },
      {
        name: "今日收藏订单",
        value: 210,
        icon: "StarFilled",
        color: "#ffb980",
      },
      {
        name: "今日未支付订单",
        value: 1234,
        icon: "GoodsFilled",
        color: "#5ab1ef",
      },
      {
        name: "本月支付订单",
        value: 1234,
        icon: "SuccessFilled",
        color: "#2ec7c9",
      },
      {
        name: "本月收藏订单",
        value: 210,
        icon: "StarFilled",
        color: "#ffb980",
      },
      {
        name: "本月未支付订单",
        value: 1234,
        icon: "GoodsFilled",
        color: "#5ab1ef",
      },
    ];

    const getTable = async () => {
      await axios.get("/home/getTable").then((res) => {
        if(res.data.code === 200){
          tableData.value = res.data.data.tableData
        }
      });
    };

    onMounted(() => {
      getTable();
      const e1 = echarts.init(document.getElementById("zxt"));
      const option1 = {
        xAxis: {
          data: ["A", "B", "C", "D", "E"],
        },
        yAxis: {},
        series: [
          {
            data: [10, 22, 99, 23, 19],
            type: "line",
            lineStyle: {
              normal: {
                color: "green",
                width: 3,
                type: "dashed",
              },
            },
          },
        ],
      };
      e1.setOption(option1);

      //zzt
      const e2 = echarts.init(document.getElementById("zzt"));
      const option2 = {
        xAxis: {
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {},
        series: [
          {
            type: "bar",
            data: [23, 24, 18, 25, 27, 28, 25],
          },
          {
            type: "bar",
            data: [26, 24, 18, 22, 23, 20, 27],
          },
        ],
      };
      e2.setOption(option2);
      //bt
      const e3 = echarts.init(document.getElementById("bt"));
      const option3 = {
        series: [
          {
            type: "pie",
            data: [
              {
                value: 335,
                name: "直接访问",
              },
              {
                value: 234,
                name: "联盟广告",
              },
              {
                value: 1548,
                name: "搜索引擎",
              },
            ],
          },
        ],
      };
      e3.setOption(option3);
      //bt
    });

    return {
      tableData,
      countData,
    };
  },
};
</script>