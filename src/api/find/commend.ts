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