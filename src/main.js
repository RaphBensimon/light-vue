import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router.js'
import i18n from './translations/i18n.js'
import './styles/_import.css'
import lightVue from './install'
const app = createApp(App)

app.use(lightVue)
app.use(router)
app.use(i18n)
app.mount('#app')
