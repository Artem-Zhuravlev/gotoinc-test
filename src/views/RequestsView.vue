<template>
  <v-container class="container"
  >
    <v-radio-group
      v-model="sortSwitcher"
      inline
    >
      <v-radio
        label="DESC"
        value="desc"
      />
      <v-radio
        label="ASC"
        value="asc"
      />
    </v-radio-group>
    <request-list
      :items="sortedItems"
    />
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RequestSchema, RequestList } from '@/entities/Requests';

const sortSwitcher = ref('desc');

const store = useStore();
const { parcels } = store.state.requestModule;

const sortedItemsByDesc = computed<RequestSchema[]>(() => {
  if (!parcels.length) {
    return [];
  }

  return [...parcels].sort((a: RequestSchema, b: RequestSchema) => {
    const dateA = new Date(a.dispatch_date).getTime();
    const dateB = new Date(b.dispatch_date).getTime();

    return dateB - dateA;
  });
});

const sortedItemsByAsc = computed<RequestSchema[]>(() => {
  if (!parcels.length) {
    return [];
  }

  return [...parcels].sort((a: RequestSchema, b: RequestSchema) => {
    const dateA = new Date(a.dispatch_date).getTime();
    const dateB = new Date(b.dispatch_date).getTime();

    return dateA - dateB;
  });
});

const sortedItems = computed<RequestSchema[]>(() => {
  return sortSwitcher.value === 'desc'
    ? sortedItemsByDesc.value
    : sortedItemsByAsc.value;
});
</script>
