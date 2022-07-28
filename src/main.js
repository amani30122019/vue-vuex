import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// fontawesome
import '@fortawesome/fontawesome-free/css/all.min.css'

createApp(App).use(store).use(router).mount('#app')
