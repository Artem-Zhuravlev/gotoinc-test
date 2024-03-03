import { Module, MutationTree } from 'vuex';
import { uuid } from 'vue-uuid';
import { RequestSchema } from '@/entities/Requests';

interface UserSchema extends RequestSchema {
  userId: number;
  id: string;
}

interface UserState {
  requestsList: UserSchema[];
}

interface RequestPayload {
  userId: number;
  request: RequestSchema;
}

interface RootState {
  requestModule: UserState;
}

const storedUsers = localStorage.getItem('users');
const state: UserState = {
  requestsList: storedUsers ? JSON.parse(storedUsers) : [],
};

const mutations: MutationTree<UserState> = {
  addRequest(state: UserState, payload: RequestPayload) {
    const { userId, request } = payload;

    state.requestsList.push({ id: uuid.v1(), userId, ...request });
    localStorage.setItem('users', JSON.stringify(state.requestsList));
  },
};

export const requestModule: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
};
