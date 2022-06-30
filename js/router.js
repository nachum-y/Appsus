import homePage from "./pages/app-home.cmp.js"
import emailApp from "./apps/mail/pages/email-app.js"
import noteApp from "./apps/keep/pages/note-app.js"
import emailCompose from "./apps/mail/cmps/email-compose.cmp.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/mail',
        component: emailApp,
        children: [
            {
                // UserProfile will be rendered inside User's <router-view>
                // when /user/:id/profile is matched
                name: 'newCompose',
                path: 'compose=new',
                component: emailCompose,
                props: { showCompose: true }
            },
        ]
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