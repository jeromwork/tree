// if(!window.treeBinds) window.treeBinds = {};

import { createApp } from "vue";
import App from "./App.vue";
import Tree from 'primevue/tree';
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

const app = createApp(App);
app.component('Tree', Tree);
// app.config.globalProperties.treeBinds = reactive(window.treeBinds)
app.use(PrimeVue, { ripple: true });
app.mount('#tree');
