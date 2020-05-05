<template>
  <v-data-table
    :headers="headers"
    :items="Jobs"
    sort-by="calories"
    class="elevation-1"
    @click:row="handleClick"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title class="headline darkmint">Jobs</v-toolbar-title>
        <v-divider class="mx-4"></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="#f1b74b" dark class="mb-2 lighten-2" v-on="on">New Job</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Job Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.type" label="Job Type"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.clientname" label="Client Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.status" label="Job Status"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)" color="#f1b74b">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)" color="#f1b74b">mdi-delete</v-icon>
    </template>
    <!-- <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Reset</v-btn>
    </template>-->
  </v-data-table>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    clickdialog: false,
    headers: [
      {
        text: "Job Name",
        align: "start",
        sortable: false,
        value: "name"
      },
      { text: "Job Type", value: "type" },
      { text: "Client Name", value: "clientname" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions", sortable: false }
    ],
    //desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      type: 0,
      clientname: 0,
      status: 0
    },
    defaultItem: {
      name: "",
      type: 0,
      clientname: 0,
      status: 0
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    Jobs() {
      return this.$store.getters.loadedJobs;
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  // created() {
  //   this.initialize();
  // },

  methods: {
    handleClick() {
      this.clickdialog = true;
      console.log("ama");
    },

    editItem(item) {
      this.editedIndex = this.Jobs.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.Jobs.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.Jobs.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.Jobs[this.editedIndex], this.editedItem);
      } else {
        this.Jobs.push(this.editedItem);
      }
      const JobsData = {
        name: this.editedItem.name,
        calories: this.editedItem.type,
        fat: this.editedItem.clientname,
        carbs: this.editedItem.status
      };
      this.$store.dispatch("createJob", JobsData);
      this.close();
    }
  }
};
</script>

<style  scoped>
.thatcolor {
  color: #f1b74b;
}

.darkmint {
  color: #137a63;
}
</style>


