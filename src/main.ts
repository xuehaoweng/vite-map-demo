import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map-3x'

const app = createApp(App)
app.use(BaiduMap, {
    ak: "KYMLAtLL3oSzbBOu7mar4q0E3g1MCkim"  //使用自己的ak
})
app.mount('#app')
