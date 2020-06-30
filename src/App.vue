<template>
  <v-app>
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <declare></declare>
    </div>
    <the-footer></the-footer>
  </v-app>
</template>

<script>
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";
  import Declare from "@/components/declare/Declare";


export default {
  name: 'App',

  components: {
    Declare,
    TheFooter,
    TheHeader,
  },

  data: () => ({
    //
  }),
};
</script>
