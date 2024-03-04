import { Module, MutationTree, GetterTree } from 'vuex';
import { uuid } from 'vue-uuid';
import { RequestSchema, RequestDeliverSchema } from '@/entities/Requests';

interface OrderRequest extends RequestSchema {
  userId: number;
  id: string;
}

interface DeliverRequest extends RequestDeliverSchema {
  userId: number;
}

interface RequestState {
  orderRequests: OrderRequest[];
  deliverRequest: DeliverRequest | null;
}

interface OrderPayload {
  userId: number;
  request: RequestSchema;
}

interface DeliverPayload {
  userId: number;
  request: RequestDeliverSchema;
}

interface RootState {
  requestModule: RequestState;
}

const storedUsers = localStorage.getItem('users');
const state: RequestState = {
  orderRequests: storedUsers ? JSON.parse(storedUsers) : [],
  deliverRequest: null,
};

const mutations: MutationTree<RequestState> = {
  addOrderRequest(state: RequestState, payload: OrderPayload) {
    const { userId, request } = payload;

    state.orderRequests.push({ id: uuid.v1(), userId, ...request });
    localStorage.setItem('users', JSON.stringify(state.orderRequests));
  },

  addDeliverRequest(state: RequestState, payload: DeliverPayload) {
    const { userId, request } = payload;

    state.deliverRequest = { userId, ...request };
  },
  removeDeliverRequest(state: RequestState) {
    state.deliverRequest = null;
  },
};

const getters: GetterTree<RequestState, RootState> = {
  getUserRequests(state) {
    if (!state.deliverRequest) return [];

    const {
      city_from,
      city_to,
      dispatch_date,
      userId,
    } = state.deliverRequest;

    return state.orderRequests.filter((item) =>
      item.city_from === city_from
      && item.city_to === city_to
      && new Date(item.dispatch_date).getTime() === new Date(dispatch_date).getTime()
      && item.userId === userId);
  },
  getOtherUsersRequests(state) {
    if (!state.deliverRequest) return [];

    const { city_from, city_to, dispatch_date } = state.deliverRequest;

    return state.orderRequests.filter((item) =>
      item.city_from === city_from
      && item.city_to === city_to
      && new Date(item.dispatch_date).getTime() === new Date(dispatch_date).getTime());
  },
};

export const requestModule: Module<RequestState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
};
