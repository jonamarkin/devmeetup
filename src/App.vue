<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app class="theapp">
      <div class="text-center my-7">
        <v-avatar color="brown">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
      </div>
      <v-list dense class="thatcolor">
        <v-list-item link v-for="item in menuItems" :key="item.title">
          <v-list-item-action>
            <v-icon color="brown">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="brown" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="montserratbold">GMoves</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items
        v-for="item in appbarItems"
        :key="item.title"
        class="hidden-xs-only montserratmedium"
        app
      >
        <v-btn flat light>
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  props: {
    source: String
  },

  components: {
    HelloWorld
  },

  data: () => ({
    drawer: null,
    menuItems: [
      { icon: "mdi-home", title: "Home" },
      { icon: "people", title: "User Management" },
      { icon: "monetization_on", title: "Payments Report" },
      { icon: "attach_file", title: "Document Uploads" },
      { icon: "linear_scale", title: "Jobs and Statuses" },
      { icon: "message", title: "Message" }
    ],
    appbarItems: [
      { icon: "mdi-account-circle", title: "Profile" },
      { icon: "people", title: "Notifications" }
    ]
  })
};
</script>

<style scoped>
@font-face {
  font-family: LatoRegular;
  src: url("assets/fonts/Lato-Regular.ttf");
}

@font-face {
  font-family: MontserratBold;
  src: url("assets/fonts/Montserrat/Montserrat-Bold.ttf");
}

@font-face {
  font-family: Montserrat;
  src: url("assets/fonts/Montserrat/Montserrat-Regular.ttf");
}

@font-face {
  font-family: MontserratMedium;
  src: url("assets/fonts/Montserrat/Montserrat-Medium.ttf");
}

.montserratregular {
  font-family: Montserrat;
}

.montserratbold {
  font-family: MontserratBold;
}

.montserratmedium {
  font-family: MontserratMedium;
}
.thatcolor {
  color: #7c7658;
}

.theapp {
  background-color: #cfcdc0 !important;
}

.brown-text {
  color: brown;
}
</style>
