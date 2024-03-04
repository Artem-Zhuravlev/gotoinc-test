<template>
  <v-dialog
    v-model="localValue"
    width="auto"
  >
    <v-card
      max-width="400"
      title="Do you want to delete it?"
    >
      <template v-slot:actions>
        <v-col>
          <v-btn
            color="red-darken-2"
            variant="flat"
            @click="emit('delete')"
          >
            Delete
          </v-btn>
          <v-btn
            color="light-blue-lighten-4"
            variant="flat"
            @click="localValue = false"
          >
            Cancel
          </v-btn>
        </v-col>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'delete'): void;
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style scoped>

</style>
