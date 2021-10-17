import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        WHITE: '#FFFFFF',
        WARM_WHITE: '#F1F1F1',
        GREY: '#A1A1A1',
        LIGHT_GREY: '#E3E3E3',
        SUPER_BLACK: '#000000',
        BLACK: '#252525',
        LIGHT_BLACK: '#515151',
        DEEP_ORANGE: '#EF6631',
        LIGHT_ORANGE: '#F2DBD1',
        SUPER_LIGHT_ORANGE: '#F8F1EE',
        ORANGE: '#FF7F4D',
        GREEN: '#3CD19B',
        PURPLE: '#7D4BDD',
        YELLOW: '#FFB24D',
        RED: '#FF4D4D',
        SKY_BLUE: '#4DCFFF',
        BLUE: '#4D7DFF'
      },
      dark: {
        WHITE: '#000000',
        WARM_WHITE: '#252525',
        GREY: '#A1A1A1',
        LIGHT_GREY: '#515151',
        SUPER_BLACK: '#FFFFFF',
        BLACK: '#E3E3E3',
        LIGHT_BLACK: '#515151',
        DEEP_ORANGE: '#EF6631',
        LIGHT_ORANGE: '#F2DBD1',
        SUPER_LIGHT_ORANGE: '#F8F1EE',
        ORANGE: '#FF7F4D',
        GREEN: '#3CD19B',
        PURPLE: '#7D4BDD',
        YELLOW: '#FFB24D',
        RED: '#FF4D4D',
        SKY_BLUE: '#4DCFFF',
        BLUE: '#4D7DFF'
      }
    }
  }
})
