<template>
  <div class="home">
    <VaForm ref="formRef" class="flex flex-col items-baseline gap-6">
      <VaInput
        v-model="form.firstName"
        :rules="[(value) => (value && value.length > 0) || 'First name is required']"
        label="firstName"
      />
    </VaForm>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useForm } from 'vuestic-ui';

const form = reactive({
  firstName: '',
});
</script>
