<template>
  <v-app>
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <connexion></connexion>
    </div>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  // import Home from "@/components/Home/Home";
  import TheFooter from "@/components/TheFooter";
  import Connexion from "@/components/Connexion/connexion";


export default {
  name: 'App',

  components: {
    Connexion,
    TheFooter,
    TheHeader,
    // Home
  },

  data: () => ({
    //
  }),
};
</script>
