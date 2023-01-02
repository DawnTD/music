import request from "./request";
const http = new request({
    baseURL: 'http://localhost:3000',
    timeout: 10000
})
export default http