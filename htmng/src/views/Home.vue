<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px">
        <div class="grid-content bg-purple">
          <el-card class="box-card" style="height: 280px">
            <div class="user">
              <img src="../assets/images/user-default.png" alt="" />
              <div class="userinfo">
                <p class="name">Admin</p>
                <p class="access">超级管理员</p>
              </div>
            </div>
            <div class="login-info"></div>
          </el-card>
          <el-card style="height: 460px; margin-top: 20px">
            <el-table :data="tableData" style="width: 100%">
              <el-table-column prop="name" label="课程"> </el-table-column>
              <el-table-column prop="todayBuy" label="今日购买">
              </el-table-column>
              <el-table-column
                prop="monthBuy"
                label="本月购买"
              ></el-table-column>
              <el-table-column prop="totalBuy" label="总购买">
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>
      <el-col :span="16" style="padding-left: 10px">
        <div class="num">
          <el-card
            v-for="item in countData"
            :key="item.name"
            :body-style="{ display: 'flex', padding: 0 }"
          >
            <i
              class="icon"
              style="color: "
              :class="`el-icon-${item.icon}`"
              :style="{ background: item.color }"
            ></i>
            <div class="detail">
              <p class="price">￥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
        <el-card style="height: 280px">
          <div
            id="zxtu"
            ref="echarts1"
            style="width: 850px; height: 280px"
          ></div>
        </el-card>
        <div class="graph">
          <el-card>
            <div ref="echarts2" style="width: 350px; height: 280px"></div>
          </el-card>
          <el-card>
            <div ref="echarts3" style="width: 370px; height: 250px"></div>
          </el-card>
        </div>
      </el-col>
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
.num {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon {
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail {
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price {
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc {
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card {
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  .el-card {
    width: 48%;
    height: 260px;
  }
}
</style>
<script>
import * as echarts from "echarts";
import { getData } from "../api";
export default {
  data() {
    return {
      tableData: [],
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(({ data }) => {
      const { tableData } = data.data;
      this.tableData = tableData;
      const { orderData, userData, videoData } = data.data;
      // 基于准备好的dom，初始化echarts实例
      //折线图
      const echarts1 = echarts.init(this.$refs.echarts1);
      var e1option = {};
      const xAxis = Object.keys(orderData.data[0]);
      const xAxisData = {
        data: xAxis,
      };
      e1option.xAxis = xAxisData;
      e1option.yAxis = {};
      e1option.legend = xAxisData;
      e1option.series = [];
      xAxis.forEach((key) => {
        e1option.series.push({
          name: key,
          data: orderData.data.map((item) => item[key]),
          type: "line",
        });
      });
      echarts1.setOption(e1option);
      //柱状图
      const echarts2 = echarts.init(this.$refs.echarts2);
      const e2option = {
        xAxis: {
          data: userData.map((item) => item.date),
        },
        yAxis: {},
        tooltip: {},
        legend: {
          show: true,
        },
        series: [
          {
            name: "新增用户",
            data: userData.map((item) => item.new),
            type: "bar",
          },
          {
            name: "活跃用户",
            data: userData.map((item) => item.active),
            type: "bar",
          },
        ],
      };
      echarts2.setOption(e2option);
      //饼状图
      const echarts3 = echarts.init(this.$refs.echarts3);
      const e3option = {
        series: [
          {
            type: "pie",
            data: videoData,
          },
        ],
      };
      echarts3.setOption(e3option);
    });
  },
};
</script>
