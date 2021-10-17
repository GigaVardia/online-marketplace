<template>
  <v-navigation-drawer
    v-model="model"
    width="400"
    temporary
    app
  >
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'LeftNavigationDrawer',
  props: ['drawer'],
  computed: {
    model: {
      get () {
        return this.drawer
      },
      set (val) {
        this.$emit('update:drawer', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
