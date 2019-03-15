
const routes = [
    {
        path: '/',
        component: Index
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/single',
        component: Single
    },
];

const router = new VueRouter
({
    mode: 'history',
    routes
});

const app = new Vue({
    el: '#app',
    router: router,
});    
