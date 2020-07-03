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
                                label="Nom complet..."
                                outlined
                                v-model="person.name"
                        ></v-text-field>
                        <v-text-field
                                label="Lieu de la disparisition..."
                                outlined
                        ></v-text-field>


                        <v-date-picker v-model="person.lose_date" color="primary">Date de naissance</v-date-picker>
                        <v-date-picker v-model="individual.lose_date" color="primary">Date de disparition</v-date-picker>
                    </v-col>
                    <v-col class="d-flex flex-column align-center">
                        <img class="img__prev" @click="openFile" id="upload" alt="image" src="~@/assets/declare/addPick.png">
                        <input type="file" id="imgFile" v-show="false" @change="setImage">

                        <div class="w-100 mt-3">
                            <v-radio-group v-model="person.sex" row class="w-100">
                                <v-radio label="Sexe masculin" value="m"></v-radio>
                                <v-radio label="Sexe feminin" value="f"></v-radio>
                            </v-radio-group>
                        </div>
                        <v-btn x-large color="primary" class="w-100 mt-10" dark @click="save">Déclarer</v-btn>
                    </v-col>
                 </v-row>
            </v-card>
        </v-container>
    </div>
</template>

<script>
    import {httpParams} from "@/components/mixins.mixin";

    export default {
        name: "Declare",
        mixins: [httpParams],
        methods: {
            openFile () {
                document.getElementById('imgFile').click()
            },
            setImage(event) {
                this.image.fullPictureLocation = event.target.files[0]
                let reader = new FileReader();
                reader.onload = function()
                {
                    let output = document.getElementById('upload');
                    output.src = reader.result;
                }
                reader.readAsDataURL(event.target.files[0]);
            },
            save(){
                console.log({...this.person}, {...this.individual}, {...this.image})
                // Creation de la personne
                this.$http.post(this.host + 'person/create/', this.person)
                    .then(res => {
                        console.log(res)
                        const imageForm = new FormData();
                        // Creation image
                        imageForm.append('fullPictureLocation', this.image.fullPictureLocation)
                        imageForm.append('id_person', res.data.id)
                        this.$http.post(this.host + 'person/image/create/', imageForm)
                            .then(res => {
                                console.log(res)
                            })
                        // Creation individual
                        this.individual.person_id = res.data.id
                        this.$http.post(this.host + 'individual/create/', this.individual)
                            .then(res => {
                                console.log(res)
                            })
                    })
                    .catch(err => {
                        console.log(err)
                    })

            }
        },
        data: () => ({
            picker: new Date().toISOString().substr(0, 10),
            individual: {
                lose_date: new Date().toISOString().substr(0, 10),
            },
            person: {
                name: null,
                sex: null,
                birth_day: new Date().toISOString().substr(0, 10)
            },
            image: {
                fullPictureLocation: null
            }
        }),
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