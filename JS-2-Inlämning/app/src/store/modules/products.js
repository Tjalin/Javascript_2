import axios from '@/axios'

export default {
  state: {
    products: [],
    searchVal: ''
  },
  getters: {
    products: state => state.products,
    
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SEARCH: (state, val) => {
      state.searchVal = val
    }
  },
  actions: {
    getProducts: async ({commit}) => {
      const res = await axios.get('products')
      commit('SET_PRODUCTS', res.data)
    },
    search: ({commit}, val) => {
      commit('SEARCH', val)
  }
}
}