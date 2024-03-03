<template>
  <v-form
    v-model="valid"
    ref="formRef"
    @submit.prevent="handleSubmit"
  >
    <h3 class="text-h3 mb-6">Deliver form</h3>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="localValue.city_from"
          :rules="requiredField"
          label="City from"
          required
        />
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="localValue.city_to"
          :rules="requiredField"
          label="City to"
          required
        />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <date-picker
          v-model="localValue.dispatch_date"
          :rules="requiredField"
          required
          label="Date of dispatch"
        />
      </v-col>
      <v-col
        cols="12"
      >
        <button-base
          type="submit"
          size="large"
        >
          Submit
        </button-base>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup lang="ts">
import {
  computed,
  defineProps,
  defineEmits,
  ref,
} from 'vue';
import { requiredField } from '@/utils/validators';
import { ButtonBase, DatePicker } from '@/shared';
import { RequestDeliverSchema } from '@/entities/Requests';

const valid = ref(false);
const formRef = ref();

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: RequestDeliverSchema): void,
  (e: 'handleSubmit'): void,
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value as RequestDeliverSchema),
});

const handleSubmit = () => {
  if (!valid.value) { return; }

  emit('handleSubmit');
  formRef.value.reset();
  formRef.value.resetValidation();
};
</script>
