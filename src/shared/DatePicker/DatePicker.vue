<template>
  <v-menu
    v-model="isMenuOpen"
  >
    <template
      v-slot:activator="{ props }"
    >
      <v-text-field
        :label="label"
        :required="required"
        :rules="rules"
        :model-value="formattedDate"
        v-bind="props"
      />
    </template>
    <v-date-picker
      v-model="selectedDate"
      hide-actions
      color="primary"
    >
      <template v-slot:header />
    </v-date-picker>
  </v-menu>
</template>

<script setup lang='ts'>
import {
  ref,
  computed,
  watch,
  defineProps,
  defineEmits,
} from 'vue';

const props = defineProps([
  'label',
  'modelValue',
  'required',
  'rules',
]);

const emit = defineEmits(['update:modelValue']);

const isMenuOpen = ref(false);
const selectedDate = ref(props.modelValue);

const formattedDate = computed(() => {
  return selectedDate.value
    ? selectedDate.value.toLocaleDateString()
    : '';
});

watch(props.modelValue, (newDate) => {
  selectedDate.value = newDate;
});

watch(selectedDate, (newDate) => {
  emit('update:modelValue', newDate);
});
</script>
