<template>
    <div class="w-100 d-flex flex-row flex-wrap">
        <item v-for="(value, key) in individual" :key="key" :indiv="value"></item>
    </div>
</template>

<script>
    import Item from "@/components/listIndividu/item";
    export default {
        name: "list",
        components: {Item},
        props: ['individual'],
        mounted (){
        }
    }
</script>

<style scoped>

</style>