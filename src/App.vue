<template>
  <v-app>
    <v-navigation-drawer temporary v-model="drawer" app class="theapp">
      <div class="text-center my-7">
        <v-avatar color="#137a63">
          <v-icon dark>mdi-account-circle</v-icon>
        </v-avatar>
      </div>
      <v-list dense class="thatcolor">
        <v-list-item link v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-item-action>
            <v-icon color="#137a63">{{item.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#137a63" dark v-if="$route.name!='SignIn' ">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="montserratbold">
        <router-link to="/" tag="span" style="cursor: pointer">GMoves</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-toolbar-items v-for="item in appbarItems" :key="item.title" class="montserratmedium">
        <v-btn icon>
          <v-icon>{{item.icon}}</v-icon>
          <!-- {{item.title}} -->
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-content class="Montserrat">
      <router-view></router-view>
    </v-content>

    <v-footer dark padless v-if="$route.name!='SignIn' ">
      <v-card flat tile class="lighten-1 white--text text-center" color="#5aa17f">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text
          class="white--text pt-0"
        >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>GMoves</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  props: {
    source: String
  },

  // components: {
  //   HelloWorld
  // },
  methods: {
    signIn() {}
  },

  data: () => ({
    drawer: null,
    menuItems: [
      { icon: "mdi-home", title: "Home", link: "/Home" },
      { icon: "people", title: "User Management", link: "/Users" },
      { icon: "monetization_on", title: "Payments Report", link: "/Payments" },
      { icon: "attach_file", title: "Document Uploads", link: "/Documents" },
      { icon: "linear_scale", title: "Jobs and Statuses", link: "/Jobs" },
      { icon: "message", title: "Message", link: "/Message" }
    ],
    appbarItems: [
      { icon: "mdi-account-circle", title: "Profile", link: "/Profile" }
    ],
    icons: [
      "fab fa-facebook",
      "fab fa-twitter",
      "fab fa-google-plus",
      "fab fa-linkedin",
      "fab fa-instagram"
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

.backg {
  background-color: #137a63;
}

.Montserrat {
  font-family: Montserrat;
}
</style>



