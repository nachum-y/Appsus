import homePage from './views/home-page.cmp.js'
import mailApp from './apps/mail/pages/mail-app.cmp.js'
import keepApp from './views/keep-app.cmp.js'





const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: mailApp
    },
    {
        path: '/keep',
        component: keepApp
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})