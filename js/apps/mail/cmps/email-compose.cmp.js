// Has a form with: to, subject and body
// Use the service to send an email (add email to the list)
import { eventBus } from '../../../services/eventBus-service.js'
import { mailService } from "../services/email.service.js"
import svgIcons from './svg-icons.cmp.js'

export default {

    name: 'emailCompose',
    props: ['showCompose'],
    template: `
    <form  v-if="openCompose && newMail" @submit.prevent="save" class="new-compose">
        <div class="compose-header">
            <span class="new-message-compose-header">New Message</span>
            <div class="actions-compuse-header">
                <span><svg-icons name="minimuze"/></span>
                <span><svg-icons name="openIn"/></span>
                <span @click="closeCompose"><svg-icons name="close"/></span>
            </div>
        </div>
        <label for="input-recipients">
            <input type="email" v-model="newMail.recipients" class="input-recipients" id="input-recipients" placeholder="Recipients" required>
        </label>
        <label for="input-subject">
            <input type="text" v-model="newMail.subject" class="input-subject" id="input-subject" placeholder="Subject" required>
        </label>
        <div @input="onInput" contenteditable="true"   class="compose-body">
            
        </div>
        <div class="actions-bottom">
                <button type="submit" class="send-mail-compose">Send</button>
            <div class="list-of-text-actions">
                <span><span><svg-icons name="textFormat"/></span></span>
                <span><span><svg-icons name="attachFile"/></span></span>
                <span><span><svg-icons name="emoji"/></span></span>
                <span><span><svg-icons name="image"/></span></span>
            </div>
          
            <div class="compose-actions">
                <span>±</span>
                <span><span><svg-icons name="draft"/></span></span>
                </div>
        </div>
    </form>
`,
    data() {
        return {
            text: '',
            openCompose: null,
            newMail: null,
        }
    },
    components: {
        svgIcons
    },
    created() {
        this.newMail = mailService.getEmptyMail()
    },
    methods: {
        save() {
            console.log('save in component compose')
            eventBus.emit('sendMail', this.newMail)
            this.$router.back()
        },
        onInput(e) {

            this.text = e.target.innerHTML
            this.newMail.body = e.target.innerHTML

        },
        closeCompose() {
            this.openCompose = false
            // this.$router.back()
            this.$router.replace({ path: '/mail' })


        }
    },
    computed: {},
    mounted() {
        this.openCompose = this.showCompose
    },
    unmounted() { },
}