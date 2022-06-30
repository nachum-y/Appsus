// // Gets the right emails from service (async)
// // Renders the list and the filters (both top filter with search, and side filter for different folders)
import { mailService } from "../services/email.service.js"
import emailList from '../cmps/email-list.cmp.js'
import emailHeader from '../cmps/email-header.cmp.js'
import sideNav from '../cmps/side-nav.cmp.js'
import mainEmailApp from '../cmps/main-email-app.js'

export default {
 
    template: `
    <section>
    <email-header/>
    <section v-if="mails" class="main-email-app">
        <side-nav :mails="mails" :unReadMails="unReadMails"/>
        <email-list :mails="mails" @unReadMailsList="unReadMailsList" @removeMail="removeMail"/> 
        <router-view></router-view>
    </section>
    </section>
`,
    components: {
        emailList,
        emailHeader,
        sideNav,
        mainEmailApp
    },
    data() {
        return {
            mails: null,
            unReadMails: [],
        }
    },
    created() {
        mailService.query()
            .then(mail => {
                this.mails = mail
            })
    },
    methods: {
        unReadMailsList(mails) {
            this.unReadMails = new Array(...mails)
        }, removeMail(mail) {
            const mailId = mail.id
            mailService.removeMailById(mailId).then(()=>{
                const idx = this.mails.findIndex(mail => mail.id === mailId)
                this.mails.splice(idx,1)
                
            })
        }
    },
    computed: {},
    unmounted() { },
}
