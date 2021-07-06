import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientslist: [
      {id: 1, name: 'Pablo Casas'},
      {id: 2, name: 'Jake Lucas'},
      {id: 3, name: 'Alice Lowe'}
    ]
  },
  getters: {
    clientslist: state => {
      return state.clientslist;
    },
  },
    client: state => (id) => {
      return state.clientslist.find(client => client.id === id);
    }
})
