<template>
  <v-data-table :headers="headers" :items="Documents" sort-by="calories" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title class="darkmint headline">Uploaded Documents</v-toolbar-title>
        <v-divider class="mx-4"></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="80%">
          <template v-slot:activator="{ on }">
            <v-btn color="#f1b74b" dark class="mb-2" v-on="on">ADD DOC</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.Description" label="Description"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <!-- <v-text-field v-model="editedItem.File" label="File"></v-text-field> -->
                    <v-file-input chips multiple label="File" editedItem.File @change="onUpload"></v-file-input>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.ClientName" label="Client Name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.JobID" label="Job ID"></v-text-field>
                  </v-col>
                  <!-- <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>-->
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
      <v-icon small class="mr-2" @click="editItem(item)" color="#137a63">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)" color="#137a63">mdi-delete</v-icon>
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
    headers: [
      {
        text: "Description",
        align: "start",
        sortable: false,
        value: "Description"
      },
      { text: "File", value: "File" },
      { text: "Client Name", value: "ClientName" },
      { text: "Job ID", value: "JobID" },

      { text: "Actions", value: "actions", sortable: false }
    ],
    //desserts: [],
    editedIndex: -1,
    editedItem: {
      Description: "",
      File: "",
      ClientName: "",
      JobID: ""
    },
    defaultItem: {
      Description: "",
      File: "",
      ClientName: "",
      JobID: ""
    }
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
    Documents() {
      return this.$store.getters.getDocs;
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  // created() {
  //   this.desserts = desserts()
  // },

  methods: {
    onUpload() {
      console.log(this.editedItem.File.name);
    },
    editItem(item) {
      this.editedIndex = this.Documents.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.Documents.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.Documents.splice(index, 1);
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
        Object.assign(this.Documents[this.editedIndex], this.editedItem);
      } else {
        this.Documents.push(this.editedItem);
      }
      const DocumentsData = {
        Description: this.editedItem.Description,
        File: this.editedItem.File,
        ClientName: this.editedItem.ClientName,
        JobID: this.editedItem.JobID
      };
      this.$store.dispatch("addDocument", DocumentsData);
      this.close();
    }
  }
};
</script>

<style scoped>
.thatcolor {
  color: #f1b74b;
}

.darkmint {
  color: #137a63;
}
</style>>

