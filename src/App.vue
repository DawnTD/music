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
              <!-- <MainHeader></MainHeader> -->
              <!-- 中间 -->
              <div class="content-wrapper">
                  <!-- <ContentHeader></ContentHeader> -->
                  <!-- 中间头部结束 -->
                  <div>
                      <router-view />
                  </div>
                  <div class="playMusic"></div>
              </div>
              <!-- 中间结束 -->
          </div>
      </div>
      <div class="overlay-app"></div>
      <div class="flex w-auto border-t justify-center">
          <audio class=" w-full rounded-none" src="https://music.163.com/song/media/outer/url?id=2004349271.mp3" controls loop autoplay></audio>
      </div>
  </div>
</template>
<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Left from '@/layout/left.vue';
import MainHeader from '@/layout/mainHeader.vue';
// import ContentHeader from './ContentHeader.vue'
import Header from '@/layout/header.vue'
</script>
<style scoped lang='scss'>
</style>