<template>
  <v-app>
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Puzzlepedia</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      
      </v-menu>

    </v-app-bar>

    <v-content>
      <Archive/>
    </v-content>

    <v-footer color="indigo" dark fixed>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} citizen, Shiraoka</div>
    </v-footer>
  </v-app>
</template>

<script>
import Archive from './components/Archive';

export default {
  name: 'App',

  components: {
    Archive,
  },

  data: () => ({
    //
  }),
};
</script>
