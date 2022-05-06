import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/index';

import * as ElIcon from '@element-plus/icons-vue';

const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
for (let key in ElIcon) {
  app.component(key, ElIcon[key]);
}
