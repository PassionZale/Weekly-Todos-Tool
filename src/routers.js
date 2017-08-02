export default (router) => router.map({
    '/': {
        name: 'index',
        component: resolve => require(['./components/Index.vue'], resolve),
    },
    '/program-monkey': {
        name: 'program',
        component: resolve => require(['./components/Monkey.vue'], resolve),
    },
    '/design-lion': {
        name: 'designer',
        component: resolve => require(['./components/Lion.vue'], resolve),
    }
});

