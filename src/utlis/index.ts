import {formatTime} from '@/utlis/formatTime.js'

export  function install(app:any){
	app.config.globalProperties.$formatTime = formatTime
}