<template>
  <v-system-bar
    app
    color="WHITE"
  >
    <v-container class="pa-0">
      <v-row no-gutters>
        <v-col
          cols="auto"
          class="mr-4"
          v-for="item in listItems"
          :key="item.id"
        >
          <router-link :to="item.to">
            {{ item.content }}
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-end">
          <router-link to="login">
            Sell on ...
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-system-bar>
</template>

<script>
export default {
  name: 'SystemBarComponent',
  data: () => ({
    listItems: [
      {
        content: 'About us',
        to: 'about-us',
        id: 'system-bar-about-us'
      },
      {
        content: 'Blog',
        to: 'blog',
        id: 'system-bar-blog'
      },
      {
        content: 'FAQ',
        to: 'frequently-asked-questions',
        id: 'system-bar-frequently-asked-questions'
      },
      {
        content: 'Contact us',
        to: 'contact-us',
        id: 'system-bar-contact-us'
      },
      {
        content: 'Promotions',
        to: 'all-promotions',
        id: 'system-bar-all-promotions'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>

</style>
