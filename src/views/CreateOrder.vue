<template>
  <back-button-layout>
    <order-form
      v-model="form"
      @submitOrderForm="handleSubmit"
    />
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

const form = reactive({
  city_from: '',
  city_to: '',
  parcel_type: null,
  dispatch_date: null,
  parcel_description: '',
});

const handleSubmit = () => {
  const userId = route?.params?.id;
  const request = clonedeep(form);

  store.commit('requestModule/addRequest', { userId, request });
  router.push({ name: 'requests' });
};
</script>
