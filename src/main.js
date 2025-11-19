import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'materialize-css/dist/js/materialize.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

// Initialize Materialize components after mount
document.addEventListener('DOMContentLoaded', function() {
  // Initialize any Materialize components if needed
  if (window.M) {
    window.M.AutoInit();
  }
});