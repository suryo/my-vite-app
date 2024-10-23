<template>
    <div class="container">
      <div class="text-center mt-5">
        <h1 class="display-4">Halaman About</h1>
        <p class="lead">Ini adalah halaman kedua di aplikasi Vite + Vue.</p>
        <router-link to="/" class="btn btn-secondary">Kembali ke Home</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
  }
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  