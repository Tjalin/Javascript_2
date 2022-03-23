<template>
  <div>
    <h1 class="text-center mt-5">Dator Komponenter</h1>
    <div class="container mt-5">
      <div class="row row-cols-1 row-cols-md-3">
      <router-link :to="'/product/details/' + product._id" v-for="product in products" :key="product.id" >
        <div class="border rounded mb-3 hover-shadow p-3 text-dark">
          
         <img :src="product.image" class="card-img-top" alt="">
          <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h4 class="card-title">{{ product.price }} kr</h4>
     <!--    <h3 class="card-title">{{ product.desc }}</h3> -->
       <p class="card-text">{{ product.short }}</p>
        </div>
        
      </div>
      </router-link>
        
      
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {

  methods: {
    ...mapActions(['getProducts'])
  },
  computed: {
    ...mapGetters(['products'])
  },
  created() {
    this.getProducts()
  },
  
}
</script>

<style>

</style>