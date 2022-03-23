import axios from '@/axios'

export default {
  state: {
    product: {}
  },
  getters: {
    product: state => state.product
  },
  mutations: {
    SET_PRODUCT: (state, product) => {
      state.product = product
    },
   
  },
  actions: {
    getProduct: async ({commit}, id) => {
      const res = await axios.get('products/' + id)
      commit('SET_PRODUCT', res.data)
    }
  }
}