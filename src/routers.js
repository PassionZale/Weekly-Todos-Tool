export default (router) => router.map({
    '/': {
        name: 'index',
        component: require('./components/Index.vue'),
    },
    '/program-monkey': {
        name: 'program',
        component: require('./components/Monkey.vue')
    },
    '/design-lion': {
        name: 'designer',
        component: require('./components/Lion.vue')
    }
});

