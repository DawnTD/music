<template>
  <div class="">
    <el-skeleton :loading="SKloading" animated style="width: 100%; display: flex">
      <template #template>
        <div class="flex justify-between flex-wrap gap-6 mt-4">
          <div v-for="item in 20">
            <el-skeleton-item
              variant="image"
              style="width: 160px; height: 160px"
            />
          </div>
        </div>
      </template>
      <template #default>
        <div>
          <h1 class="text-xl flex items-center mt-6">
            你的歌单雷达
          </h1>
          <div class="list flex justify-between flex-wrap gap-6 mt-4">
            <div v-infinite-scroll="load" :infinite-scroll-disabled="disabled" @click="" v-for="(item, index) in data.list" :key="index" class="w-40">
              <img :src="item.picUrl" alt="" class="w-40 h-40"/>
              <div class="text-sm">{{ item.name }}</div>
            </div>
            <div class="m-auto text-lg text-red-500 mt-4">
              <el-icon v-if="loading" style="font-size:27px" class="is-loading">
                <Loading />
              </el-icon>
              <p v-if="noMore">No more</p>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
</template>
<script setup lang="ts">
import { getRecommendedSongListApi } from "@/api/find/commend";
import { ref, reactive, computed, onMounted } from "vue";
const SKloading = ref(true);
const loading = ref(false)
const count = ref(20)
const noMore = computed(() => data.list.length >= 200)
const disabled = computed(() => loading.value || noMore.value)
const load = () => {
  loading.value = true
  setTimeout(() => {
    console.log('执行加载')
    dataPush();
    loading.value = false
  }, 1000)
}
let limit = 20;
const data = reactive({
  list: [] as any,
});
const getMusicList = async () =>{
  let res = await getRecommendedSongListApi(limit);
  data.list = res.data.result;
  SKloading.value = false;
}
const dataPush = async () =>{
  limit += 5;
  let res = await getRecommendedSongListApi(limit);
  data.list.push(...res.data.result)
}
onMounted(()=>{
  getMusicList()
  limit = 5;
})
</script>
<style scoped lang="scss">
.list{
  height: 800px;
}
</style>
