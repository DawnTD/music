import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getSongDetailApi } from '@/api/find/commend';

export const useSongDetail = defineStore('songDetail', {
    state:()=>({
        count:0,
        songArray:[],
        songDetail:''
    }),
    actions:{
        increment(){
            this.count++;
        },
        async getSongDetail(id:number){
            console.log('id',id)
            let res = await getSongDetailApi(id);
            console.log('res',res)
            this.songArray = res.data.playlist.tracks;
        }
    }
})
