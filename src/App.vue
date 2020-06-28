<template>
  <v-app>
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <home></home>
    </div>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  import Home from "@/components/Home/Home";
  import TheFooter from "@/components/TheFooter";


export default {
  name: 'App',

  components: {
    TheFooter,
    TheHeader,
    Home
  },

  data: () => ({
    //
  }),
};
</script>
