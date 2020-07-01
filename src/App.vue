<template>
  <v-app>
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <search></search>
    </div>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";
  import Search from "@/components/search/Search";


export default {
  name: 'App',

  components: {
    Search,
    TheFooter,
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>
