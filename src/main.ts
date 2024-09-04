import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './app/App.vue';
import { router } from './app/router';
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(router);

app.mount('#app');
