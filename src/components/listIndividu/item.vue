<template>
    <v-card
            max-width="374"
            class="my-2 mx-1"
    >
        <v-img
                height="250"
                :src="'http://localhost:8000' + indiv.person.imgs[0].fullPictureLocation"
        ></v-img>

        <v-card-title><router-link :to="{name: 'detail', params: {id: indiv.id}}">{{indiv.person.name}}</router-link></v-card-title>

        <v-card-text>
            <div class="my-4 subtitle-1">
                Description
            </div>

            <p>
                Agé de {{ indiv.person.birth_day | year }} ans persdu depuis {{ indiv.lose_date | days}} jours et recherché par <span class="font-weight-bold">Parents</span>
            </p>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        name: "item",
        props: ['indiv'],
        filters: {
            days(value){
                let date = new Date(value)

                let current = new Date()

                let one_day = 1000*60*60*24

                let diff_ms = date.getTime() - current.getTime()

                return Math.round(- diff_ms / one_day)
            },
            year(value){
                return new Date().getFullYear() - new Date(value).getFullYear()
            }
        }
    }
</script>

<style scoped>

</style>