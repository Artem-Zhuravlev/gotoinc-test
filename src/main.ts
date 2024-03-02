import { createApp } from 'vue';
// Vuetify
import 'vuetify/styles/main.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { mdiArrowLeft, mdiCalendar } from '@mdi/js';
import router from './router';
import store from './store';
import App from './App.vue';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases: {
      ...aliases,
      arrowLeft: mdiArrowLeft,
      calendar: mdiCalendar,
    },
    sets: {
      mdi,
    },
  },
});

// eslint-disable-next-line newline-per-chained-call
createApp(App).use(store).use(router).use(vuetify).mount('#app');
