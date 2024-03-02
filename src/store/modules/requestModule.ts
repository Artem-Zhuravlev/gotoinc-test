import { ActionTree, Module, MutationTree } from 'vuex';

interface Request {
  city_from: string;
  city_to: string;
  parcel_type?: string;
  dispatch_date: Date;
  parcel_description?: string;
}

interface UserSchema {
  id: string;
  requests: Request[];
}

interface UserState {
  users: UserSchema[];
}

const storedUsers = localStorage.getItem('users');

const state: UserState = {
  users: storedUsers ? JSON.parse(storedUsers) : [],
};

interface RequestPayload {
  userId: string;
  request: Request;
}

interface RootState {
  requestModule: UserState;
}

const mutations: MutationTree<UserState> = {
  createUser(state: UserState, userId: string) {
    if (!state.users.some((user) => user.id === userId)) {
      state.users.push({ id: userId, requests: [] });
      localStorage.setItem('users', JSON.stringify(state.users));
    }
  },

  addRequest(state: UserState, payload: RequestPayload) {
    const { userId, request } = payload;
    const user = state.users.find((user) => user.id === userId);

    if (!user) {
      state.users.push({ id: userId, requests: [request] });
    } else {
      user.requests.push(request);
    }
    localStorage.setItem('users', JSON.stringify(state.users));
  },
};

export const requestModule: Module<UserState, RootState> = {
  namespaced: true,
  state,
  mutations,
};
