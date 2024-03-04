<template>
  <back-button-layout>
    <order-form
      v-model="form"
      @handle-submit="submitOrderForm"
    />

    <pre>
      {{ store.state.requestModule.orderRequests }}
    </pre>
  </back-button-layout>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import clonedeep from 'lodash.clonedeep';
import { OrderForm } from '@/entities/Order';
import { BackButtonLayout } from '@/layouts';

const store = useStore();
const route = useRoute();
const router = useRouter();
const userId = route?.params?.id;

const form = reactive({
  city_from: '',
  city_to: '',
  parcel_type: null,
  dispatch_date: null,
  parcel_description: '',
});

const submitOrderForm = () => {
  const request = clonedeep(form);

  store.commit('requestModule/addOrderRequest', { userId, request });
  // router.push({ name: 'requests' });
};
</script>
