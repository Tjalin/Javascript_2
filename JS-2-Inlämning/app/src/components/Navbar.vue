<template>
  <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <!-- Container wrapper -->
      <div class="container">
        <!-- Navbar brand -->
        <router-link class="navbar-brand fab fa-shopware" to="/">Shopware.se</router-link>

        <!-- Toggle button -->
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <!-- Left links -->
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/products">Products</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/about">About</router-link>
            </li>
            
            
          </ul>
          <!-- Left links -->

          <!-- Search form -->
          <ul class="navbar-nav">

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-shopping-cart"></i>
              </a>
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdown">
                <ShoppingCart />
              </ul>
            </li>

            <li class="nav-item dropdown" v-if="loggedIn">
              <a
                class="nav-link dropdown"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fas fa-user"></i>
              </a>
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li class="nav-item">
                  <router-link class="nav-link text-dark" aria-current="page" to="/user">Settings</router-link>
                </li>
              </ul>
            </li>

            <li v-if="!loggedIn">
              <router-link class="nav-link" to="/Login">Login</router-link>
            </li>

          </ul>
        </div>
        <!-- Collapsible wrapper -->
      </div>
      <!-- Container wrapper -->
    </nav>
    <!-- Navbar -->
</template>

<script>
import { mapGetters } from 'vuex'
import ShoppingCart from './shoppingCart/ShoppingCart'
export default {
  components: {
    ShoppingCart
  },
  computed: {
    ...mapGetters(['loggedIn'])
  }
  // data() {
  //   return {
  //     loggedIn: false
  //   }
  // }
}
</script>

<style scoped>
  .shopping-cart {
    min-width: 450px;
  }
</style>