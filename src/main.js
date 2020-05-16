import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@fortawesome/fontawesome-free/css/all.css'
//import * as firebase from 'firebase'
import AlertComp from './components/Shared/Alert.vue'
//import VueCharts from 'vue-chartjs';
import Chat from 'vue-beautiful-chat'
Vue.use(Chat)
Vue.component('app-alert', AlertComp)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App),
    // created() {
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyB0dtu0Izk6VCoGNyN0ZmP0GGxbtbU2gGQ",
    //         authDomain: "gmoves-a674f.firebaseapp.com",
    //         databaseURL: "https://gmoves-a674f.firebaseio.com",
    //         projectId: "gmoves-a674f",
    //         storageBucket: "gmoves-a674f.appspot.com",
    //         messagingSenderId: "722822525008",
    //         appId: "1:722822525008:web:48b6816ef6d7c929cf6155",
    //         measurementId: "G-C28DYYMYGG"
    //     })
    // }
}).$mount('#app')