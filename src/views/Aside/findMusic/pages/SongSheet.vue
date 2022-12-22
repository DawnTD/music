<template>
  <div class=" mt-2">
    <!-- 头部 -->
    <div class="py-2 px-4">
    <div class="bg py-5 px-4 rounded-xl">
      <div class="flex gap-6">
        <div>
          <img
            class="w-52 rounded-lg"
            :src="data.headerData.coverImgUrl"
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
          <div class="text-lg font-medium">{{data.headerData?.name}}</div>
          <div class="text-slate-400">{{data.headerData?.copywriter}}</div>
        </div>
      </div>
    </div>
  </div>
    <!-- list -->
    <ul>
      <li v-for="(item, index) in data.tags"><a @click="clickCategory(item.name)" href="#">{{item.name}}</a></li>
    </ul>
    <WidthMax></WidthMax>
  </div>
</template>
<script setup lang='ts'>
import { getBoutiqueSongListApi, getBoutiqueSongTagListApi } from '@/api/find/commend';
import SongSheetHeader from '@/components/SongSheetHeader.vue';
import WidthMax from '@/components/WidthMax.vue';
import RocketLaunch from '@/components/icon/RocketLaunch.vue'
import type { pageType } from '@/type';
import { ref,reactive, onMounted} from 'vue'
const params = reactive<pageType>({
  cat:'',
})
const data = reactive({
  tags:[] as any,
  headerData:[] as any
})
//获取精品歌单
const getBoutiqueSongList = async()=>{
  let res = await getBoutiqueSongListApi(params);
  console.log('res',res)
  data.headerData = res.data.playlists[0];
}
//精品歌单标签列表
const getBoutiqueSongTagList = async()=>{
  let res = await getBoutiqueSongTagListApi();
  data.tags = res.data.tags;
}

//切换精品歌单分类
const clickCategory = async (tag:string)=>{
  params.cat = tag;
  await getBoutiqueSongList()
  console.log('data.headerData',data.headerData)
}

onMounted(()=>{
  getBoutiqueSongList(),
  getBoutiqueSongTagList()
})
</script>
<style scoped lang='scss'>
.bg{
  background-color: var(--hover-menu-bg);
}
</style>