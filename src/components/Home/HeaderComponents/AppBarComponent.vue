<template>
  <v-app-bar
    app
    flat
    height="auto"
  >
    <v-container class="pa-0">
      <v-row no-gutters class="d-flex align-center">
        <v-col>
          <v-btn
            to="/"
            plain
            depressed
            icon
          >
            <v-icon>
              mdi-shopping
            </v-icon>
          </v-btn>
          <router-link to="/">
            Online shopping
          </router-link>
        </v-col>
        <v-col>
          <v-autocomplete
            :menu-props="{ transition: 'slide-y-transition' }"
            placeholder="Search on ..."
            hide-no-data
            return-object
            hide-details
            outlined
            dense
          >
          </v-autocomplete>
        </v-col>
        <v-col class="d-flex justify-end">
          <regular-tooltip-button
            btn-icon="mdi-account"
            tooltip="Authorization"
            open-delay="400"
            bottom
          >
          </regular-tooltip-button>
          <regular-tooltip-button
            @click="$emit('rightDrawer', $event)"
            btn-icon="mdi-cart"
            tooltip="Cart"
            open-delay="400"
            bottom
          >
          </regular-tooltip-button>
        </v-col>
      </v-row>
      <header-menu-component
        @click="$emit('leftDrawer', $event)"
      >
      </header-menu-component>
    </v-container>
  </v-app-bar>
</template>

<script>
import RegularTooltipButton from '@/components/Common/RegularTooltipButton'
import HeaderMenuComponent from '@/components/Home/HeaderComponents/HeaderMenuComponent'

export default {
  name: 'AppBarComponent',
  components: {
    HeaderMenuComponent,
    RegularTooltipButton
  }
}
</script>

<style lang="scss" scoped>

</style>
