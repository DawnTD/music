<template>
  <div>
    <el-table @row-dblclick="clickClick" :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="Date" width="180" />
      <el-table-column prop="id" label="Name" width="180" />
      <el-table-column prop="cp" label="Address" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="default" @click="test(scope.row.id)">播放</el-button>
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
<style scoped lang="scss"></style>
