//Renders a list of <email-preview> pass down an email prop
import svgIcons from './svg-icons.cmp.js'


export default {
    props: ['mail'],
    template: `
    <section class="mail-preview-in-search">
        <div class="mail-details-in-serchbar-list-icon">
            <span><svg-icons name="unread" /></span>
            <p class="mail-details-in-serchbar">
                <span class="subject-mail-preview">{{mail.subject}}</span>
                <span class="sender-name">{{mail.fullname}}</span>
            </p>
        </div>
        <span class="time-mail-in-serchbar">
        {{sendTimeLocal}}
        </span>
   </section>
`,
    data() {
        return {
        }
    },
    components: {
        svgIcons,
    },
    methods: {

    },
    computed: {
        sendTimeLocal() {
            return new Date(this.mail.sentAt).toDateString()
        },
        setIconColor() {
            if (this.foundLabel('starred') !== -1) return '#EFD494'
            return 'none'
        }
    },
}
