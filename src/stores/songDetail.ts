import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getSongDetailApi } from '@/api/find/commend';

export const useSongDetail = defineStore('songDetail', {
    state: () => ({
        songArray: [],
        songDetail: '',
        songList: { boolean: true }, //歌单头部动态,
        isLoading: true
    }),
    actions: {
        async getSongDetail(id: number) {
            this.isLoading = true
            let res = await getSongDetailApi(id);
            this.songArray = res.data.playlist.tracks;
            this.songList = {
                ...res.data.playlist
            }
            this.isLoading = false;
        }
    }
})
