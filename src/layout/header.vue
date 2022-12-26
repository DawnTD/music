<template>
  <div class="header">
    <div class="menu-circle"></div>
    <div class="ml-4 flex gap-4 text-slate-400">
      <div class="cursor-pointer" @click="BP">
        <el-icon><ArrowLeft /></el-icon>
      </div>
      <div class="cursor-pointer" @click="BR">
        <el-icon><ArrowRight /></el-icon>
      </div>
    </div>
    <div class="search-bar">
      <input
        v-model="seatch"
        @keyup.enter="queryBtnH"
        type="text"
        placeholder="搜索"
      />
    </div>
    <div class="header-profile">
      <div class="notification">
        <span class="notification-number">3</span>
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-bell"
        >
          <path
            d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 01-3.46 0"
          />
        </svg>
      </div>
      <svg viewBox="0 0 512 512" fill="currentColor">
        <path
          d="M448.773 235.551A135.893 135.893 0 00451 211c0-74.443-60.557-135-135-135-47.52 0-91.567 25.313-115.766 65.537-32.666-10.59-66.182-6.049-93.794 12.979-27.612 19.013-44.092 49.116-45.425 82.031C24.716 253.788 0 290.497 0 331c0 7.031 1.703 13.887 3.006 20.537l.015.015C12.719 400.492 56.034 436 106 436h300c57.891 0 106-47.109 106-105 0-40.942-25.053-77.798-63.227-95.449z"
        />
      </svg>
      <img
        class="profile-img"
        src="http://5b0988e595225.cdn.sohucs.com/images/20190604/b9fb4da8495747ecb13bc74e1265be54.jpeg"
        alt=""
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
//搜索数据
const seatch = ref('')
const queryBtnH = () => {
  // store.setCount(seatch.value)
  router.push({ path: '/test', query: { keyworks: seatch.value } })
}
const BP = () => {
  router.go(-1)
}
const BR = () => {
  router.go(1)
}
</script>
<style scoped lang="scss"></style>
