import svgIcons from './svg-icons.cmp.js'
import { eventBus } from '../../../services/eventBus-service.js'

export default {
    props: ['mails'],
    template: `
    <nav class="side-nav-tabs">
        <div class="inbox"  @click="activeTabToggle('inbox')" :class="[activeTab === 'inbox' ? 'active' : '']">
        <span><svg-icons name="inbox" />Inbox</span> <span v-if="countUnReadMails > 0">{{countUnReadMails}}</span></div>
        <div class="starred" @click="activeTabToggle('starred')" :class="[activeTab === 'starred' ? 'active' : '']"><span><svg-icons name="starred"/>Starred</span> </div>
        <div class="sent" @click = "activeTabToggle('sent')" :class="[activeTab === 'sent' ? 'active' : '']"><span><svg-icons name="sent" /> Sent</span></div>
        <div class="draft" @click = "activeTabToggle('draft')" :class="[activeTab === 'draft' ? 'active' : '']" ><span><svg-icons name="draft" /> Draft</span></div>
        <div class="spam"><span><svg-icons name="spam" /> Spam</span></div>
        <div class="trash"><span><svg-icons name="draft" /> Trash</span></div>
        <div class="categories"><span><svg-icons name="categories"/>Categories</span></div>

    </nav>
`,
    data() {
        return {
            unReadMailsCount: 0,
            activeTab: 'inbox'

        }
    },
    components: {
        svgIcons
    },
    created() {

    },
    methods: {
        activeTabToggle(tab) {
            this.activeTab = tab
            this.$emit('sideNavTab',tab)
        }
    },
    computed: {
        countUnReadMails() {
            const unReadMails = this.mails.filter(mail => mail.isRead !== true)
            return unReadMails.length
        },
    },
    mounted() {

    },
    unmounted() { },
}
