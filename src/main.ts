import { createApp } from 'vue';
import { createVuestic } from 'vuestic-ui';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line newline-per-chained-call
createApp(App).use(store).use(router).use(createVuestic()).mount('#app');
