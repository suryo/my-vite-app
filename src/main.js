import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Pastikan ini diimpor
import 'bootstrap/dist/css/bootstrap.min.css'; // Tambahkan ini
import 'bootstrap'; // Opsional: jika Anda ingin menggunakan JavaScript Bootstrap


createApp(App)
  .use(router) // Pastikan router digunakan di sini
  .mount('#app');
