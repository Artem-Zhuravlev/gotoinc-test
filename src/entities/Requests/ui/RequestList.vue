<template>
  <v-row v-if="items.length">
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
        :with-controls="withControls"
      />
    </v-col>
  </v-row>
  <v-row v-else>
    <v-col cols="12">No search results</v-col>
  </v-row>
</template>

<script setup lang="ts">
import {
  ref,
  defineProps,
  PropType,
} from 'vue';
import { RequestSchema } from '../model/types/request';
import RequestCard from './RequestCard.vue';

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

const page = ref(1);
</script>

<style scoped>

</style>
