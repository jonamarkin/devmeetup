import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loadedJobs: [{
                name: "Frozen Yogurt",
                type: 159,
                clientname: 6.0,
                status: 24,

            },
            {
                name: "Frozen Yogurt",
                type: 159,
                clientname: 6.0,
                status: 24,
            },
            {
                name: "Frozen Yogurt",
                type: 159,
                clientname: 6.0,
                status: 24,
            },
            {
                name: "Frozen Yogurt",
                type: 159,
                clientname: 6.0,
                status: 24,
            },
            {
                name: "Frozen Yogurt",
                type: 159,
                clientname: 6.0,
                status: 24,
            },
            {
                name: "Frozen Yogurt",
                type: 159,
                clientname: 6.0,
                status: 24,
            }
        ],

        loadedDocuments: [{
                Description: "Ato Project",
                File: "Some service",
                ClientName: "Ato",
                JobID: "Pending",

            },
            {
                Description: "Ato Project",
                File: "Some service",
                ClientName: "Ato",
                JobID: "Pending",
            },
            {
                Description: "Ato Project",
                File: "Some service",
                ClientName: "Ato",
                JobID: "Pending",
            },
            {
                Description: "Ato Project",
                File: "Some service",
                ClientName: "Ato",
                JobID: "Pending",
            },
            {
                Description: "Ato Project",
                File: "Some service",
                ClientName: "Ato",
                JobID: "Pending",
            },
            {
                Description: "Ato Project",
                File: "Some service",
                ClientName: "Ato",
                JobID: "Pending",
            }
        ],
        loadedUsers: [{

        }],
        user: {
            id: "444",
            companyName: "USG",
            streetAddress: "Accra",
            emailAddress: "kwame@yahoo.com",
            phoneNumber: "0547362101",
            role: "Admin",
            status: "Active",
        },
    },
    mutations: {

    },
    actions: {
        createJob({
            commit
        }, payload) {
            const Job = {
                name: payload.name,
                type: payload.type,
                clientname: payload.clientname,
                status: payload.status,

            }

            commit('createJob', Job)
        },
        addDocument({
            commit
        }, payload) {
            const Document = {
                Description: payload.Description,
                File: payload.File,
                ClientName: payload.ClientName,
                JobID: payload.JobID,

            }

            commit('addDocument', Document)
        }
    },
    modules: {

    },
    getters: {
        getDocs(state) {
            return state.loadedDocuments.sort((documentA, documentB) => {
                return documentA.Description > documentB.Description;
            });
        },
        loadedJobs(state) {
            return state.loadedJobs;
        }
    }
})