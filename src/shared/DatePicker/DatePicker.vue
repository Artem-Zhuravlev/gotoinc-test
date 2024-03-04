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
        readonly
        :model-value="localValue"
        v-bind="props"
      />
    </template>
    <v-date-picker
      v-model="localValue"
      hide-actions
      min
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

const localValue = ref(props.modelValue);

watch(localValue, (newValue) => {
  emit('update:modelValue', newValue);
});

const formattedDate = computed(() => {
  return localValue.value
    ? localValue.value.toLocaleDateString()
    : '';
});

</script>
