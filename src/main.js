import { createApp } from 'vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

import mainpage from './mainpage.vue';
import router from './routers/index';

const app = createApp(mainpage);
app.use(router);
app.mount('#app')