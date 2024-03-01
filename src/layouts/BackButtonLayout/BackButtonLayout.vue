<template>
  <v-container class="container">
    <button-base
      class="mb-4"
      replace
      :to="createPageLink"
      variant="plain"
    >
      <v-icon
        start
        icon="$arrowLeft"
      />
      To create page
    </button-base>
    <slot />
  </v-container>
</template>

<script setup lang="ts">
import { ButtonBase } from '@/shared';
import { computed } from '@vue/reactivity';
import { useRoute } from 'vue-router';

const route = useRoute();

const createPageLink = computed(() => {
  return {
    name: 'create',
    params: {
      id: route.params.id,
    },
  };
});
</script>

<style scoped>

</style>
