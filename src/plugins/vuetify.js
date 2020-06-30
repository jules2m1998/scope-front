import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: "#0f1b4c"
            },
        },
    },
    icons: {
        iconfont: 'mdi'
    }
});
