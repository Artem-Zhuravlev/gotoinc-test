<template>
  <article
    class="request-card"
  >
    <header
      class="request-card__header"
    >
      <div>From: {{ from }}</div>
      <div>To: {{ to }}</div>
      <div v-if="parcelType">Parcel type: {{ parcelType }}</div>
      <div>Dispatch Date: {{ formatDate(date) }}</div>
    </header>
    <div
      class="request-card__description"
      v-if="description"
    >
      {{ description }}
    </div>
    <footer
      v-if="withControls"
      class="request-card__footer"
    >
      <v-btn
        color="light-blue-lighten-4"
        @click="emit('edit', id)"
      >
        Edit
      </v-btn>
      <v-btn
        color="red-darken-2"
        @click="emit('delete', id)"
      >
        Delete
      </v-btn>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { formatDate } from '@/utils/date';

const props = defineProps({
  id: {
    type: String,
    default: '',
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  parcelType: {
    type: String,
    default: '',
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  withControls: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits<{
  (e:'edit', id: string): void,
  (e:'delete', id: string): void
}>();
</script>

<style
  scoped
  lang="scss"
>
.request-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid rgb(var(--v-theme-surface-variant));
  border-radius: 4px;
  padding: 1rem;
  height: 100%;
  &:not(:last-of-type) {
    margin-bottom: 20px;
  }

  &__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }

  &__description {
    padding-top: 10px;
    border-top: 1px solid rgb(var(--v-theme-surface-light));
  }

  &__footer {
    border-top: 1px solid rgb(var(--v-theme-surface-light));
    padding-top: 10px;
    display: flex;
    gap: 10px;
  }
}
</style>
