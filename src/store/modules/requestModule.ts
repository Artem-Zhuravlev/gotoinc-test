import { Module, MutationTree } from 'vuex';
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

const getters = {
  getUserRequests() {
    if (!state.deliverRequest) {
      return [];
    }

    return state.orderRequests.filter((item) => item.userId === state.deliverRequest?.userId);
  },
};

export const requestModule: Module<RequestState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
};
