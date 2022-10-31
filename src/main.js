import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/tailwindcss'

const app = createApp(App);

app.use(plugin, defaultConfig);

app.mount('#app')
