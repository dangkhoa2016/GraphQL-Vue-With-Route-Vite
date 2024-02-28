import { createApp } from 'vue';
import { init as authStoreInit } from '@/stores/authStore.mjs';
import App from '@/components/App.vue';
import router from './router';

import '@/assets/style.css';
const app = createApp(App);

authStoreInit().then(() => {
	app.use(router);

	app.mount('#demo');
});
