//Renders a list of <email-preview> pass down an email prop
// import { emailService } from '../services/email.service.js'
import svgIcons from './svg-icons.cmp.js'
import emailListRowPrivew from './email-list-row-privew.cmp.js'
import emailListInRowPrivew from './email-list-in-row-privew.cmp.js'
import emailPrivew from '../cmps/email-preview.cmp.js'
import listEmailsActionMenu from '../cmps/list-emails-action-menu.cmp.js'
import rightClickActionsMenu from '../cmps/right-click-actions-menu.cmp.js'
import showMsgInMailList from '../cmps/show-msg-in-mail-list.cmp.js'


export default {
    props: ['mails', 'currPage', 'showsPerPage'],
    template: `

    <section @click="closeActionsModal" class="mail-list" v-if="mails && !this.$route.params.mailId" >
    <list-emails-action-menu @activeCetToggle="$emit('activeCetToggle',$event)"
                             :currPage="currPage"
                             :showsPerPage="showsPerPage"
                             :mails="mails"
                             @paginationBtn="$emit('paginationBtn',$event)"/>
        
      <div v-for="mail in mails.slice(currPage*showsPerPage,(currPage+1)*showsPerPage)" :key="mail.id">
            <email-list-row-privew :mail="mail" 
            @starredMail="$emit('starredMail',$event)" 
            @click="showMailToggle(mail)" 
            @click.right.prevent="openActionsModal($event,mail)" 
            :class="[showMail === mail ? 'show-mail-open' : '',isRead(mail) ? 'read-mail' : 'unread-mail']" />

            <email-list-in-row-privew v-if="showMail === mail" 
            :mail="showMail" 
            @removeMail="$emit('RemoveMail',mail)"
            @makeAsUnReadMail="$emit('makeAsUnReadMail',$event)"/>

      </div>
      <right-click-actions-menu v-if="showMailActionMenu"  
                                :mail="showMailActionMenu" 
                                :pos="posModal" 
                                @removeMail="$emit('RemoveMail',$event)"
                                @makeAsUnReadMail="$emit('makeAsUnReadMail',$event)"
                                @makeAsReadMail="$emit('makeAsReadMail',$event)"
                                @moveToCet="moveingToCet" />
      <show-msg-in-mail-list :mails="mails" :taba="this.$route.query.tab+'EmptyMsg'"/>
      <router-view :key="$router.path"></router-view>
      
</section>
`,
    data() {
        return {
            showMail: null,
            showMailActionMenu: null,
            posModal: null,
        }
    },
    components: {
        svgIcons,
        emailListRowPrivew,
        emailListInRowPrivew,
        emailPrivew,
        listEmailsActionMenu,
        rightClickActionsMenu,
        showMsgInMailList
    },
    created() {
        this.unReadMailsList()

    },
    methods: {
        showMailToggle(mail) {
            this.$emit('makeAsReadMail', mail)
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
        openActionsModal(el, mail) {
            this.showMailActionMenu = mail
            this.posModal = { eltop: el.clientY, left: el.clientX }
            return
        },
        closeActionsModal(ev) {
            this.showMailActionMenu = null

        },
        moveingToCet(cet,mail){
            this.$emit('moveToCet',cet,mail)
        }



    },
    computed: {


    },
    unmounted() { },

}
