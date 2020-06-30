<template>
    <div id="login">
        <v-container class="w-100 d-flex flex-column justify-center align-center" id="login_content">
            <v-card
                    class="mx-auto"
                    width="888px"
                    height="500px"
            >
                <v-row>
                    <v-col cols="6" class="align-center">
                        efuyet
                    </v-col>
                    <v-col cols="6" class="align-center" id="bgprimary">

                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "connexion"
    }
</script>

<style lang="scss" scoped>
    #login{
        background: #f7f8fa;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        #login_content{
            height: 100%;
        }

        #bgprimary{
            background: #1f28cf;
            width: 100%;
            height: 100%;
        }
        .row{
            width: 100%;
            height: 100%;
            margin: 0!important;
        }
    }
</style>