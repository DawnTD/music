export {}
// 解决全局属性设置类型报错
declare module 'vue' {
  interface ComponentCustomProperties {
    $formatTime: any
  }
}