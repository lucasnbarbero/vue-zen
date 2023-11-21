import './assets/css/main.css';

import type { App } from 'vue';

import ZenButton from './components/ZenButton/ZenButton.vue';

export { ZenButton };

export default {
  install: (app: App) => {
    app.component('ZenButton', ZenButton);
  },
};
