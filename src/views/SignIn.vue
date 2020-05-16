<template>
  <v-app>
    <div class="about">
      <v-container class="logincard">
        <v-col>
          <v-row justify="center">
            <v-card app raised class="mt-10" height="500">
              <!-- <v-layout row wrap>
                -- <v-flex md6 xs12 class="d-sm-flex hidden-sm-and-down">
                  <v-img src="@/assets/images/person.jpg"></v-img>
              </v-flex>-->
              <!-- <v-flex md6 xs12 class="leftpane"> -->

              <v-container fluid>
                <div v-if="error">
                  <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
                </div>

                <v-layout row wrap class="pa-5 ma-10">
                  <v-flex md12 xs12 class="mb-10">
                    <span class="display-1 font-weight-bold darkmint">Welcome!</span>
                    <br />
                    <span class="thatcolor">Sign in to continue</span>
                  </v-flex>
                  <v-flex>
                    <v-form ref="form" @submit.prevent="submit">
                      <v-text-field
                        v-model="form.email"
                        :rules="rules.email"
                        label="Email"
                        required
                        color="	#f1b74b"
                      ></v-text-field>
                      <v-text-field
                        v-model="form.password"
                        :rules="rules.password"
                        label="Password"
                        type="password"
                        required
                        color="	#f1b74b"
                      ></v-text-field>
                      <!-- <v-spacer></v-spacer> -->
                      <v-btn
                        class="mr-4 white--text mt-10"
                        color="#f1b74b"
                        :disabled="!formIsValid"
                        type="submit"
                        :loading="loading"
                      >Login</v-btn>
                    </v-form>
                  </v-flex>
                </v-layout>
              </v-container>
              <!-- </v-flex>
              </v-layout>-->
            </v-card>
          </v-row>
        </v-col>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      password: "",
      email: ""
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        password: [val => (val || "").length > 0 || "Password is required"],
        email: [val => (val || "").length > 0 || "Email Address is required"]
      },

      conditions: false,
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.`,
      snackbar: false,
      terms: false,
      defaultForm,
      dialog: false
    };
  },

  computed: {
    formIsValid() {
      return this.form.email && this.form.password;
    },
    user() {
      return this.$store.getters.getUser;
    },
    loading() {
      return this.$store.getters.loading;
    },
    error() {
      return this.$store.getters.error;
    }
  },

  watch: {
    user(value) {
      console.log("A change has occured");
      console.log({ user: value });
      if (value !== null && value !== undefined) {
        console.log("ama is going");
        this.$router.push({ name: "Home" });
      } else {
        console.log("The thing is null");
      }
    }
  },

  methods: {
    // resetForm() {
    //   this.form = Object.assign({}, this.defaultForm);
    //   this.$refs.form.reset();
    // },
    submit() {
      this.snackbar = true;
      //console.log({ company: this.form.company });
      this.$store.dispatch("signIn", {
        email: this.form.email,
        password: this.form.password
      });
      //this.resetForm();
    },
    onDismissed() {
      console.log("Dismmised alert");
      this.$store.dispatch("clearError");
    }
  }
};
</script>

<style scoped>
.about {
  /* The image used */
  background-image: url("../assets/images/person.jpg") !important;

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.leftpane {
  background-color: whitesmoke;
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
