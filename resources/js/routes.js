import VueRouter from 'vue-router';
import Globals from './Globals';

const routes = [
    {
        path: `/`,
        component: require('./views/index.vue').default
    },
    {
        path: `/about`,
        component: require('./views/about.vue').default
    },
    {
        path: `/contact`,
        component: require('./views/contact.vue').default
    },
    {
        path: `/services`,
        component: require('./views/services.vue').default
    },
    {
        path: `/single`,
        component: require('./views/single.vue').default
    },
];

export default new VueRouter
({
    routes
});
