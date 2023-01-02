export type pageType = {
    cat?: string,
    before?: string,
    limit?: string,
}
// 歌手分类列表查询参数
export interface SingersParm {
    area: string,
    type: string,
    initial: string,
    limit: string,
    offset: string
}