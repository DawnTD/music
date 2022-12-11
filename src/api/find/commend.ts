import http from "@/http/index";

export const testApi = () => {
    return http.post({
        url: '/mv/first',
    })
}