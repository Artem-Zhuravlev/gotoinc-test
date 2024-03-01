<template>
  <v-container
    class="create"
    fluid
  >
    <v-card
      variant="outlined"
      title="Select request type"
    >
      <v-card-actions>
        <button-base
          replace
          :to="orderFormLink"
        >
          Order
        </button-base>
        <button-base
          replace
          :to="deliverFormLink"
        >
          Deliver
        </button-base>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import { ButtonBase } from '@/shared';

const route = useRoute();

const createFormLink = (name: string) => {
  return {
    name: `create-${name}`,
    params: {
      id: route.params.id,
    },
  };
};

const deliverFormLink = computed(() => createFormLink('deliver'));
const orderFormLink = computed(() => createFormLink('order'));

</script>

<style>
.create {
  max-width: 500px;
}
</style>
