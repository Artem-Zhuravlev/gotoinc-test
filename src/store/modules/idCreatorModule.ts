import { MutationTree, ActionTree } from 'vuex';

export interface IdCreatorModuleState {
  idCounter: number;
}

const state = (): IdCreatorModuleState => ({
  idCounter: 0,
});

const mutations: MutationTree<IdCreatorModuleState> = {
  generateId(state: IdCreatorModuleState): void {
    state.idCounter++;
  },
};

const actions: ActionTree<IdCreatorModuleState, any> = {
  generateNextId({ commit }): void {
    commit('generateId');
  },
};

export default {
  state,
  mutations,
  actions,
};
