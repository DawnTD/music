<template>
  <div class="px-4 py-5">
    <div class="flex w-full">
      <div class="w-56 h-56">
        <img
          src="https://p1.music.126.net/XIY12wUKCu3qoRDdOVIYYQ==/109951168145171187.jpg"
          alt=""
        />
      </div>
      <div class="ml-4">
        <div class="flex h-10 items-center">
          <span>歌单</span>
          <h2 class="ml-4 font-black text-2xl">
            柏松的歌,总令人心动|华语私人雷达
          </h2>
        </div>
        <div class="flex py-2 gap-2">
          <div class="w-6 h-6 rounded-full bg-blue-500"></div>
          <a href="#">云音乐官方歌单</a>
          <span>2019-06-05创建</span>
        </div>
        <div>
          <el-button type="danger" size="default" @click="">播放全部</el-button>
          <el-button size="default" @click="">已收藏</el-button>
          <el-button size="default" @click="">分享</el-button>
          <el-button size="default" @click="">下载全部</el-button>
        </div>
        <div class="pt-4">
          <span>标签 : </span> <span>华语</span>
          <div>
            <span>歌曲 : </span> <span>35</span>
            <span class="ml-4">播放 : </span> <span>15亿</span>
          </div>
        </div>
        <div class="mt-4">简介:</div>
      </div>
    </div>
    <!-- 导航 -->
    <div class="flex w-full gap-6 mt-2 px-5 py-3 items-center">
      <div class="isActive py-1">歌曲列表</div>
      <div class="py-1">评论({{test}})</div>
      <div class="py-1">收藏者</div>      
    </div>
    <!-- test -->
    <RouterView></RouterView>

    <div class="flex flex-wrap">
      <div v-for="item in 50" class="w-5 h-1 bg-blue-500"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import {useSongDetail} from "@/stores/songDetail"
const store = useSongDetail();
let test = computed(()=> store.count)
const click = () =>{
  store.increment()
}
</script>
<style scoped lang="scss">
.isActive {
  @apply text-xl border-b-2 border-red-500;
}
</style>
