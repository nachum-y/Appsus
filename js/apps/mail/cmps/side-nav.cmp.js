import svgIcons from './svg-icons.cmp.js'
export default {
    template: `
    <section>
        <div class="compuse">
        <svg-icons name="sideNavCompose"/>
        </div>
    </section>
`,
    data() {
        return {}
    },
    components:{
        svgIcons
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}