import svgIcons from './svg-icons.cmp.js'
export default {
    template: `
    <nav class="side-nav-tabs">
        <div class="inbox active">
            <span><svg-icons name="inbox" />Inbox</span> <span>3</span></div>
        <div class="starred"><span><svg-icons name="starred" />Starred</span> </div>
        <div class="sent"><span><svg-icons name="sent" /> Sent</span></div>
        <div class="draft"><span><svg-icons name="draft" /> Draft</span></div>
        <div class="spam"><span><svg-icons name="spam" /> Spam</span></div>
        <div class="trash"><span><svg-icons name="draft" /> Trash</span></div>
        <div class="categories"><span><svg-icons name="categories"/>Categories</span></div>
    </nav>
`,
    data() {
        return {}
    },
    components: {
        svgIcons
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}