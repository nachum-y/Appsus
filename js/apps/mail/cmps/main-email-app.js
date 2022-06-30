// // Gets the right emails from service (async)
// // Renders the list and the filters (both top filter with search, and side filter for different folders)
import emailList from '../cmps/email-list.cmp.js'
import sideNav from '../cmps/side-nav.cmp.js'

export default {
    template: `
    <section class="main-email-app">
        <side-nav />
        <email-list/> 
        <router-view :saveC="saveC"></router-view>
    </section>
`,
    components: {
        emailList,
        sideNav,
    },
    data() {
        return {
            mails: null,
        }
    },
    created() { },
    methods: {
        
    },
    computed: {
        saveC(){
            console.log('save');
        }
    },
    unmounted() { },
}
