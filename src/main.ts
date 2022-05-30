import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// 引入router
import router from './router/index'
app.use(router);

app.mount('#app')
