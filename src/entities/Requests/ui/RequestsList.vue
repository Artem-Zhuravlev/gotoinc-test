<template>
  <v-container class="container">
    <v-data-iterator :items="items" :page="page">
      <template v-slot:default="{ items }">
        <template
          v-for="(item, i) in items"
          :key="i"
        >
          <v-card>
            <template v-slot:text>
              <p class="text-subtitle-1">
                From: {{ item.raw.city_from }}
              </p>
              <p class="text-subtitle-1">
                To: {{ item.raw.city_to }}
              </p>
              <p
                v-if="item.raw.parcel_type"
                class="text-subtitle-1"
              >
                Parcel type: {{ item.raw.parcel_type }}
              </p>
              <p class="text-subtitle-1">
                Dispatch date: {{ item.raw.dispatch_date }}
              </p>
              <p
                v-if="item.raw.parcel_description"
                class="text-subtitle-1">
                Parcel description: {{ item.raw.parcel_description }}
              </p>
            </template>
          </v-card>

          <br>
        </template>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { RequestSchema } from '../model/types/request';

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
