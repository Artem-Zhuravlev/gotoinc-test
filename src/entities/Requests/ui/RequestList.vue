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
      />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">No search results</v-col>
  </v-row>
  <modal-confirm
    v-model="showConfirmModal"
    @delete="handleDelete"
  />
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  PropType,
} from 'vue';
import { useStore } from 'vuex';
import { ModalConfirm } from '@/shared';
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
const selectedItemId = ref('');

const handleConfirmModal = (id: string) => {
  showConfirmModal.value = true;
  selectedItemId.value = id;
};

const handleDelete = () => {
  store.commit('requestModule/removeOrderRequest', selectedItemId.value);
  showConfirmModal.value = false;
};

</script>
