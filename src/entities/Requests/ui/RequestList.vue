<template>
  <v-row>
    <v-col
      v-for="(item, index) in items"
      :key="index"
      cols="12"
      md="6"
    >
      <request-card
        :from="item.city_from"
        :to="item.city_from"
        :parcel-type="item.parcel_type"
        :date="item.dispatch_date"
        :description="item.parcel_description"
        :with-controls="false"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  PropType,
  markRaw,
} from 'vue';
import { RequestSchema } from '../model/types/request';
import RequestCard from './RequestCard.vue';

defineProps({
  items: {
    type: Array as PropType<RequestSchema[]>,
    required: true,
    default: () => markRaw([]),
  },
});

const page = ref(1);
</script>

<style scoped>

</style>
