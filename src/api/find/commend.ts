import http from "@/http/index";

export const testApi = () => {
    return http.post({
        url: '/banner',
    })
}


// 推荐歌单
export const songSheetApi = (limit:number) => {
    return http.post({
        url: `/personalized?limit=${limit}`,
    })
}
//电台个性推荐~
export const getRadioRecommendApi = () => {
    return http.get({
        url: '/dj/personalize/recommend',
    })
}
//歌单详情
export const getSongDetailApi = (id:number) => {
    return http.get({
        url: `/playlist/detail?id=${id}`,
    })
}
// 推荐歌单
export const getRecommendedSongListApi = (limit:number) => {
    return http.get({
        url: `/personalized?limit=${limit}`,
    })
}
//获取精品歌单
export const getBoutiqueSongListApi = (params?:any) => {
    return http.get({
        url: '/top/playlist/highquality',
        params,
    })
}
//精品歌单标签列表
export const getBoutiqueSongTagListApi = () =>{
    return http.get({
        url:'/playlist/highquality/tags'
    })
}