<template>
  <modal-window
    v-model:show="dialogVisible"
  >
    <order-form
      v-model="localValue"
      @handle-submit="emit('handleSubmit')"
    />
  </modal-window>
</template>

<script setup lang="ts">
import {
  defineProps,
  defineEmits,
  computed,
  ref,
} from 'vue';
import { RequestSchema } from '@/entities/Requests';
import { ModalWindow } from '@/shared';
import OrderForm from './OrderForm.vue';
import { PARCELS_LIST } from '../model/types/parcels';

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  visible: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: RequestSchema): void,
  (e: 'update:visible', value: boolean): void,
  (e: 'handleSubmit'): void,
}>();

const parcels = ref(PARCELS_LIST);

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value as RequestSchema),
});

const dialogVisible = computed({
  get: () => props.visible,
  set: (value: boolean) => emit('update:visible', value),
});
</script>
