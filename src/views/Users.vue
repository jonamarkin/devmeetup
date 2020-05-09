<template>
  <v-container>
    <v-layout row wrap>
      <div class="text-center mx-auto my-5">
        <v-dialog v-model="dialog" width="90%">
          <template v-slot:activator="{ on }">
            <v-btn color="orange lighten-2 ma-auto" dark v-on="on">Add New User</v-btn>
          </template>

          <v-card flat>
            <v-card-title>Register</v-card-title>
            <v-snackbar v-model="snackbar" absolute top right color="success">
              <span>Registration successful!</span>
              <v-icon dark>mdi-checkbox-marked-circle</v-icon>
            </v-snackbar>
            <v-form ref="form" @submit.prevent="submit">
              <v-container fluid>
                <v-row>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.company"
                      :rules="rules.company"
                      color="purple darken-2"
                      label="Company Name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.street"
                      :rules="rules.street"
                      color="blue darken-2"
                      label="Street Address"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.email"
                      :rules="rules.email"
                      color="blue darken-2"
                      label="Email Address"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.phone"
                      :rules="rules.phone"
                      color="blue darken-2"
                      label="Phone Number"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.industry"
                      :rules="rules.industry"
                      color="blue darken-2"
                      label="Industry"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="form.selectedRole"
                      :items="roles"
                      :rules="rules.role"
                      color="pink"
                      label="Role"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-select
                      v-model="form.selectedStatus"
                      :items="statuses"
                      :rules="rules.status"
                      color="pink"
                      label="Status"
                      required
                    ></v-select>
                  </v-col>
                  <v-col cols="12" sm="6">
                    <v-text-field
                      v-model="form.password"
                      :rules="rules.password"
                      color="blue darken-2"
                      label="Password"
                      required
                    ></v-text-field>
                  </v-col>

                  <!-- <v-col cols="12">
                    <v-checkbox v-model="form.terms" color="green">
                      <template v-slot:label>
                        <div @click.stop>
                          Do you accept the
                          <a href="javascript:;" @click.stop="terms = true">terms</a>
                          and
                          <a
                            href="javascript:;"
                            @click.stop="conditions = true"
                          >conditions?</a>
                        </div>
                      </template>
                    </v-checkbox>
                  </v-col>-->
                </v-row>
              </v-container>
              <v-card-actions>
                <v-btn text @click="resetForm">Cancel</v-btn>
                <v-spacer></v-spacer>
                <v-btn :disabled="!formIsValid" text color="primary" type="submit">Register</v-btn>
              </v-card-actions>
            </v-form>
            <v-dialog v-model="terms" width="70%">
              <v-card>
                <v-card-title class="title">Terms</v-card-title>
                <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="purple" @click="terms = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="conditions" width="70%">
              <v-card>
                <v-card-title class="title">Conditions</v-card-title>
                <v-card-text v-for="n in 5" :key="n">{{ content }}</v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="purple" @click="conditions = false">Ok</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-card>
        </v-dialog>
      </div>
    </v-layout>
    <v-layout row wrap>
      <v-card class="mx-auto my-auto" max-width="300">
        <v-img
          class="white--text align-end"
          height="300px"
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>
        <v-card-title>Ernest Mensah Bediako</v-card-title>
        <v-card-subtitle class="pb-0">Admin</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Google Africa</div>

          <div>1 Project</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Edit</v-btn>

          <v-btn color="orange" text>History</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto my-auto" max-width="300">
        <v-img
          class="white--text align-end"
          height="300px"
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>
        <v-card-title>Prince</v-card-title>
        <v-card-subtitle class="pb-0">Admin</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Google Africa</div>

          <div>1 Project</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Edit</v-btn>

          <v-btn color="orange" text>History</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" max-width="300">
        <v-img
          class="white--text align-end"
          height="300px"
          src="https://images.pexels.com/photos/1054251/pexels-photo-1054251.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></v-img>
        <v-card-title>Jonathan Ato Markin</v-card-title>
        <v-card-subtitle class="pb-0">Admin</v-card-subtitle>

        <v-card-text class="text--primary">
          <div>Google Africa</div>

          <div>1 Project</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="orange" text>Edit</v-btn>

          <v-btn color="orange" text>History</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      company: "",
      street: "",
      phone: "",
      selectedStatus: "",
      selectedRole: "",
      password: "",
      industry: "",
      email: ""
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        company: [val => (val || "").length > 0 || "This field is required"],
        street: [val => (val || "").length > 0 || "This field is required"],
        phone: [val => (val || "").length > 0 || "This field is required"],
        selectedStatus: [
          val => (val || "").length > 0 || "Please select a status"
        ],
        selectedRole: [val => (val || "").length > 0 || "Please select a role"],
        password: [
          val =>
            (val || "").length > 7 || "Password must be at least 8 characters"
        ],
        email: [val => (val || "").length > 0 || "Email Address is required"],
        industry: [val => (val || "").length > 0 || "Industry is required"]
      },
      statuses: ["Active", "Inactive"],
      roles: ["Admin", "Client", "Jobs Manager", "Payments Officer"],
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
      return (
        this.form.company &&
        this.form.street &&
        this.form.phone &&
        this.form.selectedRole &&
        this.form.selectedStatus &&
        this.form.email &&
        this.form.industry &&
        this.form.password
      );
    },
    user() {
      return this.$store.getters.getUser;
    }
  },

  watch: {
    user(value) {
      console.log("A change has occured");
      console.log({ user: value });
      if (value !== null && value !== undefined) {
        console.log("ama is going");
        this.$router.push({ name: "Jobs" });
      } else {
        console.log("The thing is null");
      }
    }
  },

  methods: {
    resetForm() {
      this.form = Object.assign({}, this.defaultForm);
      this.$refs.form.reset();
    },
    submit() {
      this.snackbar = true;
      console.log({ company: this.form.company });
      this.$store.dispatch("registerUser", {
        email: this.form.email,
        password: this.form.password
      });
      this.resetForm();
    }
  }
};
</script>

<style>
.img-circle {
  border-radius: 50%;
}
</style>








