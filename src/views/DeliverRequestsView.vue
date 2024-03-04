<template>
  <v-container class="container">
    <h3 class="text-h4 mb-4">Personal requests</h3>
    <request-list
      :items="userList"
    />
    <h3 class="text-h4 mb-4 mt-10">Other requests</h3>
    <request-list
      :items="otherUsersList"
    />
  </v-container>
</template>

<script setup lang="ts">
import { useStore } from 'vuex';
import { RequestList } from '@/entities/Requests';

const store = useStore();
const userList = store.getters['requestModule/getUserRequests'];
const otherUsersList = store.getters['requestModule/getOtherUsersRequests'];
</script>
