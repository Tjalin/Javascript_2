<template>
  <div class="container mt-5">
    <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
      <h4 class="text-center">Sign Up</h4>

      <div class="row">
        <div class="col">
          <div class="form-outline mb-4">
            <input type="text" id="firstName" class="form-control border-bottom" v-model="user.firstName">
            <label for="firstName" class="form-label">First Name</label>
          </div>
        </div>
        <div class="col">
          <div class="form-outline mb-4">
            <input type="text" id="lastName" class="form-control border-bottom" v-model="user.lastName">
            <label for="lastName" class="form-label">Last Name</label>
          </div>
        </div>
      </div>

      <div class="form-outline mb-4">
        <input type="email" id="email" class="form-control border-bottom" v-model="user.email">
        <label for="email" class="form-label">Email address</label>
      </div>
      <div class="form-outline mb-5">
        <input type="password" id="password" class="form-control border-bottom" v-model="user.password">
        <label for="password" class="form-label">Password</label>
      </div>

      <button class="btn btn-primary btn-block mb-4">Sign in</button>

      <div class="text-center">
        <small>Not a member? <router-link to="/register">Register</router-link></small>
      </div>

    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }

    }
  },
  methods: {
    ...mapActions(['register']),
    onSub() {
      if(this.user.firstName !== '' && this.user.lastName !== '' && this.user.email !== '' && this.user.password !== '') {
        this.register(this.user)
      }
    }
  }
}
</script>

<style>

</style>