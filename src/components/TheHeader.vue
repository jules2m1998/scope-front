<template>
    <div>
        <v-app-bar
                color="primary"
                dense
                dark
        >
            <v-toolbar-title><img src="~@/assets/logo.svg" alt="logo" id="logo"></v-toolbar-title>

            <v-spacer></v-spacer>

            <div id="menu"></div>
            <div id="topbuttons">
                <v-btn class="ma-2" outlined color="white">
                    Accueil
                    <v-icon>mdi-cloud-upload</v-icon>
                </v-btn>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="scss">
    #logo{
        width: auto;
        height: 31px;
    }
</style>