<template>
  <v-app>
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
      <router-view></router-view>
    </div>
    <the-footer></the-footer>
  </v-app>
</template>                   

<script>
  import TheHeader from "@/components/TheHeader";
  import TheFooter from "@/components/TheFooter";


export default {
  name: 'App',

  components: {
    TheFooter,
    TheHeader,
  },

  data: () => ({
    path: 'http://127.0.0.1:8800/individual/'
  })
};
</script>
