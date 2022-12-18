<template>
  <div class="video-bg">
      <video width="" height="" autoplay loop muted>
          <source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
  </div>
  <div class="dark-light">
      <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"
          stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
  </div>
  <div class="app">
      <!-- 头部 -->
      <Header></Header>
      <!-- main -->
      <div class="wrapper">
          <Left></Left>
          <div class="main-container">
              <!-- 中间 -->
              <div class="content-wrapper p-0">
                  <!-- 中间头部结束 -->
                  <div class="relative">
                      <router-view />
                  </div>
                  <div class="playMusic"></div>
              </div>
              <!-- 中间结束 -->
          </div>
      </div>
      <div class="overlay-app"></div>
     
  </div>
  <div class="flex w-auto border-t justify-center">
          <audio ref="audio" class=" w-full rounded-none" :src="`https://music.163.com/song/media/outer/url?id=${test.id}.mp3`" controls loop autoplay></audio>
  </div> 
</template>
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import Left from '@/layout/left.vue';
import MainHeader from '@/layout/mainHeader.vue';
import Header from '@/layout/header.vue'
import { useSongDetail } from './stores/songDetail';
import eventbus from "@/utlis/eventbus"
const store = useSongDetail();
let audio = ref()
let test = computed(()=>store.songDetail) as any
const t = () =>{
    if(audio.value.paused){
        audio.value.play()
    }else{
        audio.value.pause()
    }
}
const playMusic = () =>{
    if(audio.value.paused){
        audio.value.play()
    }else{
        audio.value.pause()
    }
}
eventbus.on('playMusic',() => {
    playMusic()
})

</script>
<style scoped lang='scss'>
</style>