<template>
  <v-form v-model="valid">
    <h3 class="text-h3 mb-6">Deliver form</h3>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="form.city_from"
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
          v-model="form.city_to"
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
          v-model="form.dispatch_date"
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
import { reactive, ref } from 'vue';
import { requiredField } from '@/utils/validators';
import { ButtonBase, DatePicker } from '@/shared';

const valid = ref(false);

const form = reactive({
  city_from: '',
  city_to: '',
  parcel_type: null,
  dispatch_date: null,
  parcel_description: '',
});

</script>
