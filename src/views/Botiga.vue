<template>
  <div class="botiga">
    <h1> Botiga page</h1>
    <b-button class="m-3" @click="component = 'alimentacio'">Alimentacio</b-button>
    <b-button class="m-3" @click="component = 'congelats'">Congelats</b-button>
    <component v-bind:is="component"></component>
  </div>
</template>

<script>
import Alimentacio from './Alimentacio.vue'
import Congelats from './Congelats.vue'


export default {
  components: {
    'alimentacio': Alimentacio,
    'congelats': Congelats,
  },
  data() {
    return{
      component: ''
    }
  }
}
</script>