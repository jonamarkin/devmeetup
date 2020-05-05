<template>
  <v-app>
    <div class="about">
      <v-container>
        <v-col>
          <v-row align="center" justify="center">
            <v-card app raised class="mt-5">
              <v-layout row wrap>
                <v-flex md6 xs12 class="d-sm-flex hidden-sm-and-down">
                  <v-img src="@/assets/images/antique-photo.jpg" height="500"></v-img>
                </v-flex>
                <v-flex md6 xs12 class="leftpane">
                  <v-container fluid>
                    <v-layout row wrap class="pa-5 ma-10">
                      <v-flex md12 xs12 class="mt-10">
                        <span class="display-1 font-weight-bold darkmint">Welcome!</span>
                        <br />
                        <span class="lightGrey">Sign in to continue</span>
                      </v-flex>
                      <v-flex>
                        <v-text-field
                          v-model="name"
                          :rules="nameRules"
                          label="Name"
                          required
                          color="brown"
                        ></v-text-field>
                        <v-text-field
                          v-model="password"
                          :rules="nameRules"
                          label="Password"
                          type="password"
                          required
                          color="brown"
                        ></v-text-field>
                        <v-btn class="mr-4 white--text" @click="signIn()" color="#f1b74b">Login</v-btn>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-flex>
              </v-layout>
            </v-card>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  methods: {
    signIn() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style scoped>
.about {
  /* The image used */
  background-image: url("../assets/images/antique-photo.jpg") !important;

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.leftpane {
  background-color: #cfcdc0;
  background-size: cover;
}

.lightGrey {
  color: #7c7658;
}

.thatcolor {
  color: #f1b74b;
}

.darkmint {
  color: #137a63;
}
</style>>
