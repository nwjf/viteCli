import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import ElementPlus from 'element-plus';
// import 'element-plus/dist/index.css';
import './styles/index';

createApp(App)
  .use(router)
  // .use(ElementPlus, { size: 'small', zIndex: 100 })
  .mount('#app');