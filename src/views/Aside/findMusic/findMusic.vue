<template>
  <div class="nav flex items-center text-center fixed z-50 w-full ml-0 top-14 px-4">
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
  <div class="px-4 py-5 mt-8">
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"></component>
      </keep-alive>
    </router-view> -->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const tab = reactive({
  items: [
    { title: "个性推荐",path: "/" },
    { title: "专属订制",path: "/Customized" },
    { title: "歌单",path:"/SongSheet"},
    { title: "排行榜" },
    { title: "歌手" },
    { title: "最新音乐" },
  ],
  active: 0,
});

const cli = (item: any, index: any) => {
  tab.active = index;
  router.push(item.path);
};
</script>
<style scoped lang="scss">
.isActive {
  @apply border-b-2 border-red-600 text-lg;
  color: var(--theme-color);
}
.nav {
  border-bottom: 1px solid var(--border-color);
  color: var(--inactive-color);
  background-color: var(--search-bg);
}
</style>
