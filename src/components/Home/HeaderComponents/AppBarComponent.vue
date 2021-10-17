<template>
  <v-app-bar
    app
    flat
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
            btn-icon="mdi-cart"
            tooltip="Cart"
            open-delay="400"
            bottom
          >
          </regular-tooltip-button>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import RegularTooltipButton from '@/components/Common/RegularTooltipButton'

export default {
  name: 'AppBarComponent',
  components: { RegularTooltipButton }
}
</script>

<style lang="scss" scoped>

</style>
