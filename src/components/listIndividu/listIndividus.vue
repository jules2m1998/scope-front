<template>
    <v-container class="mt-10">
        <div class="header">
            <div class="content w-100 d-flex justify-center align-center">
                <h1>Liste des personne disparues</h1>
            </div>
        </div>
        <list :individual="indivs" v-if="found"></list>
        <v-card v-else class="d-flex justify-center align-center" id="not-found">
            <p>Aucune correspondance</p>
        </v-card>
    </v-container>
</template>

<script>
    import List from "@/components/listIndividu/list";
    export default {
        name: "listIndividus",
        components: {List},
        data: () => ({
            host: 'http://127.0.0.1:8000/',
            indivs: null,
            found: true
        }),
        created () {
            if (!this.$route.params.name){
                this.$http.get(this.host + 'individual')
                    .then(res => {
                        this.indivs = res.data
                        console.log(this.indivs)
                    })
            } else {
                this.$http.get(this.host + 'individual/name/' + this.$route.params.name)
                    .then(res => {
                        this.indivs = res.data
                        console.log(this.indivs)
                    })
                    .catch(() => {
                        this.found = false
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        width: 100%;
        height: 99px;
        background: url("~@/assets/home/illustration.png") no-repeat center center;
        background-size: cover;
        box-shadow: 0 0 20px 2px #0a0a0a78;
        border-radius: 25px 0 25px 0;

        .content{
            height: 100%;
            background: rgba(15, 27, 76, 0.87);
            border-radius: 25px 0 25px 0;
        }
    }
    .w-100{
        width: 100%;
        color: white;
    }
    #not-found{
        height: 65vh;
    }
</style>