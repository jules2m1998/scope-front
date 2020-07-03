<template>
    <v-container id="page" class="my-10">
        <v-card
                class="mx-auto px-4"
                width="1000px"
        >
            <v-row>
                <v-col cols="6" class="d-flex justify-center flex-column">
                    <h1 class="my__text mb-10">{{individual.person.name}}</h1>
                    <img class="img__prev" id="upload" alt="image" :src="'http://localhost:8000' + individual.person.imgs[0].fullPictureLocation">
                </v-col>
                <v-col class="d-flex flex-column justify-center align-center">
                    Date de naissance : {{ individual.person.birth_day }} <br/>
                    Vie à : Douala <br>
                    Disparu le : {{ individual.lose_date }} <br/>
                    Sexe : {{ individual.person.sex | getsex }} <br/>
                    Recherché par : {{individual.user.username}}}
                    <p id="number">Numéro à contacter : {{individual.user.phone}}</p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    import {httpParams} from "@/components/mixins.mixin";

    export default {
        name: "Detail",
        created() {
            this.$http.get(this.host + 'individual/' + this.$route.params.id)
                .then(res => {
                    console.log(res.data)
                    this.individual = res.data
                })
                .catch(err => {
                    console.log(err)
                })
        },
        data: () => ({
            individual: null
        }),
        mixins: [httpParams],
        filters: {
            getsex(value){
                if (value === 'm') {
                    return 'Masculin'
                } else {
                    return 'Feminin'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    #page{
        width: 100%;
        height: 100vh;
        .my__text{
            color: #0f1b4c;
            font-size: 25px;
            text-align: center;
        }
        .img__prev{
            border: 1px dotted #0f1b4c;
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
        #number{
            font-size: 25px;
            font-weight: bold;
            color: red;
            cursor: pointer;
        }
    }
</style>