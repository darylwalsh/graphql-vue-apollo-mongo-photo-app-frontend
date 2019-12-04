import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#3B125F',
        secondary: '#8B5FBF',
        accent: '#BF653F',
        error: '#722530',
        warning: '#A37513',
        info: '#396893',
        success: '#4caf50',
      },
      dark: {
        primary: '#ffcc50',
        secondary: '#8B5FBF',
        accent: '#8c9eff',
        error: '#ff8888',
        warning: '#A37513',
        info: '#396893',
        success: '#45a5ae',
      },
    },
  },
})
