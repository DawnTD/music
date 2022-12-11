<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px" class=" mt-4">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 text="2xl" justify="center">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script setup lang="ts">
import { testApi } from "@/api/find/commend";
import { ref, reactive, onMounted } from "vue";

const getTest = async () =>{
  let res = await testApi();
  console.log('res',res)
}

onMounted(()=>{
  getTest()
})
</script>
<style scoped lang="scss">
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
