<template>
  <!-- 动态组件切换 -->
  <div class="component">
    <div class="flex items-center text-center w-1/2">
      <div
        @click="cli(item, index)"
        v-for="(item, index) in tab.items"
        :key="index"
        :class="{ isActive: tab.active === index }"
        class="py-2 px-3"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- 组件切换保留状态 -->
    <keep-alive>
      <component :is="currentTab.tabComp"></component>
    </keep-alive>
  </div>
</template>
<script setup lang="ts">
import Customized from "@/components/discoverMusic/Customized.vue";
import Recommend from "@/components/discoverMusic/Recommend.vue";
import SongSheet from "@/components/discoverMusic/SongSheet.vue";
import RankingList from "@/components/discoverMusic/RankingList.vue";
import Singer from "@/components/discoverMusic/Singer.vue";
import LatestMusic from "@/components/discoverMusic/LatestMusic.vue";
import { ref, reactive, markRaw } from "vue";
const tab = reactive({
  items: [{title: "个性推荐",tabComp: markRaw(Recommend),},{title: "专属订制",tabComp: markRaw(Customized),},{title: "歌单",tabComp: markRaw(SongSheet),},{title: "排行榜",tabComp: markRaw(RankingList),},{title: "歌手",tabComp: markRaw(Singer),},{title: "最新音乐",tabComp: markRaw(LatestMusic),}],
  active: 0,
});
let currentTab = reactive({
  tabComp: tab.items[0].tabComp,
});
const cli = (item: any, index: any) => {
  tab.active = index;
  currentTab.tabComp = item.tabComp;
};
</script>
<style scoped lang="scss">
.isActive{
    @apply border-b-2 border-red-600 text-lg
}
</style>
