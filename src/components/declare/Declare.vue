<template>
    <div class="d-flex flex-column justify-center align-center my-8" id="page">
        <v-container class="w-100 d-flex flex-column justify-center align-center" id="login_content">
            <v-card
                    class="mx-auto px-4"
                    width="1000px"
            >
                <v-row>
                    <v-col cols="6" class="d-flex justify-center flex-column">
                        <h1 class="my__text mb-10">Informations personnelles</h1>

                        <v-text-field
                                label="Nom..."
                                outlined
                        ></v-text-field>
                        <v-text-field
                                label="Prénom..."
                                outlined
                        ></v-text-field>
                        <v-text-field
                                label="Lieu de la disparisition..."
                                outlined
                        ></v-text-field>


                        <v-date-picker v-model="picker" color="primary">Date de naissance</v-date-picker>
                        <v-date-picker v-model="picker" color="primary">Date de disparition</v-date-picker>
                    </v-col>
                    <v-col class="d-flex flex-column align-center">
                        <img class="img__prev" @click="openFile" id="upload" alt="image" src="~@/assets/declare/addPick.png">
                        <input type="file" id="imgFile" v-show="false" @change="setImage">

                        <div class="w-100 mt-3">
                            <v-radio-group v-model="row" row class="w-100">
                                <v-radio label="Sexe masculin" value="radio-1"></v-radio>
                                <v-radio label="Sexe feminin" value="radio-2"></v-radio>
                            </v-radio-group>
                        </div>
                        <v-btn x-large color="primary" class="w-100 mt-10" dark>Déclarer</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: "Declare",
        methods: {
            openFile () {
                document.getElementById('imgFile').click()
            },
            setImage(event) {
                let reader = new FileReader();
                reader.onload = function()
                {
                    let output = document.getElementById('upload');
                    output.src = reader.result;
                }
                reader.readAsDataURL(event.target.files[0]);
            }
        },
        data: () => ({
            picker: new Date().toISOString().substr(0, 10),
        })
    }
</script>

<style lang="scss" scoped>
    #page{
        width: 100%;
        .my__text{
            color: #0f1b4c;
            font-size: 25px;
            text-align: center;
        }
        .img__prev{
            border: 1px dotted red;
            height: auto;
            width: 400px;
            cursor: pointer;
            &:hover{
                border: 1px dotted #0f1b4c;
            }
        }
        .w-100{
            width: 100%!important;
        }
    }

</style>