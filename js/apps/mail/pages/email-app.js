// // Gets the right emails from service (async)
// // Renders the list and the filters (both top filter with search, and side filter for different folders)
import { mailService } from "../services/email.service.js"
import { eventBus } from '../../../services/eventBus-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailHeader from '../cmps/email-header.cmp.js'
import sideNav from '../cmps/side-nav.cmp.js'
import mainEmailApp from '../cmps/main-email-app.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    template: `
    <email-header @inputTxt="filterMails"/>
    <section v-if="mails" class="main-email-app">
        <side-nav :mails="mails" :unReadMails="unReadMails" @sideNavTab="filterMailsbyType" />
        <email-list :mails="mailsToDisplay" @unReadMailsList="unReadMailsList" @removeMail="removeMail" @starredMail="starredMail"/> 
        <router-view></router-view>
    </section>
`,
    components: {
        emailList,
        emailHeader,
        sideNav,
        mainEmailApp,
        emailFilter,
    },

    data() {
        return {
            mails: null,
            unReadMails: [],
            sendMails: [],
            unsubscribe: null,
            filters: {
                txt: null,
                inbox: true,
                unread: null,
                sent: null,
                type: null,
            },
            mailToEdit: null,
        }
    },
    created() {
        mailService.query()
            .then(mail => {
                this.mails = mail
            }),
            this.unsubscribe = eventBus.on('sendMail', this.sendMail)
            
    },

    methods: {
        unReadMailsList(mails) {
            this.unReadMails = new Array(...mails)
        },
        removeMail(mail) {
            const mailId = mail.id
            mailService.removeMailById(mailId).then(() => {
                const idx = this.mails.findIndex(mail => mail.id === mailId)
                this.mails.splice(idx, 1)

            })
        },
        sendMail(mail) {
            mailService.addNewMail(mail).then(mail => {
                this.mails.unshift(mail)
            })
            this.filterMails()
        },
        filterMails(filter) {
            this.filters.txt = filter
        },
        filterMailsbyType(type) {
            console.log(type)
            console.log(mailService.setFilter())
            switch (type) {
                case 'sent':
                    this.filters = mailService.setFilter()
                    this.filters.sent = true
                    break
                case 'inbox':
                    this.filters = mailService.setFilter()
                    this.filters.inbox = true
                    break
                case 'starred':
                    this.filters = mailService.setFilter()
                    this.filters.type = 'starred'
                    break

                default:
                    break
            }

        },
        starredMail(mail) {
            const mailId = mail.id

            mailService.get(mailId).then(mail => {
                this.mailToEdit = mail
                const idx = this.foundLabel('starred',this.mailToEdit)
                if (!isNaN(idx) && idx !== -1) {
                    this.mailToEdit.lables.splice(idx, 1)
                    mailService.save(this.mailToEdit).then(mail => {
                        console.log(mail)
                    })
                    return
                }
                else if (idx) {
                    this.mailToEdit.lables.push('starred')
                    mailService.save(this.mailToEdit).then(mail => {
                        console.log(mail)
                    })
                    return
                }
            })


        },
        foundLabel(label, mail) {
            console.log(mail);
            if(mail) return mail.lables.findIndex(lable => lable === label)
           
        },


    },
    computed: {
        mailsToDisplay() {
            var mails = this.mails
            if (this.filters?.txt) {
                const regex = new RegExp(this.filters.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.body))
            }
            if (this.filters?.sent) {
                mails = mails.filter(mail => mail.to !== 'user@appsus.com')
            }
            if (this.filters?.inbox) {
                mails = mails.filter(mail => mail.to === 'user@appsus.com')
                console.log('inbox')
            }
            if (this.filters?.type){
                mails = mails.filter(mail => {
                   const idx = this.foundLabel('starred',mail)
                  if (!isNaN(idx) && idx !== -1){
                    console.log('this.foundLabel:',this.foundLabel('starred',mail))
                    console.log(mail);    
                    return mail   

                  } 
                })
            }

            return mails
        }
    },
    unmounted() { },
    destroyed() {
        this.unsubscribe()
    },
}
