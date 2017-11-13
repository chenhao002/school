import './css/reset';
import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import app from './app';
import routes from './routes/routes.config';
import store from './store/store';

var router = new VueRouter({
    routes:routes
})

new Vue({
    el:'.container',
    router:router,
    store:store,
    render:function(createElement){
        return createElement(app);
    }
})

if(module.hot){module.hot.accept()}