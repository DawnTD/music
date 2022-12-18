import request from "./request";
const http = new request({
    baseURL: 'http://124.223.26.165:3000',
    timeout: 10000
})
export default http