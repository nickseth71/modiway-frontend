import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers';
import Pagination from './components/Pagination.vue';

// Create the app instance
const app = createApp(App);

// Register Pagination component globally
app.component('Pagination', Pagination);

// Use router and mount the app
app.use(router).mount('#app');
