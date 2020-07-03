<template>
    <v-container class="mt-10">
        <div class="header">
            <div class="content w-100 d-flex justify-center align-center">
                <h1>Liste des personne disparues</h1>
            </div>
        </div>
        <list :individual="indivs"></list>
    </v-container>
</template>

<script>
    import List from "@/components/listIndividu/list";
    export default {
        name: "listIndividus",
        components: {List},
        data: () => ({
            host: 'http://127.0.0.1:8000/',
            indivs: null
        }),
        created () {
            this.$http.get(this.host + 'individual')
                .then(res => {
                    this.indivs = res.data
                    console.log(this.indivs)
                })
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
</style>