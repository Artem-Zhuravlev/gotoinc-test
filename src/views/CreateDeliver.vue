<template>
  <back-button-layout>
    <deliver-form
      v-model="form"
      @handle-submit="submitDeliverForm"
    />
  </back-button-layout>
</template>

<script setup lang="ts">
import { DeliverForm } from '@/entities/Deliver';
import { BackButtonLayout } from '@/layouts';
import clonedeep from 'lodash.clonedeep';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute();
const store = useStore();
const userId = route?.params?.id;

const form = reactive({
  city_from: '',
  city_to: '',
  dispatch_date: null,
});

const submitDeliverForm = () => {
  const request = clonedeep(form);

  store.commit('requestModule/addDeliverRequest', { userId, request });
};
</script>
