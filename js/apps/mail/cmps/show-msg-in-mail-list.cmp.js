
import inboxEmptyMsg from '../cmps/empty-inbox-msg.cmp.js'
import starredEmptyMsg from '../cmps/starred-empty-msg.cmp.js'
import sentEmptyMsg from '../cmps/sent-empty-msg.cmp.js'
import unreadEmptyMsg from '../cmps/unread-empty-msg.cmp.js'
export default {
    name: 'ShowMsgInMailList',
    props: ['mails','taba'],
    template: `
     <component  v-if="mails.length === 0" :is="taba" >
     
        </component>
`,
    data() {
        return {
           

            }
        },

    components: {
        inboxEmptyMsg,
        starredEmptyMsg,
        sentEmptyMsg,
        unreadEmptyMsg

    },
    created() {

    },
    methods: {

    },
    computed: {
        // currTab() {
        //     console.log(this.$route.query.tab)
        //     return `${this.$route.query.tab}EmptyMsg`
        // },
    },
    unmounted() { },
}