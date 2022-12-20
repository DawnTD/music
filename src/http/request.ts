import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
//定义返回值类型
export interface Result<T = any> {
    code: number;
    msg: string;
    data: T;
}

class request {
    //axios实例
    private instance: AxiosInstance;
    //构造函数里面初始化
    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config)
        //定义拦截器
        this.interceptors()
    }
    //拦截器
    private interceptors() {
        //axios发送请求之前的处理
        this.instance.interceptors.request.use((config: AxiosRequestConfig) => {
            // console.log('请求发送之前')
            // console.log(config)
            //在请求头部携带token
            let token = '';
            if (token) {
                //把token放到headers里面
                config.headers = {
                    ...config.headers,
                    token: token
                }
            }
            return config;
        }, (error: any) => {
            error.data = {}
            error.data.msg = '服务器异常，请联系管理员!'
            return error;
        })
        //axios请求返回之后的处理
        //请求返回之后的处理
        this.instance.interceptors.response.use((res: AxiosResponse) => {
            // console.log(res)
            if (res.data.code != 200) {
                return Promise.reject(res.data.msg || '服务器出错')
            } else {
                return res
            }
        }, (error) => {
            console.log('进入错误')
            error.data = {};
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.data.msg = '错误请求';
                        // message.error(error.data.msg)
                        break
                    case 401:
                        error.data.msg = '未授权，请重新登录';
                        // message.error(error.data.msg)
                        break
                    case 403:
                        error.data.msg = '拒绝访问';
                        // message.error(error.data.msg)
                        break
                    case 404:
                        error.data.msg = '请求错误,未找到该资源';
                        // message.error(error.data.msg)
                        break
                    case 405:
                        error.data.msg = '请求方法未允许';
                        // message.error(error.data.msg)
                        break
                    case 408:
                        error.data.msg = '请求超时';
                        // message.error(error.data.msg)
                        break
                    case 500:
                        error.data.msg = '服务器端出错';
                        // message.error(error.data.msg)
                        break
                    case 501:
                        error.data.msg = '网络未实现';
                        // message.error(error.data.msg)
                        break
                    case 502:
                        error.data.msg = '网络错误';
                        // message.error(error.data.msg)
                        break
                    case 503:
                        error.data.msg = '服务不可用';
                        // message.error(error.data.msg)
                        break
                    case 504:
                        error.data.msg = '网络超时';
                        // message.error(error.data.msg)
                        break
                    case 505:
                        error.data.msg = 'http版本不支持该请求';
                        // message.error(error.data.msg)
                        break
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        // message.error(error.data.msg)
                }
            } else {
                error.data.msg = "连接到服务器失败";
                // message.error(error.data.msg)
            }
            return Promise.reject(error)
            // return error
        })
    }

    service<T>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    resolve(res)
                })
                .catch((error) => {
                    reject(error)
                    return error;
                })
        })
    }

    //get请求
    get<T = Result>(config: AxiosRequestConfig): Promise<T> {
        return this.service<T>({ ...config, method: 'GET' })
    }
    //post请求
    post<T = Result>(config: AxiosRequestConfig): Promise<T> {
        return this.service<T>({ ...config, method: 'POST' })
    }
    //delete请求
    delete<T = Result>(config: AxiosRequestConfig): Promise<T> {
        return this.service<T>({ ...config, method: 'DELETE' })
    }
    //put请求
    put<T = Result>(config: AxiosRequestConfig): Promise<T> {
        return this.service<T>({ ...config, method: 'PUT' })
    }
}
export default request