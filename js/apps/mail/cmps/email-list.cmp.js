//Renders a list of <email-preview> pass down an email prop
import { emailService } from '../services/email.service.js'
import svgIcons from './svg-icons.cmp.js'


export default {
    template: `
    <section v-if="mails">

      <div class="mail-preview" v-for="mail in mails">
       
      
            <span class="action"></span><svg-icons name="checkBox"/></span>
            <span class="action"><svg-icons name="star"/></span>
            <!-- <svg-icons name="clipContent"/> -->
            <span class="sender-name">{{mail.fullname}}</span>
        

            <p class="text-privew"><span class=subject-mail-preview>{{mail.subject}}</span><span class="body-mail-preview">{{mail.body}}</span></p>
        <div class="time-mail">
           {{sendTimeLocal(mail)}}
        </div>

      </div>
    </section>
`,
    data() {
        return {
            mails: null,
        }
    },
    components: {
        svgIcons
    },
    created() {
        this.mails = emailService.getAllMails()

    },
    methods: {
        sendTimeLocal(mail) {
            console.log(mail.sentAt)
            return new Date(mail.sentAt).toDateString()
        }
    },
    computed: {
       
    },
    unmounted() { },
}
