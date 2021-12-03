// import { publicPath } from 'common/env';
import Index from '../pages/index.vue'
import Header from '../components/Header.vue'

// async function bbb() {
//     let result = await import('app1/Header');
//     console.log(result.default);
//     return result.default;
// }
// import {computed, defineAsyncComponent} from "vue";

export default [
    {
        path: '/',
        // component: Index
        redirect: `/home`
    },
    {
        path: '/home',
        component: Index
        // redirect: `/${publicPath}/homeIndex`
    },
    // {
    //     path: `/demo`,
    //     component: Header,
    //     // component: bbb()
    //     // component: computed(() => defineAsyncComponent(() => import('app1/Header')))
    // }
]