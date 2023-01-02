<template>
  <div>
    <div style="margin-top: 20px">
      <el-radio-group
        @change="ChangeTriggerArea"
        v-model="radio.area"
        size="default"
      >
        <el-radio-button label="-1">全部</el-radio-button>
        <el-radio-button label="7">华语</el-radio-button>
        <el-radio-button label="96">欧美</el-radio-button>
        <el-radio-button label="8">日本</el-radio-button>
        <el-radio-button label="16">韩国</el-radio-button>
        <el-radio-button label="0">其他</el-radio-button>
      </el-radio-group>
    </div>

    <div style="margin-top: 20px">
      <el-radio-group
        @change="ChangeTriggerType"
        v-model="radio.type"
        size="default"
      >
        <el-radio-button label="-1">全部</el-radio-button>
        <el-radio-button label="1">男歌手</el-radio-button>
        <el-radio-button label="2">女歌手</el-radio-button>
        <el-radio-button label="3">乐队组合</el-radio-button>
      </el-radio-group>
    </div>

    <div style="margin-top: 20px">
      <el-radio-group
        @change="ChangeTriggerInitial"
        v-model="radio.initial"
        size="default"
      >
        <el-radio-button label="-1">热门</el-radio-button>
        <el-radio-button label="A" />
        <el-radio-button label="B" />
        <el-radio-button label="C" />
        <el-radio-button label="D" />
        <el-radio-button label="E" />
        <el-radio-button label="F" />
        <el-radio-button label="G" />
        <el-radio-button label="H" />
        <el-radio-button label="I" />
        <el-radio-button label="J" />
        <el-radio-button label="K" />
        <el-radio-button label="L" />
        <el-radio-button label="M" />
        <el-radio-button label="N" />
        <el-radio-button label="O" />
        <el-radio-button label="P" />
        <el-radio-button label="Q" />
        <el-radio-button label="R" />
        <el-radio-button label="S" />
        <el-radio-button label="T" />
        <el-radio-button label="U" />
        <el-radio-button label="V" />
        <el-radio-button label="W" />
        <el-radio-button label="X" />
        <el-radio-button label="Y" />
        <el-radio-button label="Z" />
        <el-radio-button label="0">#</el-radio-button>
      </el-radio-group>
    </div>

    <el-skeleton :loading="loading" animated style="width: 100%; display: flex">
      <template #template>
        <div class="flex justify-between flex-wrap gap-6 mt-8">
          <div v-for="item in 10">
            <el-skeleton-item
              variant="image"
              style="width: 160px; height: 160px"
            />
          </div>
        </div>
      </template>
      <template #default>
        <div>
          <div class="flex justify-between flex-wrap gap-6 mt-8">
            <div @click="" v-for="item in data.list" class="w-40">
              <img :src="item.picUrl" alt="" class="w-40 h-40" />
              <div class="text-sm">{{ item.name }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
  <WidthMax></WidthMax>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import WidthMax from '@/components/WidthMax.vue'
import { getsingersOfClassificationApi } from '@/api/find/commend'
import type { SingersParm } from '@/type'
const loading = ref(true)
const radio = reactive<SingersParm>({
  area: '',
  type: '',
  initial: '',
  limit: '20',
  offset: '20'
})
const data = reactive({
  list: [] as any
})
const getsingersOfClassification = async () => {
  loading.value = true
  let res = await getsingersOfClassificationApi(radio)
  console.log('res', res)
  data.list = res.data.artists
  loading.value = false
}
const ChangeTriggerArea = (label: any) => {
  console.log(label)
  radio.area = label
  getsingersOfClassification()
}
const ChangeTriggerType = (label: any) => {
  console.log(label)
  radio.type = label
  getsingersOfClassification()
}

const ChangeTriggerInitial = (label: any) => {
  console.log(label)
  radio.initial = label
  getsingersOfClassification()
}
onMounted(() => {
  getsingersOfClassification()
})
</script>
<style scoped lang="scss"></style>
