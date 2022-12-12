<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px" class="mt-4">
      <el-carousel-item v-for="item in bannersData.banners" :key="item">
        <el-image style="width:100%; height: 220px; border-radius: 5px;" :src="item.imageUrl"></el-image>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div>
      <h1 class=" text-xl flex items-center">推荐歌单<el-icon><ArrowRightBold /></el-icon></h1>
      <div class="flex justify-between flex-wrap gap-6 mt-4">
        <div v-for="item in bannersData.result" class="w-40">
          <img :src="item.picUrl" alt="" class=" w-40 h-40">
          <div>{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { songSheetApi, testApi } from "@/api/find/commend";
import { ref, reactive, onMounted } from "vue";
const img = ref('https://p2.music.126.net/kZb9DO4vykqiYEx0HHx86w==/109951163065542645.jpg')
const bannersData = reactive({
  banners: [] as any,
  result: [] as any,
});

const getTest = async () => {
  let res = await testApi();
  bannersData.banners = res.data.banners;
  console.log('bannersData.banners',bannersData.banners)
};

const getSongSheet = async () =>{
  let res = await songSheetApi(10);
  console.log('res',res)
  bannersData.result = res.data.result;
}

onMounted(() => {
  getTest(),
  getSongSheet()
});
</script>
<style scoped lang="scss">
</style>
