<template>
  <v-app>
    <system-bar-component>
    </system-bar-component>

    <app-bar-component
      @leftDrawer="leftDrawer = $event"
      @rightDrawer="rightDrawer = $event"
    >
    </app-bar-component>

    <left-navigation-drawer :drawer.sync="leftDrawer">
    </left-navigation-drawer>

    <right-navigation-drawer :drawer.sync="rightDrawer">
    </right-navigation-drawer>

    <v-main v-if="$route.path !== '/'">
      <router-view>
      </router-view>
    </v-main>

    <v-main v-else>
      <home-slider-component>
      </home-slider-component>
    </v-main>

    <footer-component>
    </footer-component>
  </v-app>
</template>

<script>
import SystemBarComponent from '@/components/Home/HeaderComponents/SystemBarComponent'
import AppBarComponent from '@/components/Home/HeaderComponents/AppBarComponent'
import LeftNavigationDrawer from '@/components/Home/NavigationDrawers/LeftNavigationDrawer'
import RightNavigationDrawer from '@/components/Home/NavigationDrawers/RightNavigationDrawer'
import FooterComponent from '@/components/Home/Footer/FooterComponent'
import HomeSliderComponent from '@/components/Home/HomeSlider/HomeSliderComponent'

export default {
  name: 'HomeView',
  components: {
    HomeSliderComponent,
    FooterComponent,
    RightNavigationDrawer,
    LeftNavigationDrawer,
    AppBarComponent,
    SystemBarComponent
  },
  data: () => ({
    leftDrawer: false,
    rightDrawer: false
  })
}
</script>
