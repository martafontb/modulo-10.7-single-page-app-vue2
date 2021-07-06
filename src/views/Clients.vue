<template>
  <div class="clients">
        <h1>llista clients</h1>
          <ul v-for="(client, index) in clientslist" :key="index">
            <li>
              <router-link :to="{name: 'Client', params:{ id: client.id, name: client.name}}">
              <b-button class="mr-3">client {{client.id}}</b-button>
              </router-link>
            </li>
          </ul>
               
  </div>
</template>

<script>

export default {
    name:'Clients',
    props: ['name'],
    computed: {
      clientslist() {
        return this.$store.getters.clientslist;
      }
    }
}
</script>