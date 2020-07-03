import VueRouter from 'vue-router';
import Home from "@/components/Home/Home";
import Search from "@/components/search/Search";
import Declare from "@/components/declare/Declare";
import connexion from "@/components/Connexion/connexion";
import Inscription from "@/components/Inscription/Inscription";
import Detail from "@/components/detail/Detail";
import listIndividus from "@/components/listIndividu/listIndividus";

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/search',
            name: 'search',
            component: Search
        },
        {
            path: '/declare',
            name: 'declare',
            component: Declare
        },
        {
            path: '/login',
            name: 'login',
            component: connexion
        },
        {
            path: '/register',
            name: 'register',
            component: Inscription
        },
        {
            path: '/person/:id',
            name: 'detail',
            component: Detail
        },
        {
            path: '/person',
            name: 'allIndividual',
            component: listIndividus
        },
    ]
});