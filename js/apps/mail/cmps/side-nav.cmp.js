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
        <side-nav-tabs :mails="mails" @sideNavTab="$emit('sideNavTab',$event)" />
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
    },
    methods: {
        newCompose() {
            this.$router.push({ name: 'newCompose', params: { showCopose: true},key:this.$route.fullPath })

            // router.push('+/compose=new')
        }
    },
    computed: {},
    mounted() {
     },
}