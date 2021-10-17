<template>
  <v-app>
    <system-bar-component>
    </system-bar-component>

    <app-bar-component>
    </app-bar-component>

    <v-main>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>
import SystemBarComponent from '@/components/Home/HeaderComponents/SystemBarComponent'
import AppBarComponent from '@/components/Home/HeaderComponents/AppBarComponent'

export default {
  name: 'HomeView',
  components: {
    AppBarComponent,
    SystemBarComponent
  }
}
</script>
