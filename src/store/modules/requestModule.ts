import { Module, MutationTree, GetterTree } from 'vuex';
import { uuid } from 'vue-uuid';
import { RequestSchema, RequestDeliverSchema } from '@/entities/Requests';
import requestsDb from '@/data';

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

localStorage.setItem('users', JSON.stringify(requestsDb));
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

  editOrderRequest(state, payload) {
    const { id, request } = payload;

    const index = state.orderRequests.findIndex((item) => item.id === id);
    if (index !== -1) {
      state.orderRequests.splice(index, 1, request);
    }
  },

  removeOrderRequest(state: RequestState, id: string) {
    state.orderRequests = state.orderRequests.filter((item) => item.id !== id);

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

    return state.orderRequests.filter(
      (item) => {
        return (
          item.city_from === city_from
          && item.city_to === city_to
          && new Date(item.dispatch_date).getTime() === new Date(dispatch_date).getTime()
          && item.userId === Number(userId)
        );
      },
    );
  },
  getOtherUsersRequests(state) {
    if (!state.deliverRequest) return [];

    const {
      city_from,
      city_to,
      dispatch_date,
      userId,
    } = state.deliverRequest;

    return state.orderRequests.filter(
      (item) =>
        item.city_from === city_from
        && item.city_to === city_to
        && new Date(item.dispatch_date).getTime() === new Date(dispatch_date).getTime()
        && item.userId !== Number(userId),
    );
  },
};

export const requestModule: Module<RequestState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
};
