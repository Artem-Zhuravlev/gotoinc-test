<template>
  <v-container class="container">
    <v-data-iterator :items="items" :page="page">
      <template v-slot:default="{ items }">
        <template
          v-for="(item, i) in items"
          :key="i"
        >
          <request-card
            :from="item.raw.city_from"
            :to="item.raw.city_from"
            :parcel-type="item.raw.parcel_type"
            :date="item.raw.dispatch_date"
            :description="item.raw.parcel_description"
            :with-controls="false"
          />
        </template>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RequestSchema } from '../model/types/request';
import RequestCard from './RequestCard.vue';

const store = useStore();
const { requestsList } = store.state.requestModule;

const items = computed<Request[]>(() => {
  if (!requestsList.length) {
    return [];
  }

  return [...requestsList].sort((a: RequestSchema, b: RequestSchema) => {
    const dateA = new Date(a.dispatch_date).getTime();
    const dateB = new Date(b.dispatch_date).getTime();

    return dateB - dateA;
  });
});

const page = ref(1);
</script>

<style scoped>

</style>
