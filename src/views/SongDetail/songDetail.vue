<template>
  <div class="px-4 py-5">
    <Skelekon :loading="loading">
      <div class="flex w-full">
      <div class="">
        <el-image class="w-56 h-56 rounded-xl" :src="songList?.coverImgUrl" alt="img"></el-image>
      </div>
      <div class="ml-4">
        <div class="flex h-10 items-center">
          <div class=" py-1 px-2 border border-red-500 rounded-md text-red-500 text-xs">歌单</div>
          <h2 class="ml-4 font-black text-2xl">
            {{songList.name}}
          </h2>
        </div>
        <div class="flex py-2 gap-2">
          <div class="w-6 h-6 rounded-full bg-blue-500">
            <img class="rounded-full" :src="songList.creator.avatarUrl" alt="">
          </div>
          <a href="#">{{songList?.creator.nickname}}</a>
          <span>{{$formatTime(songList.createTime)}}创建</span>
        </div>
        <div>
          <el-button type="danger" size="default" @click="">播放全部</el-button>
          <el-button size="default" @click="">已收藏</el-button>
          <el-button size="default" @click="">分享</el-button>
          <el-button size="default" @click="">下载全部</el-button>
        </div>
        <div class="pt-4">
          <p>标签: <span class="text-blue-400" v-for="(item,index) in songList.tags" :key="index">{{item}} / </span></p>
          <div>
            <span>歌曲 : {{songList?.trackCount}}</span>
            <span class="ml-4">播放 : </span> <span>15亿</span>
          </div>
        </div>
        <div class="w mt-4 h-6 truncate">简介:{{songList.description}}</div>
      </div>
    </div>
    </Skelekon>
    <!-- 导航 -->
    <div class="flex w-full gap-6 mt-2 px-5 py-3 items-center">
      <div @click="t" class="isActive py-1">歌曲列表</div>
      <div class="py-1">评论</div>
      <div class="py-1">收藏者</div>      
    </div>
    <!-- test -->
    <RouterView></RouterView>

  </div>
</template>
<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import {useSongDetail} from "@/stores/songDetail"
import Skelekon from "@/components/Skelekon.vue";
const store = useSongDetail();
const songList = computed(()=>store.songList) as any;
const loading = computed(()=>store.isLoading)

const t = ()=>{
  console.log('loading',loading)
}
</script>
<style scoped lang="scss">
.isActive {
  @apply text-xl border-b-2 border-red-500;
}
.w{
  width: 650px;
}
</style>
