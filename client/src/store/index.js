import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    staffList : [],
    managerList : []
  },
  mutations: {
    setData(state, payload){
      state.staffList = payload.staf
      state.managerList = payload.Manager
    }
  },
  actions: {
    fetchData(context){
      fetch('http://www.json-generator.com/api/json/get/cfsuOQnJaq?indent=2')
      .then(res => res.json())
      .then(response => {
        context.commit('setData', response)
      })
    }
  },
  getters: {
    searchStaff : (state) => (id) => {
      return state.staffList.filter(staff => staff.id_mg.toLowerCase().includes(id.toLowerCase()))
    },
    searchManager: (state) => (payload) => {
      return state.managerList.filter(manager => manager.company.toLowerCase().includes(payload.toLowerCase()))
    }
  },
  modules: {
  }
})
