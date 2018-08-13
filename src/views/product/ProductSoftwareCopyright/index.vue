<template>
  <div>
  <el-table
    :data="tableData"
    style="width: 100%" size="mini">
    <el-table-column label="序号" width="60" header-align="center" type="index" align="center"></el-table-column>
    <el-table-column label="编码" width="60" header-align="center" align="center"></el-table-column>
    <el-table-column label="姓名" width="60" prop="name" header-align="center" align="center"></el-table-column>
    <el-table-column label="联系方式" width="100" prop="tel" header-align="center" align="center"></el-table-column>
    <el-table-column label="公司名称"  prop="companyName"></el-table-column>
    <el-table-column label="产品" width="100" prop="product" header-align="center" align="center"></el-table-column>
    <el-table-column label="处理状态" width="100" prop="status" header-align="center" align="center"></el-table-column>
    <el-table-column label="创建日期" width="100" prop="createTime" header-align="center" align="center"></el-table-column>
    <el-table-column label="更新日期" width="100" prop="updateTime" align="center"></el-table-column>
    <el-table-column label="操作" prop="handle" header-align="center" align="center" width="180px">
        <template slot-scope="scope">            
            <el-button type="primary" size="mini" icon="el-icon-edit"  @click="handleEdit(dialogFormVisible,scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="handleDelete(scope.$index,tableData)">删除</el-button>
        </template>
    </el-table-column>
  </el-table>

<el-dialog title="软件著作权编辑" :visible.sync="dialogFormVisible">
<el-form :model="form">
  <el-form-item label="编码" label-width="120px">
      <el-input v-model="form.code" disabled></el-input>
  </el-form-item>
  <el-form-item label="公司名称" label-width="120px" >
      <el-input v-model="form.companyName" disabled></el-input>
  </el-form-item>
  <el-form-item label="姓名" label-width="120px">
      <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="联系方式" label-width="120px">
      <el-input v-model="form.tel" placeholder=""></el-input>
  </el-form-item>
  <el-form-item label="产品" label-width="120px">
      <el-select v-model="form.product" placeholder="">
        <el-option label="新办" value="新办"></el-option>
        <el-option label="补发" value="补发"></el-option>
      </el-select>
  </el-form-item>
  <el-form-item label="处理状态" label-width="120px">
      <el-select v-model="form.status" placeholder="">
        <el-option label="等待网填" value="等待网填"></el-option>
        <el-option label="材料补正中" value="材料补正中"></el-option>
        <el-option label="邮寄证书" value="邮寄证书"></el-option>
        <el-option label="确认证书" value="确认证书"></el-option>
      </el-select>
  </el-form-item>
   <el-form-item label="创建日期" label-width="120px">
      <el-date-picker type="date" v-model="form.createTime" disabled></el-date-picker>
  </el-form-item>
  <el-form-item>
      <el-button type="primary" @click="onSubmit">保存</el-button>
      <el-button type="danger" @click="onCancel">取消</el-button>
  </el-form-item>
</el-form>
</el-dialog>

</div>
</template>
<script>
export default {
  data() {
    return {
      form: "",
      dialogFormVisible: false,
      tableData: [
        {
          code: "10001",
          name: "王小虎",
          tel: "17600600600",
          companyName: "三星电子",
          product: "新办",
          status: "等待网填",
          createTime: "2018-05-02",
          updateTime: "2018-08-13"
        },
        {
          code: "10002",
          name: "王小六",
          tel: "17600600601",
          companyName: "海尔集团",
          product: "补发",
          status: "材料补正",
          createTime: "2018-06-02",
          updateTime: "2018-08-14"
        },
        {
          code: "10003",
          name: "小七",
          tel: "17600600603",
          companyName: "泛微科技",
          product: "新办",
          status: "确认证书",
          createTime: "2018-07-13",
          updateTime: "2018-08-16"
        },
        {
          code: "10004",
          name: "小顺子",
          tel: "17600600604",
          companyName: "吉威科技",
          product: "新办",
          status: "邮寄证书",
          createTime: "2018-08-06",
          updateTime: "2018-08-13"
        }
      ]
    };
  },
  methods: {
    handleEdit(dialogFormVisible, row) {
      console.log(row);
      this.form = row;
      this.dialogFormVisible = true;
      return false;
    },
    handleDelete(index, rows) {
      rows.splice(index, 1);
    },
    onSubmit() {
      this.dialogFormVisible = false;
    },
    onCancel() {}
  }
};
</script>
