
<template>
  <v-container>
    <v-layout row wrap>
      <v-flex class="Chart">
        <h1 style="text-align:center;">Payment Chart</h1>
        <LineExample />
      </v-flex>
    </v-layout>
    <v-card>
      <v-card-title>
        Payments
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="payments" :search="search"></v-data-table>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src

import LineExample from "../components/Payment/LineExample";

export default {
  name: "Payments",
  components: {
    LineExample
  },
  data() {
    return {
      headers: [
        { text: "Description", sortable: true, value: "description" },
        {
          text: "Service Type",
          align: "left",
          sortable: true,
          value: "service"
        },
        { text: "From", align: "left", sortable: true, value: "from" },
        { text: "Channel", align: "left", sortable: true, value: "channel" },
        { text: "Amount", sortable: true, value: "amount" }
      ],
      payments: []
    };
  }
};
</script>

<style>
.Chart {
  padding: 20px;
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  margin: 50px 0;
}
</style>