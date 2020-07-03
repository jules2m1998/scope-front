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
                        <h1 class="connexion__text mb-10">Connectez-vous</h1>
                        <div id="form">
                            <v-text-field
                                    label="Nom d'utilisateur..."
                                    outlined
                                    v-model="user.username"
                                    :error-messages="error.password"
                            ></v-text-field>
                            <v-text-field
                                    label="Mot de passe..."
                                    outlined
                                    v-model="user.password"
                                    :error-messages="error.password"
                                    type="password"
                            ></v-text-field>

                            <div class="d-flex justify-center align-center">
                                <v-btn x-large color="primary" dark @click="login">Connexion</v-btn>
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
    import {httpParams} from "@/components/mixins.mixin";

    export default {
        name: "connexion",
        mixins: [httpParams],
        data: () => ({
            user: {
                username: '',
                password: ''
            },
            error: {
                username: [],
                password: []
            },
            load: false
        }),
        methods: {
            login(){
                this.$http.post(this.host + 'user/login/', {...this.user})
                    .then(res => {
                        console.log(res.status)
                    })
                    .catch(() => {
                        this.error = {
                            username: ["User name or password not valid"],
                            password: ["User name or password not valid"]
                        }
                    })
            }
        }
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