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
    :deep(.el-card__body) {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
<script>
import * as echarts from "echarts";
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  ref,
} from "vue";
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance();
    const tableData = ref([]);
    const countData = ref([]);
    const getTable = async () => {
      let res = await proxy.$api.getTableData();
      tableData.value = res.tableData;
    };
    const getCount = async () => {
      let res = await proxy.$api.getCountData();
      countData.value = res.countData;
    };
    const getEharts = async () => {
      let res = await proxy.$api.getEhartsData();
      //zxt
      const e1 = echarts.init(document.getElementById("zxt"));
      const e1keys = Object.keys(res.orderData.data[0])
      const option1 = {
        xAxis: {
          data: res.orderData.date,
        },
        yAxis: {},
        legend: {show: true},
        series: [],
      };
      e1keys.forEach(key =>{
        option1.series.push({
          name:key,
          type:'line',
          data: res.orderData.data.map(item => item[key]),
        })
      })
      e1.setOption(option1);
      //zzt
      const e2 = echarts.init(document.getElementById("zzt"));
      const option2 = {
        legend: {
          show: true,
        },
        xAxis: {
          data: res.userData.map(item => item.date),
        },
        yAxis: {},
        series: [
          {
            name:'新增用户',
            type: "bar",
            data: res.userData.map(item => item.new),
          },
          {
            name:'活跃用户',
            type: "bar",
            data:  res.userData.map(item => item.active),
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
            data: res.videoData,
          },
        ],
      };
      e3.setOption(option3);
    };

    onMounted(() => {
      getEharts();
      getTable();
      getCount();
      
     
      
      
    });

    return {
      tableData,
      countData,
    };
  },
});
</script>