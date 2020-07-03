<template>
    <div class="w-100 d-flex flex-row flex-wrap">
        <user-item v-for="(value, key) in individual" :key="key" :indiv="value"></user-item>
    </div>
</template>

<script>
    import UserItem from "@/components/UserInterface/UserItem";
    export default {
        name: "UserList",
        components: {UserItem}
    }
</script>

<style scoped>

</style>