import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueFeather from 'vue-feather'

import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

const app = createApp(App)

app.use(router).mount('#app')

app.component(VueFeather.name, VueFeather)
app.use(VCalendar, {})