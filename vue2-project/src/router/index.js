/*
 * @Descripttion: 路由配置文件
 * @version: 1.0.0
 * @Author: amplee li
 * @Date: 2020-03-23 17:59:57
 * @LastEditors: amplee li
 * @LastEditTime: 2020-07-03 18:01:42
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
// import { publicPath } from 'common/env';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'hash',
    base: `/`,
    routes: addRoutes(routes)
});
async function bbb() {
    let result = await import('app1/PageA');
    let outsideRoutes = [
        {path: `/demo`, component: result.default},
    ];
    outsideRoutes.map(route=>{
        router.addRoute(route);
    })
    console.log(router.getRoutes());
    // router.addRoute()
    // console.log(router.getRoutes());
}
bbb();


// path /demo -> /[publicPath]/demo
function addRoutes(routes) {
    // routes = routes.map(route => {
    //     if (/^\//.test(route.path)) {
    //         route.path = `/${publicPath}${route.path}`;
    //     }
    //     if (route.children) {
    //         route.children = addRoutes(route.children);
    //     }
    //     return route;
    // });
    return routes;
}

export default router;
