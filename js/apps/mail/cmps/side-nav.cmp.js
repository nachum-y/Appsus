import svgIcons from './svg-icons.cmp.js'
import sideNavTabs from './side-nav-tabs.cmp.js'
export default {
    template: `
    <section class="side-nav">
        <span class="compuse">
            <svg-icons name="sideNavCompose"/>
        </span>
        <side-nav-tabs/>
    </section>
`,
    data() {
        return {}
    },
    components:{
        svgIcons,
        sideNavTabs
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}