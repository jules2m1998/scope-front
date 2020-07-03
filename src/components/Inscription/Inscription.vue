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
                                    v-model="user.username"
                                    :error-messages="error.username"
                                    type="email"
                            ></v-text-field>
                            <v-text-field
                                    label="Numéro de téléphone..."
                                    outlined
                                    v-model.number="user.phone"
                                    :error-messages="error.phone"
                            ></v-text-field>
                            <v-text-field
                                    label="Mot de passe..."
                                    outlined
                                    v-model="user.password"
                                    :error-messages="error.password"
                                    type="password"
                            ></v-text-field>
                            <v-text-field
                                    label="Confirmez votre mot de passe..."
                                    outlined
                                    v-model="user.password2"
                                    :error-messages="error.password2"
                                    type="password"
                            ></v-text-field>

                            <div class="d-flex justify-center align-center">
                                <v-btn x-large color="primary" dark @click="save" :loading="load">Inscription</v-btn>
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
        name: "inscription",
        mixins: [httpParams],
        data: () => ({
            user: {
                username: '',
                password: '',
                phone: '',
                password2: ''
            },
            error: {
                username: [],
                password: [],
                phone: [],
                password2:[]
            },
            load: false

        }),
        methods: {
            save() {
                if (!this.load){
                    this.load = true
                    this.error =  {
                        username: [],
                        password: [],
                        phone: [],
                        password2:[]
                    }
                    // console.log(this.user.phone.length !== 9)
                    // console.log(this.user)
                    if (this.user.password2 !== this.user.password || this.user.phone < 100000000){
                        if (this.user.password2 !== this.user.password)
                            this.error.password2 = [...this.error.password2, 'Mots de passe différents !']
                        if (this.user.phone.length !== 9)
                            this.error.phone = [...this.error.phone, 'Le nombre de chiffre du mot de passe doit être égal à 9']

                        this.load = false
                    } else {
                        console.log(this.user)
                        this.$http.post(this.host + 'user/register/', {...this.user})
                            .then(res => {
                                console.log(res)
                                if (res.status === 200) {
                                    this.error = res.data
                                    this.load = false
                                } else if (res.status === 201) {
                                    this.load = false
                                    this.$router.push({name: 'login'})
                                }
                            })
                            .catch(err =>  {
                                console.log(err)
                            })
                    }
                }

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