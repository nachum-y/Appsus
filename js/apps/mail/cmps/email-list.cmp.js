//Renders a list of <email-preview> pass down an email prop
import { emailService } from '../services/email.service.js'
import { eventBus } from '../../../services/eventBus-service.js';
import svgIcons from './svg-icons.cmp.js'
import emailListRowPrivew from './email-list-row-privew.cmp.js'
import emailListInRowPrivew from './email-list-in-row-privew.cmp.js'


export default {
    template: `
    <section  class="mail-list" v-if="mails" >
        <div class="action-menu">
        <svg-icons name="checkBox"/>  
        </div>
        <div class="categories-tabs">
            <div class="categories-tab-primary active">
            <svg-icons name="inbox"/>    
            Primary</div>
            <div class="categories-tab-social">
            <svg-icons name="social"/>       
            Social</div>
            <div class="categories-tab-promotions">
            <svg-icons name="promotions"/>        
            Promotions</div>
        </div>
      <div v-for="mail in mails" :key="mail.id">
            <email-list-row-privew :mail="mail" @click="showMailToggle(mail)" :class="[showMail === mail ? 'show-mail-open' : '',isRead(mail) ? 'read-mail' : 'unread-mail']" />
            <email-list-in-row-privew v-if="showMail === mail" :mail="showMail"/>
      </div>
</section>
`,
    data() {
        return {
            mails: null,
            showMail: null,
            unReadMails: 0
        }
    },
    components: {
        svgIcons,
        emailListRowPrivew,
        emailListInRowPrivew
    },
    created() {
        this.mails = emailService.getAllMails()
        this.unReadCount()

    },
    methods: {
        showMailToggle(mail) {
            mail.isRead = true
            this.showMail = this.showMail === mail ? null : mail
            this.unReadCount()
        },
        isRead(mail) {
            if (mail.isRead) return true
            return
        },
        unReadCount() {

            const count = this.mails.reduce(function (accumulator, mail) {
                return accumulator + !mail.isRead
            }, 0)
            eventBus.emit('unReadMails', count);
            this.unReadMails = count
        }

    },
    computed: {


    },
    unmounted() { },
}
