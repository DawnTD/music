<el-input v-model="kw" placeholder="Please input" style="width: 400px; " @keyup.enter="toResult" />
  <div class="box">
    <el-table :data="musicinfo" style="width: 100%">

      <el-table-column prop="ar" label="歌手">
        <!-- scope名称随便取，代表整个表格数据 -->
        <template v-slot="scope">
          <div class="cell-class">
            <a :href="item.id" v-for="(item, index) in scope.row.ar" :key="index" v-if="scope.row.ar.length >= 2">{{
                item.name + '、'
            }}
            </a>
            <a :href="item1.id" v-for="(item1, index1) in scope.row.ar" :key="index1" v-else>{{ item1.name }} </a>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="歌名" width="180" />
      <el-table-column prop="al.name" label="专辑" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button @click="playmusic(scope.row.id)">播放</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="m_auadio">
    <audio :src="musicurl" controls loop autoplay></audio>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import axios from 'axios'

const kw = ref('')


const musicinfo = ref([])

const toResult = () => {
  // console.log(kw.value);
  axios.get("https://yxcr-music-api.vercel.app/cloudsearch", {
    params: {
      keywords: kw.value
    }
  }).then(res => {
    console.log(res.data);
    musicinfo.value = res.data.result.songs
  })

}

const musicurl = ref('')

const playmusic = (id: number) => {

  axios.get("https://yxcr-music-api.vercel.app/song/url", {
    params: {
      id
    }
  }).then(res => {
    console.log(res.data);
    musicurl.value = res.data.data[0].url
  })


}

</script>
<style>
.box {
  height: 700px;
  overflow: auto;
}

a {
  text-decoration: none;
}

.m_auadio audio {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
  overflow-y: auto;
}
</style>

作者：YXCR
链接：https://juejin.cn/post/7119086719126749192/
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。