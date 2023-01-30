import { createApp } from 'vue'
import App from './App.vue'
import Boostrap from 'bootstrap/dist/css/bootstrap.min.css'; 
import router from './router';

const app = createApp(App)

app.use(Boostrap);
app.use(router);
app.mount('#app')

