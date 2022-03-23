<template>
  <div class="container mt-5">
    <form class="border p-5 col-6 mx-auto" @submit.prevent="onSub">
      <h4 class="text-center">Sign In</h4>

      <div class="form-outline mb-4">
        <input type="email" id="email" class="form-control border-bottom" v-model="email">
        <label for="email" class="form-label">Email address</label>
      </div>
      <div class="form-outline mb-5">
        <input type="password" id="password" class="form-control border-bottom" v-model="password">
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
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    onSub() {
      if(this.email !== '' && this.password !== '') {
        let user = {
          email: this.email,
          password: this.password
        }
        let route = this.$route.query.redirect

        this.login({user, route})
        // this.$router.push(this.$route.query.redirect)
      }
    }
  }
}
</script>

<style>

</style>