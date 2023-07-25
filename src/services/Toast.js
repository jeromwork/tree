// myToastService.ts
import {ToastSeverity} from 'primevue/api';
import {app} from '../main';

const lifeTime = 3000;

export default {
    info(title, body){
        app.config.globalProperties.$toast.add({severity: ToastSeverity.INFO, summary: title, detail: body, life: lifeTime});
    },
    error(title, body){
        app.config.globalProperties.$toast.add({severity: ToastSeverity.ERROR, summary: title, detail: body, life: lifeTime});
    },
    warning(title, body) {
        app.config.globalProperties.$toast.add({severity: ToastSeverity.WARN, summary: title, detail: body, life: lifeTime});
    },
    success(title, body) {
        app.config.globalProperties.$toast.add({severity: ToastSeverity.SUCCESS, summary: title, detail: body, life: lifeTime});
    }
};
