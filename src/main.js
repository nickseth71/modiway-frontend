import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './routers';
import Pagination from './components/Pagination.vue';
import SearchPopup from './components/SearchPopup.vue';

// Create the app instance
const app = createApp(App);

// Register components globally
app.component('Pagination', Pagination);
app.component('SearchPopup', SearchPopup);


app.use(router).mount('#app');
