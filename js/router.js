import homePage from "./pages/app-home.cmp.js"
const routes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/mail',
    //     component: mailApp
    // },
    // {
    //     path: '/keep',
    //     component: keepApp
    // },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})