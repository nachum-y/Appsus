//Renders a list of <email-preview> pass down an email prop
import { emailService } from '../services/email.service.js'
import svgIcons from './svg-icons.cmp.js'
import emailListRowPrivew from './email-list-row-privew.cmp.js'
import emailListInRowPrivew from './email-list-in-row-privew.cmp.js'


export default {
    template: `
    <section  class="mail-list" v-if="mails">
      <div v-for="mail in mails" :key="mail.id">
            <email-list-row-privew :mail="mail" @click="showMailToggle(mail)" />
            <email-list-in-row-privew v-if="showMail === mail" :mail="showMail"/>
      </div>
    </section>
`,
    data() {
        return {
            mails: null,
            showMail: null
        }
    },
    components: {
        svgIcons,
        emailListRowPrivew,
        emailListInRowPrivew
    },
    created() {
        this.mails = emailService.getAllMails()

    },
    methods: {
        showMailToggle(mail) {
            this.showMail = this.showMail === mail ? null : mail
            // this.showMail = mail
        }
    },
    computed: {

    },
    unmounted() { },
}
