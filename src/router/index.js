import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewNoteView from "@/views/NewNoteView";
import EditNoteView from "@/views/EditNoteView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/add',
        name: 'add-note',
        component: NewNoteView
    },
    {
        path: '/edit',
        name: 'edit-note',
        component: EditNoteView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
