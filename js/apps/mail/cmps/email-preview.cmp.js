// Present an email preview
// Renders the subject (with text size limit)
// Gives visual indication for read/unread
// Support hover state
import { eventBus } from '../../../services/eventBus-service.js';


export default {
    props: [''],
    template: `
    <div v-html="sendingEmail" class="div">


    </div>
 
`,
    data() {
        return {
            sendingEmail: null,
            unsubscribe: null,

        }
    },
    created() { 
        console.log('creat');
        this.unsubscribe = eventBus.on('sendMail', this.sendMail)

    },
    methods: {
        sendMail(mail) {
            this.sendingEmail = mail
            console.log(mail);
        }
    },
    computed: {},
    unmounted() { },
}

