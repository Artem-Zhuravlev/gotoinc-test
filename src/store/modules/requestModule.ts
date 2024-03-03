import { Module, MutationTree } from 'vuex';
import { uuid } from 'vue-uuid';
import { RequestSchema } from '@/entities/Requests';

interface ParcelSchema extends RequestSchema {
  userId: number;
  id: string;
}

interface UserState {
  parcels: ParcelSchema[];
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
  parcels: storedUsers ? JSON.parse(storedUsers) : [],
};

const mutations: MutationTree<UserState> = {
  addRequest(state: UserState, payload: RequestPayload) {
    const { userId, request } = payload;

    state.parcels.push({ id: uuid.v1(), userId, ...request });
    localStorage.setItem('users', JSON.stringify(state.parcels));
  },
};

export const requestModule: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
};
