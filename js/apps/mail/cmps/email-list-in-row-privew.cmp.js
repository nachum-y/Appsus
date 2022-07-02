//Renders a list of <email-preview> pass down an email prop
import svgIcons from './svg-icons.cmp.js'


export default {
    props: ['mail'],
    template: `
    <section class="mail-preview-in-row">
        <div class="top-mail-privew">

            <h2 class="mail-preview-subject">{{mail.subject}}</h2>
            <div class="actions-mail-privew">
            <router-link :key="$route.fullPath" :to="'/mail/'+mail.id"><span><svg-icons name="openInNewWindow"/></span></router-link>
                <span @click="$emit('RemoveMail',mail)"><svg-icons name="draft"/></span>  </div>
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
        }
    },
    components: {
        svgIcons,
    },
    methods: {
        removeMail(mail) {
            this.$emit('removeMail', mail)
            console.log('removeMail called', mail)
        }
    }
}
