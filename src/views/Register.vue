<template>
  <v-container fluid>
    <v-layout row wrap class="pa-5 ma-10">
      <v-flex md12 xs12 class="mt-10">
        <span class="display-1 font-weight-bold brown--text">Welcome!</span>
        <br />
        <span class="lightGrey">Sign in to continue</span>
      </v-flex>
      <v-flex>
        <v-text-field v-model="name" :rules="nameRules" label="Name" required color="brown"></v-text-field>
        <v-text-field
          v-model="password"
          :rules="nameRules"
          label="Password"
          type="password"
          required
          color="brown"
        ></v-text-field>
        <v-btn class="mr-4 white--text" @click="submit" color="brown">Login</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Register",
  components: {
    //HelloWorld
  }
};
</script>