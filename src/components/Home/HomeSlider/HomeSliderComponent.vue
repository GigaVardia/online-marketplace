<template>
  <v-carousel
    cycle
    height="500"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet height="100%">
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  name: 'HomeSliderComponent',
  data: () => ({
    slides: [
      'Product1',
      'Product2',
      'Product3',
      'Product4',
      'Product5'
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
