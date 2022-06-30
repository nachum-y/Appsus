//Renders a list of <email-preview> pass down an email prop
// import { emailService } from '../services/email.service.js'
import { eventBus } from '../../../services/eventBus-service.js'
import svgIcons from './svg-icons.cmp.js'
import emailListRowPrivew from './email-list-row-privew.cmp.js'
import emailListInRowPrivew from './email-list-in-row-privew.cmp.js'
import emailPrivew from '../cmps/email-preview.cmp.js'
import listEmailsActionMenu from '../cmps/list-emails-action-menu.cmp.js'


export default {
    props: ['mails'],
    template: `
    <section  class="mail-list" v-if="mails" >
    <list-emails-action-menu/>
      <div v-for="mail in mails" :key="mail.id">
            <email-list-row-privew :mail="mail" @click="showMailToggle(mail)" :class="[showMail === mail ? 'show-mail-open' : '',isRead(mail) ? 'read-mail' : 'unread-mail']" />
            <email-list-in-row-privew v-if="showMail === mail" :mail="showMail" @removeMail="$emit('RemoveMail',mail)"/>
      </div>
      <email-privew/>
</section>
`,
    data() {
        return {
            showMail: null,
        }
    },
    components: {
        svgIcons,
        emailListRowPrivew,
        emailListInRowPrivew,
        emailPrivew,
        listEmailsActionMenu
    },
    created() {
        this.unReadMailsList()

    },
    methods: {
        showMailToggle(mail) {
            mail.isRead = true
            this.showMail = this.showMail === mail ? null : mail
            this.unReadMailsList()


        },
        isRead(mail) {
            if (mail.isRead) return true
            return
        },

        unReadMailsList() {
            const mails = this.mails.filter(mail => {
                if (!mail.isRead) return mail
            })
            this.$emit('unReadMailsList', mails)
        },
        test(){
            console.log('test mail');
        }

    },
    computed: {


    },
    unmounted() { },
}
