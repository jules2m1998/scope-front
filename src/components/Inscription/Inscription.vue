<template>
    <div id="login">
        <v-container class="w-100 d-flex flex-column justify-center align-center" id="login_content">
            <v-card
                    class="mx-auto"
                    width="1000px"
                    height="500px"
            >
                <v-row>
                    <v-col cols="6" class="d-flex justify-center flex-column px-4">
                        <h1 class="connexion__text mb-10">Inscription</h1>
                        <div id="form">
                            <v-text-field
                                    label="Nom d'utilisateur..."
                                    outlined
                            ></v-text-field>
                            <v-text-field
                                    label="Mot de passe..."
                                    outlined
                            ></v-text-field>
                            <v-text-field
                                    label="Confirmez votre mot de passe..."
                                    outlined
                            ></v-text-field>

                            <div class="d-flex justify-center align-center">
                                <v-btn x-large color="primary" dark>Inscription</v-btn>
                            </div>

                        </div>
                    </v-col>
                    <v-col cols="6" class="align-center" id="bgprimary">
                        <img src="~@/assets/connexion/illustration.png" alt="illustration" width="450px" class="mt-1">
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "inscription"
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
            .connexion__text{
                color: #0f1b4c;
                font-size: 25px;
                text-align: center;
            }
        }

        #bgprimary{
            background: #0f1b4c;
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