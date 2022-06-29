// // Gets the right emails from service (async)
// // Renders the list and the filters (both top filter with search, and side filter for different folders)
import emailList from '../cmps/email-list.cmp.js'
import sideNav from '../cmps/side-nav.cmp.js'

export default {
    template: `
    <section class="main-email-app">
        <side-nav class="side-nav"/>
        <email-list class="mail-list"/> 
    </section>
`,
    components: {
        emailList,
        sideNav
    },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}