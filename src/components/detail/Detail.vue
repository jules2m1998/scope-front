<template>
    <v-container id="page" class="my-10">
        <v-card
                class="mx-auto px-4"
                width="1000px"
        >
            <v-row>
                <v-col cols="6" class="d-flex justify-center flex-column">
                    <h1 class="my__text mb-10">Meva'a Jules Junior</h1>
                    <img class="img__prev" id="upload" alt="image" src="~@/assets/utils/test.jpg">
                </v-col>
                <v-col class="d-flex flex-column justify-center align-center">
                    Date de naissance : 30/03/1998 <br/>
                    Vie à : Douala <br>
                    Disparu le : 30/03/1998 <br/>
                    Sexe : Masculin <br/>
                    Recherché par : User
                    <p id="number">Numéro à contacter : 6.90.98.10.56</p>
                </v-col>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "Detail"
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