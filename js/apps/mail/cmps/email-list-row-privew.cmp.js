//Renders a list of <email-preview> pass down an email prop
import svgIcons from './svg-icons.cmp.js'


export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
        <span class="action"><svg-icons name="checkBox"/></span>
        <span class="action"><svg-icons name="star"/></span>
        <span class="sender-name">{{mail.fullname}}</span>
        <p class="text-privew"><span class=subject-mail-preview>{{mail.subject}}</span><span class="body-mail-preview">{{mail.body}}</span></p>
        <span class="time-mail">
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
    computed: {
        sendTimeLocal() {
            return new Date(this.mail.sentAt).toDateString()
        }
    },
}
