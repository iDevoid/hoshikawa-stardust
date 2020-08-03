import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: colors.red.darken4,
                secondary: colors.lightBlue.accent2,
                button: colors.lightBlue.darken2,
                text: colors.grey.lighten5,
            },
        },
    },
});
