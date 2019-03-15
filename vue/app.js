

const routes = [
    {
        path: `${Globals.leadingURL}/`,
        component: Index
    },
    {
        path: `${Globals.leadingURL}/about`,
        component: About
    },
    {
        path: `${Globals.leadingURL}/contact`,
        component: Contact
    },
    {
        path: `${Globals.leadingURL}/services`,
        component: Services
    },
    {
        path: `${Globals.leadingURL}/single`,
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

    data: {
        Globals
    },

    methods: {
        getRealPath(url) {
            return `${this.Globals.leadingURL}${url}`;
        },
    }
});    
