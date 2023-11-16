import "./assets/main.css";
import { Quasar } from 'quasar'
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import 'quasar/src/css/index.sass'


import '@quasar/extras/material-icons/material-icons.css'

const app = createApp(App)
app.use(Quasar)

app.use(router)

app.mount('#app');