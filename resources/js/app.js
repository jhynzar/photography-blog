
import Globals from './Globals';
import Vue from 'vue';
import VueRouter from 'vue-router';
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
        Globals,
        componentsToCheckInitialization: {
            headerTemplate: false,
            routerView: false,
            footerTemplate: false
        }
    },

    mounted() {
        
    },

    methods: {
        onComponentInitialized(componentName) {
            this.componentsToCheckInitialization[componentName] = true;

            if(this.isComponentsInitialized === true) {
                //if all are already initialized(true), run initialize method.
                this.Globals.template.initialize();
            }
        },
    },

    computed: {
        isComponentsInitialized(){
            for (let component in this.componentsToCheckInitialization) {
                if(this.componentsToCheckInitialization[component] === false) {
                    return false;
                }
            }

            return true;
        }
    }
});    
