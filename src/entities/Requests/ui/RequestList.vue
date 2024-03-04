<template>
  <v-row v-if="items.length">
    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="12"
      md="6"
    >
      <request-card
        :id="item.id"
        :from="item.city_from"
        :to="item.city_to"
        :parcel-type="item.parcel_type"
        :date="item.dispatch_date"
        :description="item.parcel_description"
        :with-controls="withControls"
        @delete="handleConfirmModal"
        @edit="handleEditModal"
      />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">No search results</v-col>
  </v-row>
  <template v-if="withControls">
    <modal-confirm
      v-model="showConfirmModal"
      @delete="handleDelete"
    />
    <order-modal-form
      v-model="selectedRequest"
      v-model:visible="showEditModal"
      @handle-submit="handleEditForm"
    />
</template>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  PropType,
  reactive,
} from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import clonedeep from 'lodash.clonedeep';
import { ModalConfirm } from '@/shared';
import { OrderModalForm } from '@/entities/Order';
import RequestCard from './RequestCard.vue';
import { RequestSchema } from '../model/types/request';

defineProps({
  items: {
    type: Array as PropType<RequestSchema[]>,
    required: true,
    default: () => [],
  },
  withControls: {
    type: Boolean,
    default: false,
  },
});

const store = useStore();
const showConfirmModal = ref(false);
const showEditModal = ref(false);
const selectedItemId = ref('');
const route = useRoute();
const selectedRequest = reactive({
  id: '',
  userId: Number(route.params.id),
  city_from: '',
  city_to: '',
  parcel_type: '',
  dispatch_date: '',
  parcel_description: '',
});

const handleConfirmModal = (id: string) => {
  showConfirmModal.value = true;
  selectedItemId.value = id;
};

const handleEditModal = (id: string) => {
  showEditModal.value = true;
  selectedItemId.value = id;

  const item = store.state.requestModule.orderRequests.find((item: RequestSchema) => {
    return item.id === id;
  });

  selectedRequest.id = selectedItemId.value;
  selectedRequest.city_from = item.city_from;
  selectedRequest.city_to = item.city_to;
  selectedRequest.parcel_type = item.parcel_type;
  selectedRequest.dispatch_date = item.dispatch_date;
  selectedRequest.parcel_description = item.parcel_description;
};

const handleEditForm = () => {
  const id = selectedItemId.value;
  const request = clonedeep(selectedRequest);
  store.commit('requestModule/editOrderRequest', { id, request });
  showEditModal.value = false;
};

const handleDelete = () => {
  store.commit('requestModule/removeOrderRequest', selectedItemId.value);
  showConfirmModal.value = false;
};

</script>
