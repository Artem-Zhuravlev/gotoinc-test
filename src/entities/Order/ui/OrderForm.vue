<template>
  <v-form
    v-model="valid"
    ref="formRef"
    @submit.prevent="handleSubmit"
  >
    <h3 class="text-h3 mb-6">Order form</h3>
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
      <v-select
        label="Select type of parcel"
        v-model="localValue.parcel_type"
        :items="parcels"
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
        <v-textarea
          label="Parcel description"
          v-model="localValue.parcel_description"
        />
      </v-col>
      <v-col
        cols="12"
      >
        <button-base
          type="submit"
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
  ref,
  defineProps,
  defineEmits,
} from 'vue';

import { requiredField } from '@/utils/validators';
import { RequestSchema } from '@/entities/Requests';
import { ButtonBase, DatePicker } from '@/shared';
import { PARCELS_LIST } from '../model/types/parcels';

const valid = ref(false);
const parcels = ref(PARCELS_LIST);

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits<{
  (e: 'modelValue', value: RequestSchema): void,
  (e: 'submitOrderForm'): void,
}>();

const localValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('modelValue', value as RequestSchema),
});

const formRef = ref();

const handleSubmit = () => {
  if (!valid.value) { return; }

  emit('submitOrderForm');
  formRef.value.reset();
  formRef.value.resetValidation();
};
</script>
