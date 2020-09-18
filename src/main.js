import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './../routers';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
    // linkActiveClass: "active",
    linkExactActiveClass: "link-active-custom",
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')