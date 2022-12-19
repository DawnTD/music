<template>
  <el-skeleton :loading="loading" animated style="width:100%;display: flex;">
    <template #template>
      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />
      <div style="width: 700px; margin-left: 20px;display: flex;flex-direction: column;justify-content: space-evenly;">
        <el-skeleton-item variant="h1" v-for="item in 5" :key="item"/>
    </div>
    </template>
    <template #default>
        <slot></slot>
    </template>
  </el-skeleton>
</template>
<script setup lang='ts'>
import { ref,reactive} from 'vue'
defineProps({
  loading:{
    type:Boolean,
    defaull:true
  }
})
</script>
<style scoped lang='scss'>
</style>