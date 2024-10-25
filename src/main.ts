import { createApp } from 'vue';
import naive from 'naive-ui';
import App from './App.vue';
import router from './router/index.js';
import stores from './stores/index.js';

import './base.css';

createApp(App)
    .use(naive)
    .use(router)
    .use(stores)
    .mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*');
    });
