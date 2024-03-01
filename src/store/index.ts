import { createStore, Store } from 'vuex';
import idCreatorModule from './modules/idCreatorModule';

const store = createStore({
  modules: {
    idCreatorModule,
  },
});

export default store;
