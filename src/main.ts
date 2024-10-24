import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import stores from './stores/index.js';

import './base.css';

createApp(App)
    .use(router)
    .use(stores)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*');
    });
