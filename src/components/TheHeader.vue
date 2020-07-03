<template>
    <div>
        <v-app-bar
                color="primary"
                dense
                dark
                height="60px"
        >
            <v-toolbar-title><img src="~@/assets/logo.svg" alt="logo" id="logo"></v-toolbar-title>

            <div id="menu">
                 <ul class="d-flex flex-row">
                     <li class="d-flex flex-row mr-4 justify-center align-center" v-for="(value, index) in menu" :key="index">
                         <div class="menu__ico mr-1 mb-1">
                             <v-icon>{{ value.ico }}</v-icon>
                         </div>
                         <div class="menu__title">
                             <router-link :to="{name: value.to}">{{ value.title | capitalize}}</router-link>
                         </div>
                     </li>
                 </ul>
            </div>

            <v-spacer></v-spacer>
            <div id="topbuttons">
                <v-btn class="ma-2" outlined color="white" autocapitalize="characters" :to="{name: 'register'}">
                    Inscription
                    <v-icon right>mdi-account-plus</v-icon>
                </v-btn>
                <v-btn class="ma-2 text--primary" tile color="white" :to="{name: 'login'}">
                    Connexion
                    <v-icon right>mdi-login</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
            menu: [

                {
                    ico: 'mdi-home',
                    title: 'Accueil',
                    to: 'home'
                },
                {
                    ico: 'mdi-account-search',
                    title: 'rechercher',
                    to: 'search'
                },
                {
                    ico: 'mdi-alert-box',
                    title: 'Déclarer',
                    to: 'declare'
                },
                {
                    ico: 'mdi-alert-box',
                    title: 'Liste des disparus',
                    to: 'allIndividual'
                },
            ]
        }),
        filters: {
            /***
             * retourne le texte sous sa frome capitalisée
             * @param value {string}
             * @returns {string}
             */
            capitalize(value){
                return value.charAt(0).toLocaleUpperCase() + value.slice(1)
            }
        }
    }
</script>

<style scoped lang="scss">
    a{
        text-decoration: none;
        color: white!important;
    }
    .router-link-exact-active{
        text-shadow: 1px 1px 15px white;
    }
    #logo{
        width: auto;
        height: 31px;
    }
    .menu--text{
        color: white!important;
        text-decoration: none;
    }
    .menu__ico{
        .v-icon{
            font-size: 16px!important;
        }
    }
</style>