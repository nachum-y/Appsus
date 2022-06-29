// // Gets the right emails from service (async)
// // Renders the list and the filters (both top filter with search, and side filter for different folders)
import emailList from '../cmps/email-list.cmp.js'
import emailHeader from '../cmps/email-header.cmp.js'
import sideNav from '../cmps/side-nav.cmp.js'
import mainEmailApp from '../cmps/main-email-app.js'

export default {
    template: `
    <section>
    <email-header/>
    <main-email-app/>
    </section>
`,
    components: {
        emailList,
        emailHeader,
        sideNav,
        mainEmailApp
    },
        data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}
