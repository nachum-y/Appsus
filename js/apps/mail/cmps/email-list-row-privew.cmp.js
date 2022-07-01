//Renders a list of <email-preview> pass down an email prop
import svgIcons from './svg-icons.cmp.js'


export default {
    props: ['mail'],
    template: `
    <section class="mail-preview">
        <span class="action"><svg-icons name="checkBox"/></span>
        <span class="action testtt" @click.stop="starredMail(mail)"><svg-icons :color="setIconColor" name="star"/></span>
        <span class="sender-name">{{mail.fullname}}</span>
        <p class="text-privew"><span class=subject-mail-preview>{{mail.subject}}</span><span ref="mailBodyHtml" class="body-mail-preview" v-html="mail.body"></span></p>
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
    methods: {
        starredMail(mail) {
            const idx = this.foundLabel('starred')
            if (!isNaN(idx) && idx !== -1) {
                mail.lables.splice(idx, 1)
                this.$emit('starredMail', mail)
                return
            }
            else if (idx) {
                mail.lables.push('starred')
                this.$emit('starredMail', mail)
                return
            }
        },
        foundLabel(label) {
            const found = this.mail.lables.findIndex(lable => lable === label)
            return found 
        }

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
