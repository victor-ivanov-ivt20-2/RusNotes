import SimpleDB from './views/SimpleDB.vue';
import MainPage from './views/main-page.vue';
import Schedule from './views/Schedule.vue';
import {createRouter, createWebHistory} from "vue-router";
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);


const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/add',
        component: SimpleDB
    },
    {
        path: '/schedule',
        component: Schedule
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
    
})

app.use(router)

app.mount('#app')