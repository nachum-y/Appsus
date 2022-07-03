// Routable component (page)
// show the entire email
// Allow deleting an email (using the service)
// Allow navigating back to list
import { mailService } from "../services/email.service.js"
import svgIcons from '.././cmps/svg-icons.cmp.js'
import listEmailsActionTopMenuEmaiilDetailsPage from '../cmps/list-emails-action-top-menu-emaiil-details-page.cmp.js'


export default {
    name: 'emailDetails',
    template: `
    <section class="preview-mail-page" v-if="mail">
        <list-emails-action-top-menu-emaiil-details-page/>
    <div class="top-mail-privew">
        <h2 class="mail-preview-subject">{{mail.subject}}</h2>
        <div class="actions-mail-privew">
            <span @click="$router.push('/mail')"><svg-icons name="backArrow"/></span> 
            <span @click="removeMail"><svg-icons name="draft"/></span> 
        </div>
    </div>
    <div class="sender-with-avatar">
        <span class="avatar-in-preview"><svg-icons name="avatarEmpty"/></span>
        <div class="sender-details">
            <p class="sender-name-and-mail"><span class="sender-name-in-preview">{{mail.fullname}}</span><span class="sender-mail-in-preview">&lt;{{mail.email}}></span> </p>
            <span>To me</span>
        </div>
    </div>
    <div class="body-in-preview">
        <p v-html="mail.body"></p>   
    </div>

    </section>
`,
    data() {
        return {
            mail: null,
            isEditable: true,
        }
    },
    components: {
        svgIcons,
        listEmailsActionTopMenuEmaiilDetailsPage,


    },
    created() {
        const id = this.$route.params.mailId
        mailService.get(id).then(mail => {
            this.mail = mail
            console.log(this.$router.currentRoute)
        })
        console.log('pagePrivew')

    },

    methods: {
        removeMail() {
            this.$emit('removeMail', this.mail)
            this.$router.push('/mail')
        }
    },
    computed: {},
    unmounted() { },
}