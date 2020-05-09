import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

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

        // user: {
        //     id: "someID",
        //     companyName: "",
        //     streetAddress: "Accra",
        //     emailAddress: "kwame@yahoo.com",
        //     phoneNumber: "0547362101",
        //     role: "Admin",
        //     status: "Active",
        // },
        user: null,
        loading: false,
        error: null,
    },
    mutations: {
        createJob(state, payload) {
            state.loadedJobs.push(payload)
        },
        addDocument(state, payload) {
            state.loadedDocuments.push(payload)
        },
        setUser(state, payload) {
            console.log(" Printing payload " + payload)
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
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
        },

        registerUser({
            commit
        }, payload) {
            commit('setLoading', true)
            commit('clearError')
            console.log("User before registration " + this.user)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.user.uid,
                            companyName: "",
                            streetAddress: "Accra",
                            emailAddress: "kwame@yahoo.com",
                            phoneNumber: "0547362101",
                            role: "Admin",
                            status: "Active",
                        }
                        commit('setUser', newUser)
                        console.log(newUser)
                    }

                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log("There was an error" + error)
                    }
                )
        },

        signIn({
            commit
        }, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        companyName: "",
                        streetAddress: "Accra",
                        emailAddress: "kwame@yahoo.com",
                        phoneNumber: "0547362101",
                        role: "Admin",
                        status: "Active",
                    }
                    commit('setUser', newUser)
                })
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log("There was an error" + error)
                    }
                )
        },
        clearError({
            commit
        }) {
            commit('clearError')
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
        },
        getUser(state) {
            return state.user;
        },
        loading(state) {
            return state.loading

        },
        error(state) {
            return state.error
        }
    }
})