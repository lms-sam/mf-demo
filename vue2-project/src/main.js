import Vue from "vue";
import App from "./App.vue";
// modules federation 函数路由
import router from './router';
// modules federation 样式调用
import('app1/indexScss');
// modules federation 函数调用
let testFn = import('app1/testFn');
testFn.then((res)=>{
    console.log(`微前端方式调用函数：【${res.default(1,22)}】`);
});

App.router = router;
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
