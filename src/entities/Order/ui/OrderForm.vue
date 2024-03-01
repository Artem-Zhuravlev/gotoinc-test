<template>
  <v-form v-model="valid">
    <h3 class="text-h3 mb-6">Order form</h3>
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
      <v-select
        label="Select type of parcel"
        v-model="form.parcel_type"
        :items="parcels"
      />
      </v-col>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="form.dispatch_date"
          type="datetime-local"
          :rules="requiredField"
          label="Date of dispatch"
          required
        />
      </v-col>
      <v-col
        cols="12"
      >
        <v-textarea
          label="Parcel description"
          v-model="form.parcel_description"
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
import { reactive, ref } from 'vue';
import { requiredField } from '@/utils/validators';
import { ButtonBase } from '@/shared';
import { PARCELS_LIST } from '../model/types/parcels';

const valid = ref(false);
const parcels = ref(PARCELS_LIST);

const form = reactive({
  city_from: '',
  city_to: '',
  parcel_type: null,
  dispatch_date: null,
  parcel_description: '',
});

</script>
