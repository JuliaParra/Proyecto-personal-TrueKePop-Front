

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import EyeIcon from './components/EyeIcon.vue';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('EyeIcon', EyeIcon);
app.use(createPinia())
app.use(router)

app.mount('#app')