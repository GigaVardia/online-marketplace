<template>
  <v-tooltip
    :bottom="bottom"
    :top="top"
    :right="right"
    :disabled="tooltipDisabled"
    :left="left"
    :open-delay="openDelay"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :color="color"
        :dark="dark"
        :icon="Boolean(btnIcon)"
        :loading="loading"
        :disabled="btnDisabled"
        :to="to"
        @click="$emit('click', $event)"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon v-if="Boolean(btnIcon)">
          {{ btnIcon }}
        </v-icon>
        <template v-else>
          {{ btnText }}
        </template>
      </v-btn>
    </template>
    {{ tooltip }}
  </v-tooltip>
</template>

<script>
export default {
  name: 'RegularTooltipButton',
  props: {
    btnText: {
      type: String,
      default: 'Button'
    },
    btnIcon: {
      type: String,
      default: null
    },
    tooltip: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'BLUE'
    },
    dark: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    btnDisabled: {
      type: Boolean,
      default: false
    },
    tooltipDisabled: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    },
    openDelay: {
      type: [String, Number],
      default: 0
    },
    to: {}
  }
}
</script>

<style scoped>

</style>
