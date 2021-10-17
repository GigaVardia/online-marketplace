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

    <v-main>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import SystemBarComponent from '@/components/Home/HeaderComponents/SystemBarComponent'
import AppBarComponent from '@/components/Home/HeaderComponents/AppBarComponent'
import LeftNavigationDrawer from '@/components/Home/NavigationDrawers/LeftNavigationDrawer'
import RightNavigationDrawer from '@/components/Home/NavigationDrawers/RightNavigationDrawer'

export default {
  name: 'HomeView',
  components: {
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
