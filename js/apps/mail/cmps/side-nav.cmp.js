import svgIcons from './svg-icons.cmp.js'
import sideNavTabs from './side-nav-tabs.cmp.js'
export default {
    name: 'side',
    props:['mails','unReadMails'],
    template: `
    <section class="side-nav">
        <span @click="newCompose"  class="compuse">
            <svg-icons name="sideNavCompose"/>
        </span>
        <side-nav-tabs :unReadMails="unReadMails"/>
    </section>
`,
    data() {
        return {}
    },
    components: {
        svgIcons,
        sideNavTabs,
    },
    created() { 
        console.log(this.unReadMails);
    },
    methods: {
        newCompose() {
            console.log('newCompose() called');
            this.$router.push({ name: 'newCompose', params: { showCopose: true} })

            // router.push('+/compose=new')
        }
    },
    computed: {},
    mounted() {
        console.log(this.mails);
     },
}