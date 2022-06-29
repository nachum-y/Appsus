import homePage from "./pages/app-home.cmp.js"
import emailApp from "./apps/mail/pages/email-app.js"
import noteApp from "./apps/keep/pages/note-app.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: emailApp
    },
    {
        path: '/keep',
        component: noteApp
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})