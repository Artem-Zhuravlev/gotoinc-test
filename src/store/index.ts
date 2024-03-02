import { createStore } from 'vuex';
import { requestModule } from './modules/requestModule';

const store = createStore({
  modules: {
    requestModule,
  },
});

export default store;
