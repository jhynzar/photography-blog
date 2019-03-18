import VueRouter from 'vue-router';
import Globals from './Globals';
import Vue from 'vue';
import Axios from 'axios';

window.Globals = Globals;
window.axios = Axios;
Vue.use(VueRouter);

// /**
//  * Components
//  */
import FooterTemplate from './templates/FooterTemplate.vue';
import HeaderTemplate from './templates/HeaderTemplate.vue';
import router from './routes';

new Vue({
    el: '#app',
    router,

    components: {
        'header-template': HeaderTemplate,
        'footer-template': FooterTemplate
    },

    data: {
        Globals
    },
});    
