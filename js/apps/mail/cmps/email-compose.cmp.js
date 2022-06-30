// Has a form with: to, subject and body
// Use the service to send an email (add email to the list)
import svgIcons from './svg-icons.cmp.js'

export default {
    template: `
    <form @submit.prevent="save" class="new-compose">
        <div class="compose-header">
            <span class="new-message-compose-header">New Message</span>
            <div class="actions-compuse-header">
                <span><svg-icons name="minimuze"/></span>
                <span><svg-icons name="openIn"/></span>
                <span><svg-icons name="close"/></span>
            </div>
        </div>
        <label for="input-recipients">
            <input type="email" class="input-recipients" id="input-recipients" placeholder="Recipients">
        </label>
        <label for="input-subject">
            <input type="text" class="input-subject" id="input-subject" placeholder="Subject">
        </label>
        <div class="compose-budy">
            
        </div>
        <div class="actions-bottom">
                <button class="send-mail-compose">Send</button>
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
        return {}
    },
    components: {
        svgIcons
    },
    created() { },
    methods: {
        save() {
            console.log('hello')
        }
    },
    computed: {},
    unmounted() { },
}