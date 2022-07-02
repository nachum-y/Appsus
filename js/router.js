import homePage from "./pages/app-home.cmp.js"
import emailApp from "./apps/mail/pages/email-app.js"
import noteApp from "./apps/keep/pages/note-app.js"
import emailCompose from "./apps/mail/cmps/email-compose.cmp.js"
import noteDetails from "./apps/keep/pages/note-details.cmp.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        name: 'mail',
        path: '/mail',
        component: emailApp,
        query: { tab: 'inbox' },
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
        component: noteApp,
        children: [
            {
                path: ':noteId',
                component: noteDetails
            }
        ]
    },
]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})