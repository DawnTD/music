<template>
  <div class="py-2 px-4">
    <div class="bg py-5 px-4 rounded-xl">
      <div class="flex gap-6">
        <div>
          <img
            class="w-52 rounded-lg"
            src="http://p1.music.126.net/0CfAMyTrAMo9g4r3MZjqEg==/109951165078377520.jpg"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2 justify-evenly">
          <div class="flex">
            <div
              class="flex items-center gap-2 py-2 px-3 border border-yellow-400 rounded-full text-sm text-yellow-400"
            >
              <RocketLaunch />
              <a class="" href="#"> 精品歌单 </a>
            </div>
          </div>
          <div class="text-lg font-medium">{{songList?.name}}</div>
          <div class="text-slate-400">{{songList?.copywriter}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import RocketLaunch from '@/components/icon/RocketLaunch.vue'
defineProps({
  songList:{
    type:Array
  } as any
})
</script>
<style scoped lang="scss">
.bg{
  background-color: var(--hover-menu-bg);
}
</style>
