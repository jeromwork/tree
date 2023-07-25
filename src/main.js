// if(!window.treeBinds) window.treeBinds = {};

import { createApp } from "vue";
import App from "./App.vue";
import Tree from 'primevue/tree';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

export  const app = createApp(App);
app.component('Tree', Tree);
app.component('InputText', InputText);
app.component('Button', Button);
app.component('Dialog', Dialog);
app.component('Toast', Toast);
// app.config.globalProperties.treeBinds = reactive(window.treeBinds)
app.use(PrimeVue, { ripple: true });
app.use(ToastService);
app.mount('#treeDialog');
