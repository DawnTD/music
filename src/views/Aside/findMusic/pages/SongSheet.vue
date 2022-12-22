<template>
  <div class="mt-2">
    <!-- 头部 -->
    <div class="bg py-5 px-4 rounded-xl">
      <div class="flex gap-6">
        <div>
          <img
            class="w-52 rounded-lg"
            :src="data.headerData[0]?.coverImgUrl"
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
          <div class="text-lg font-medium">{{ data.headerData[0]?.name }}</div>
          <div class="text-slate-400">{{ data.headerData[0]?.copywriter }}</div>
        </div>
      </div>
    </div>
    <!-- list -->
    <div class="mt-4">
      <el-popover placement="bottom-start" :width="800" trigger="click" :teleported="false">
        <template #reference>
          <el-button style="margin-right: 16px">{{ btnName }}<el-icon><ArrowRightBold /></el-icon></el-button>
        </template>
        <!-- n -->
        <div class="">
          <div class=" py-3 px-4 border-b border-b-gray-500">全部歌单</div>
          <div v-for="(item, index) in tags" :key="index" class="flex mt-4">
            <div class="py-3 px-4 w-1/6">{{item[0]?.label}}</div>
            <div class=" flex items-center justify-between flex-wrap w-5/6">
              <div @click="clickCategory(item.name)" class=" py-3 px-4 w-1/5 text-center" v-for="item in tags[index]">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </el-popover>
    </div>
    <!-- list -->
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
          <div class="list flex justify-between flex-wrap gap-8 mt-4">
            <div @click="songListDetail(item.id)" v-for="item in data.headerData"  class="w-40">
              <img :src="item?.coverImgUrl" alt="" class="w-40 h-40"/>
              <div class="text-sm">{{ item?.name }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
    <WidthMax></WidthMax>
  </div>
</template>
<script setup lang="ts">
import {
  getBoutiqueSongListApi,
  getSongListCassifyApi,
} from "@/api/find/commend";
import SongSheetHeader from "@/components/SongSheetHeader.vue";
import WidthMax from "@/components/WidthMax.vue";
import RocketLaunch from "@/components/icon/RocketLaunch.vue";
import type { pageType } from "@/type";
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useSongDetail } from "@/stores/songDetail";
const store = useSongDetail();
const router = useRouter();
const btnName = ref('全部歌单')
const SKloading = ref(true);
let tags = ref([[],[],[],[],[]]) as any
const params = reactive<pageType>({
  cat: "",
});
const data = reactive({
  headerData: [] as any,
});
//获取精品歌单
const getBoutiqueSongList = async () => {
  SKloading.value = true;
  let res = await getBoutiqueSongListApi(params);
  console.log("res", res);
  data.headerData = res.data.playlists;
  SKloading.value = false;
};
//精品歌单标签列表
const getBoutiqueSongTagList = async () => {
  let res = await getSongListCassifyApi();
  console.log('res',res)
  res.data.sub.forEach((element: any) => {
    if(element.category == 0){
      tags.value[0].push({name:element.name,label:res.data.categories[0]})
    }
    if(element.category == 1){
      tags.value[1].push({name:element.name,label:res.data.categories[1]})
    }
    if(element.category == 2){
      tags.value[2].push({name:element.name,label:res.data.categories[2]})
    }
    if(element.category == 3){
      tags.value[3].push({name:element.name,label:res.data.categories[3]})
    }
    if(element.category == 4){
      tags.value[4].push({name:element.name,label:res.data.categories[4]})
    }
    if(element.category == 5){
      tags.value[5].push({name:element.name,label:res.data.categories[5]})
    }
  });
  console.log('tags',tags)
};

//切换精品歌单分类
const clickCategory = async (tag: string) => {
  console.log('tag',tag)
  params.cat = tag;
  await getBoutiqueSongList();
  console.log("data.headerData", data.headerData);
  btnName.value = tag;
};
// 跳转歌单内容页
const songListDetail = (id:number) =>{
  store.getSongDetail(id);
  router.push("/SongDetail")
}

onMounted(() => {
  getBoutiqueSongList(), getBoutiqueSongTagList();
});
</script>
<style scoped lang="scss">
.bg {
  background-color: var(--hover-menu-bg);
}
</style>
