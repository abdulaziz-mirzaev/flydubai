<template>
  <div class="content">
    <h2>All orders</h2>
    <router-link :to="{ name: 'accounter-edit', params: { id: 279 }  }">edit</router-link>
    <br>
    <router-link :to="{ name: 'accounter-orders-create' }">create</router-link>
  </div>
</template>

<script>
import { getOne } from '../../../services/api.service';

export default {
  name: 'AllOrders',
  async created() {
    await getOne('order', 279);
  },
};
</script>

<style scoped></style>
