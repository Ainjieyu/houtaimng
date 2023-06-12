<template>
  <div>
    <el-row>
      <el-col :span="8" style="padding-right: 10px;">
        <div class="grid-content bg-purple">
          <el-card class="box-card" style="height: 280px;">
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
      <el-col :span="16" style="padding-left: 10px;" >
        <div class="num">
          <el-card v-for="item in countData" :key="item.name" :body-style="{display:'flex',padding:0}">
            <i class="icon" style="color: " :class="`el-icon-${item.icon}`" :style="{background:item.color}"></i>
            <div class="detail">
              <p class="price">￥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>  
          </el-card>
        </div>
        <el-card style="height: 280px;">
          <div id="zxtu" ref="echarts1"  style="width: 800px;height:280px;"></div>
        </el-card>
        <div class="graph">
          <el-card ></el-card>
          <el-card ></el-card>
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
.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .icon{
    width: 80px;
    height: 80px;
    font-size: 30px;
    text-align: center;
    line-height: 80px;
    color: #fff;
  }
  .detail{
    margin-left: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price{
      font-size: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      height: 30px;
    }
    .desc{
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
}
.graph{
  display:flex;
  justify-content: space-between;
  margin-top: 20px;
  .el-card{
    width: 48%;
    height: 260px;
  }
}
</style>
<script>
import * as echarts from 'echarts'
import {getData} from '../api'
export default {
  data() {
    return {
      tableData: [
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
      ],
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
  mounted(){
    getData().then(({data}) =>{
      const {tableData} = data.data
      this.tableData = tableData
      // console.log(data.data.orderData)
      const {orderData} = data.data
      // 基于准备好的dom，初始化echarts实例
      const echarts1 = echarts.init(this.$refs.echarts1);
      var e1option = {};
      // console.log(this.tableData)
      // 指定图表的配置项和数据
      const xAxis = Object.keys(orderData.data[0])
      const xAxisData  = {
        data:xAxis
      }
      e1option.xAxis = xAxisData
      e1option.yAxis = {}
      e1option.legend =  xAxisData
      e1option.series= []
      xAxis.forEach(key => {
        e1option.series.push({
            name:key,
            data:orderData.data.map(item => item[key]),
            type:'line'
          })
        })
      // 使用刚指定的配置项和数据显示图表。
      echarts1.setOption(e1option);
    }) 
      
  }
};

</script>
