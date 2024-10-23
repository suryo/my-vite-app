<template>
  <div class="container">
    <div class="text-center mt-5">
      <h1 class="display-4">Selamat Datang di Aplikasi Vite + Vue!</h1>
      <p class="lead">Ini adalah komponen HelloWorld yang sederhana.</p>
      <router-link to="/about" class="btn btn-primary">Ke Halaman About</router-link>
      <router-link to="/profile" class="btn btn-primary">Ke Halaman Profile</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
