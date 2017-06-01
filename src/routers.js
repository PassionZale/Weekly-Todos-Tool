export default (router) => router.map({
    '/': {
        name: 'index',
        component: require('./components/Index.vue'),
    },
});

