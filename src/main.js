import { createApp } from 'vue'
import App from './App.vue'

import { applyPolyfills, defineCustomElements } from 'gc-ds-button/loader';
import 'gc-ds-button/dist/gc-ds-button/gc-ds-button.css'

applyPolyfills().then(() => {
    defineCustomElements();
  });

createApp(App).mount('#app')
