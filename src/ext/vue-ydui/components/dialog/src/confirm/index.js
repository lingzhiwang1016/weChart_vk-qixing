import Vue from 'vue';
import {pageScroll} from '../../../../utils/assist';
import confirm from "./confirm.vue";
const ConfirmConstructor = Vue.extend(confirm);

const instance = new ConfirmConstructor({
    el: document.createElement('div')
});

const hashChange = function () {
    pageScroll.unlock();

    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
};

ConfirmConstructor.prototype.closeConfirm = function (stay, callback) {
    typeof callback === 'function' && callback();

    if (stay)return;

    pageScroll.unlock();

    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);

    window.removeEventListener("hashchange", hashChange);
};

const Confirm = (options = {}) => {
    instance.mes = options.mes || '';
    instance.title = options.title || '提示';
    instance.opts = options.opts;

    window.addEventListener("hashchange", hashChange);

    document.body.appendChild(instance.$el);

    pageScroll.lock();
};

export default Confirm;
