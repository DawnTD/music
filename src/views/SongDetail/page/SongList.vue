<template>
  <div>
    <el-table @row-dblclick="clickClick" :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="Date" width="180" />
      <el-table-column prop="id" label="Name" width="180" />
      <el-table-column prop="cp" label="Address" />
      <el-table-column label="操作">
        <template #default="scope">
          <!-- <el-button type="primary" size="default" @click="test(scope.row.id)">播放</el-button> -->
          <button class=" px-3 py-2 rounded-xl hover:border border-red-500">播放</button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script setup lang="ts">
import { useSongDetail } from "@/stores/songDetail";
import { ref, reactive, computed } from "vue";
import eventbus from "@/utlis/eventbus"
const store = useSongDetail();
const tableData = computed(() => store.songArray);
const test = (id:number) =>{
    console.log('id',id)
}
const clickClick = (row:any) =>{
    console.log(row);
    store.songDetail = row;
    eventbus.emit('playMusic')
}
</script>
<style scoped lang="scss">
::v-deep .el-table tr{
   background: none !important;
    height:20px;
  }
 
 ::v-deep  .el-table--enable-row-transition .el-table__body td, .el-table .cell{
    background-color: none !important;
  }
  ::v-deep .el-table{
    --el-table-bg-color: none !important;
    // 头部背景
    --el-table-header-bg-color: none !important;
    // hover
    --el-table-row-hover-bg-color: var(--hover-menu-bg);
  }
  //修改行内线
::v-deep .el-table td,.building-top .el-table th.is-leaf {
    border-bottom:  1px solid var(--hover-menu-bg);
  }
  // 修改表头 背景颜色 下边框 var(--theme-color)
::v-deep .el-table th {
border-bottom: var(--hover-menu-bg) !important;
}
</style>
