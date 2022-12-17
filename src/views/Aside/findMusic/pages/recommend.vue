<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px" class="mt-8">
      <el-carousel-item v-for="item in bannersData.banners" :key="item">
        <el-image
          style="width: 100%; height: 220px; border-radius: 5px"
          :src="item.imageUrl"
        ></el-image>
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div>
      <h1 class="text-xl flex items-center">
        推荐歌单<el-icon><ArrowRightBold /></el-icon>
      </h1>
      <div class="flex justify-between flex-wrap gap-6 mt-4">
        <div @click="songListDetail(item.id)" v-for="item in bannersData.result" class="w-40">
          <img :src="item.picUrl" alt="" class="w-40 h-40" />
          <div class=" text-sm">{{ item.name }}</div>
        </div>
      </div>
    </div>
    <!-- 热门播客 -->
    <div class="mt-5">
      <h1 class="text-xl flex items-center mt-7">
        热门播客<el-icon><ArrowRightBold /></el-icon>
      </h1>
      <div class="flex flex-wrap">
        <div v-for="(item,index) in bannersData.RadioRecommend" :key="index" class="hv h-24 w-2/4 flex mt-3">
          <div>
            <img
              class="h-24"
              :src="item.picUrl"
              alt=""
            />
          </div>
          <div class="flex flex-col justify-evenly ml-4">
            <div>{{item.name}}</div>
            <div>{{item.category}}</div>
            <div>{{item.dj.nickname}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { songSheetApi, testApi, getRadioRecommendApi} from "@/api/find/commend";
import { useRouter } from "vue-router";
import { ref, reactive, onMounted } from "vue";
import { useSongDetail } from "@/stores/songDetail";
const store = useSongDetail();
const router = useRouter();
const img = ref(
  "https://p2.music.126.net/kZb9DO4vykqiYEx0HHx86w==/109951163065542645.jpg"
);
const bannersData = reactive({
  banners: [] as any,
  result: [] as any,
  RadioRecommend:[] as any
});

const getTest = async () => {
  let res = await testApi();
  bannersData.banners = res.data.banners;
  console.log("bannersData.banners", bannersData.banners);
};

const getSongSheet = async () => {
  let res = await songSheetApi(10);
  console.log("res", res);
  bannersData.result = res.data.result;
};

const getRadioRecommend = async () =>{
  let res = await getRadioRecommendApi();
  bannersData.RadioRecommend = res.data.data;
  console.log('bannersData.RadioRecommend',bannersData.RadioRecommend)
}
//
const songListDetail = (id:number) =>{
  store.getSongDetail(id);
  router.push("/SongDetail")
}

onMounted(() => {
  getTest(), getSongSheet(),getRadioRecommend()
});
</script>
<style scoped lang="scss">
.hv:hover{
  background-color: var(--hover-menu-bg);
}
</style>
