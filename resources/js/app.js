
import Globals from './Globals';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';

window.VueEventListener = new Vue();
VueEventListener.$on('facebookShare', (options) => {
    facebookShareOverrideOGMeta(options.url, options.title, options.description, options.image);
});
/**
             * FACEBOOK SHARE
             */
            $('body').on('click', '#lg-share-facebook', (e) => {
                e.preventDefault();
                console.log('click share');
                console.log(e.currentTarget);

                let url = e.currentTarget.href;
                let details = $('.lg-sub-html');
                let imageLink = $('#lg-download').prop('href');

                console.log(imageLink);

                VueEventListener.$emit('facebookShare', {
                    url,
                    title: details.find('h4'),
                    description: details.find('p'),
                    image: imageLink
                });

                //this.Globals.customMethods.openNewWindow(e.currentTarget.href, null, 0.5 , 0.3);
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
