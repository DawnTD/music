<template>
  <div>
    <h1 class="text-2xl font-black">官方榜</h1>
    <div v-for="item in data.list.slice(0, 4)" class="flex mt-4">
      <img class="w-40 h-40" :src="item.coverImgUrl" alt="" />
      <div class="w-full ml-8 flex flex-col justify-between">
        <div
          v-for="(i, index) in item.tracks"
          class="px-3 py-2 flex justify-between"
        >
          <span
            ><span class="mr-5 text-red-600 font-black">{{ index + 1 }}</span
            >{{ i.first }}</span
          >
          <span>{{ i.second }}</span>
        </div>
      </div>
    </div>
  </div>
  <WidthMax></WidthMax>
</template>
<script setup lang="ts">
import WidthMax from '@/components/WidthMax.vue'
import { ref, reactive, computed, onMounted } from 'vue'
import { getSongListTopApi } from '@/api/find/commend'
const data = reactive({
  list: [] as any
})
const getTopList = async () => {
  let res = await getSongListTopApi()
  console.log('res', res)
  data.list = res.data.list
}
onMounted(() => {
  getTopList()
})
</script>
<style scoped lang="scss"></style>
