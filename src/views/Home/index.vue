<template>
  <div class="home-container">
    <el-container>
    <el-header style="text-align: right; font-size: 12px">
     <span style="float: left; font-size: 24px">待办事项<el-badge value="12" class="item"/></span>
     
    <el-button type="success" size="small" plain>更多<i class="el-icon-d-arrow-right"></i></el-button>
    </el-header>
    
    <el-main>
      <el-table :data="tableData" @cell-click="currentRow" size='mini' >
        <el-table-column prop="num" label="序号" align="center" header-align="center" width="60" type="index">
        </el-table-column>
        <el-table-column prop="todolist" label="待办事项" width="180">
        </el-table-column>
        <el-table-column prop="companyname" label="公司名称">
        </el-table-column> 
        <el-table-column prop="applicant" label="申请人" width="60" align="center" header-align="center">
        </el-table-column>
        <el-table-column prop="tel" label="联系电话" width="100" align="center" header-align="center">
        </el-table-column>
        <el-table-column prop="product" label="产品" width="120" align="center" header-align="center" :filters="productFilter" :filter-method="filterProduct">
        </el-table-column>
        <el-table-column prop="status" label="状态" width="120" align="center" header-align="center" :filters="statusFilter" :filter-method="filterStauts">
        </el-table-column>
       

        
         <el-table-column prop="createtime" label="创建时间" width="100" header-align="center" sortable>
         <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{scope.row.createtime}}</span>
        </template>        
        </el-table-column>
        <i class="el-icon-time"></i>
        <el-table-column prop="updatetime" label="更新时间" width="100" header-align="center" sortable>
         <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span>{{scope.row.updatetime}}</span>
        </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container> 
    <el-container>
      <el-main >
        <home-statistics refs="subcomponent" :substyle="substyle"></home-statistics>
         </el-main>
    </el-container>
    
    
  
    <div class="home-text">name:{{name}}</div>
    <div class="home-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { MessageBox } from "element-ui";
import HomeStatistics from "./HomeStatistics";

export default {
  components: { HomeStatistics },
  name: "home",
  data() {
    return {
      statusFilter: [
        { text: "等待网填", value: "等待网填" },
        { text: "邮寄证书", value: "邮寄证书" }
      ],
      productFilter: [
        { text: "新办", value: "新办" },
        { text: "补办", value: "补办" }
      ],
      tableData: [
        {
          todolist: "软件著作权",
          applicant: "王小豹",
          companyname: "三星电子",
          tel: "17600600600",
          product: "新办",
          status: "等待网填",
          createtime: "2018-08-10",
          updatetime: "2018-08-21"
        },
        {
          todolist: "高新技术企业认证",
          applicant: "王小虎",
          companyname: "三星电子",
          tel: "17600600600",
          product: "补办",
          status: "邮寄证书",
          createtime: "2018-08-11",
          updatetime: "2018-08-22"
        },
        {
          todolist: "CMMI认证",
          applicant: "王小六",
          companyname: "海尔集团",
          tel: "17600600600",
          product: "新办",
          status: "等待处理",
          createtime: "2018-08-12",
          updatetime: "2018-08-23"
        },
        {
          todolist: "高新技术企业认证",
          applicant: "王小虎",
          companyname: "三星电子",
          tel: "17600600600",
          product: "新办",
          status: "等待网填",
          createtime: "2018-08-13",
          updatetime: "2018-08-24"
        },
        {
          todolist: "高新技术企业认证",
          applicant: "王小虎",
          companyname: "三星电子",
          tel: "17600600600",
          product: "新办",
          status: "等待网填",
          createtime: "2018-08-14",
          updatetime: "2018-08-25"
        }
      ],
      substyle: { width: "90%", height: "500px" }
      // tableData: Array(5).fill(item)
    };
  },
  methods: {
    currentRow(row) {
      console.log(row);
      MessageBox.confirm(row, {
        confirmButtonText: "确定",
        type: "success"
      });
    },
    filterProduct(value, row) {
      return row.product === value;
    },
    filterStauts(value, row) {
      return row.status === value;
    }
  },
  computed: {
    ...mapGetters(["name", "roles"])
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.home {
  &-container {
    margin: 10px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
.el-main {
  padding: 0px;
}
.el-header {
  color: #000;
  line-height: 60px;
  border-bottom: 1px solid #d2d2d2;
}

.el-aside {
  color: red;
}
.el-badge {
  text-align: left;
  margin-left: 5px;
}
</style>
