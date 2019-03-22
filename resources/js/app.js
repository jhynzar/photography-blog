
import Globals from './Globals';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';

window.VueEventListener = new Vue();
VueEventListener.$on('facebookShare', (options) => {
    facebookShareOverrideOGMeta(options.url, options.title, options.description, options.image);
});
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
        Globals,
        isInitialized: {
            headerTemplate: false,
            routerView: false,
            footerTemplate: false
        }
    },

    mounted() {
        
    },

    methods: {
        onComponentInitialized(componentName) {
            this.isInitialized[componentName] = true;

            this.checkInitializationProgress();
        },

        checkInitializationProgress() {
            for (let component in this.isInitialized) {
                if(this.isInitialized[component] === false) {
                    return false;
                }
            }

            //if all are already initialized(true), run initialize method.
            this.Globals.template.initialize();
        },
    }
});    
