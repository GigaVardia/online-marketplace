<template>
  <v-row no-gutters>
    <v-col>
      <v-btn
        @click="$emit('click', $event)"
        depressed
      >
        <v-icon>
          mdi-menu
        </v-icon>
        All categories
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HeaderMenuComponent'
}
</script>

<style lang="scss" scoped>

</style>
