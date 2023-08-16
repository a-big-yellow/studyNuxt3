<template>
  <div>
    123456
    <!-- <Myview /> -->
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/myview">我的</nuxt-link>
    <el-button text @click="dialogTableVisible = true">
      open a Table nested Dialog
    </el-button>
    <client-only>
      <el-dialog v-model="dialogTableVisible" title="Shipping address">
        <el-table :data="gridData">
          <el-table-column property="date" label="Date" width="150" />
          <el-table-column property="name" label="Name" width="200" />
          <el-table-column property="address" label="Address" />
        </el-table>
      </el-dialog>
    </client-only>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
const dialogTableVisible = ref(false)

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>
<style lang="scss" scoped></style>
