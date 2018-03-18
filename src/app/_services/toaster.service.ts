import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Injectable()
export class ToasterService {

    public options: Object;
    constructor(public toastr: ToastsManager) {
        this.options = {
            animate: 'flyRight',
            positionClass: 'toast-top-right',
            toastLife: 2000,
            newestOnTop: true
        };

    }

    showSuccess(message: string, title: string) {
        this.toastr.success(message, title, this.options);
    }

    showError(message: string, title: string) {
        this.toastr.error(message, title, this.options);
    }

    showWarning(message: string, title: string) {
        this.toastr.warning(message, title, this.options);
    }

    showInfo(message: string, title: string) {
        this.toastr.info(message, title, {
            animate: 'fade',
            positionClass: 'toast-top-center',
            toastLife: 3000,
            newestOnTop: true
        });
    }

    showCustom() {
        this.toastr.custom('<span style="color: red">Message in red.</span>', null, { enableHTML: true });
    }
}
