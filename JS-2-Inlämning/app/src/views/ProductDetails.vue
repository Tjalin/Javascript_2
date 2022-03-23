<template>
  <div v-if="product" class="container mt-5">
    <div class="border rounded p-5">
       <img :src="product.image" class="card-img-top" alt="">
     <h1 class="text-center border-bottom mb-4 pb-4">{{ product.name }}</h1>
      <h2 class="text-center">{{ product.price }} kr</h2>
      <p class="card-text">{{ product.desc }}</p>
    </div>
  </div>
  <div v-else>
    <h3>Loading...</h3>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  methods: {
    ...mapActions(['getProduct'])
  },
  computed: {
    ...mapGetters(['product'])
  },
  created() {
    this.getProduct(this.$route.params.id)
  },

}
</script>

<style>

</style>