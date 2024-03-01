<template>
  <v-form v-model="valid">
    <v-container class="container">
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
          <v-btn
            type="submit"
            size="large"
            color="cyan-lighten-1"
          >Submit</v-btn>
        </v-col>

      </v-row>
    </v-container>
  </v-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { requiredField } from '@/utils/validators';

const valid = ref(false);

const form = reactive({
  city_from: '',
  city_to: '',
  parcel_type: null,
  dispatch_date: null,
  parcel_description: '',
});

</script>
