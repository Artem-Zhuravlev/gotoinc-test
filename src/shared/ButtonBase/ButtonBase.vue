<template>
   <v-btn
    class="text-subtitle-1"
    :type="type"
    :size="size"
    :color="color"
    :replace="replace"
    :variant="variant"
    :to="to"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue';
import { RouteLocationRaw } from 'vue-router';

type VariantType = 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain';

defineProps({
  to: [String, Object] as PropType<RouteLocationRaw>,
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String as () => VariantType,
    default: 'flat',
  },
  size: {
    type: String,
    default: 'large',
  },
  color: {
    type: String,
    default: 'indigo-darken-1',
  },
  replace: {
    type: Boolean,
    default: false,
  },
});
</script>
