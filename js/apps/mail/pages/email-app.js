// // Gets the right emails from service (async)
// // Renders the list and the filters (both top filter with search, and side filter for different folders)
import { mailService } from "../services/email.service.js"
import { eventBus } from '../../../services/eventBus-service.js'
import emailList from '../cmps/email-list.cmp.js'
import emailHeader from '../cmps/email-header.cmp.js'
import sideNav from '../cmps/side-nav.cmp.js'
// import mainEmailApp from '../cmps/main-email-app.js'
import emailFilter from '../cmps/email-filter.cmp.js'

export default {
    emits: ['openHeader'],
    template: `
    <email-header :mailToSearch="mailToSearch" 
                  @inputTxt="filterMailsToSearch" 
                  @openHeader="$emit('openHeader')"
                  @searchInput="filterMailsbyTxt"/>
    <section v-if="mails" class="main-email-app">
        <side-nav :mails="mails" :unReadMails="unReadMails" @sideNavTab="filterMailsbyType" />
        <email-list :mails="mailsToDisplay"
                    :currPage="page"
                    :showsPerPage="showsPerPage"
                    @unReadMailsList="unReadMailsList" 
                    @removeMail="removeMail" 
                    @starredMail="starredMail"
                    @makeAsReadMail="makeAsReadMail"
                    @makeAsUnReadMail="makeAsUnReadMail"
                    @activeCetToggle="filterMailsbyType"
                    @paginationBtn="paginationSet"
                    @moveToCet="moveToCet" /> 
        <router-view @removeMail="removeMail"></router-view>
    </section>
`,
    components: {
        emailList,
        emailHeader,
        sideNav,
        // mainEmailApp,
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
                inbox: null,
                unread: null,
                sent: null,
                starred: null,
                draft: null,
                trash: null,
                social: null,
                promotions: null,

            },
            mailToEdit: null,
            mailToSearch: null,
            page: 0,
            showsPerPage: 25,
        }
    },
    created() {
        mailService.query()
            .then(mail => {
                this.mails = mail
            }),
            this.unsubscribe = eventBus.on('sendMail', this.sendMail)

        if (this.filters.inbox) this.$router.replace({ path: '/mail', query: { tab: 'inbox' } })
        if (!this.$route.query.tab) {
            this.$router.replace({ path: '/mail', query: { tab: 'inbox' } })
            this.filters.inbox = 'inbox'
        }
        this.filters[this.$route.query.tab] = true



    },

    methods: {
        unReadMailsList(mails) {
            this.unReadMails = []
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
                    this.filters.starred = 'starred'
                    break
                case 'unread':
                    this.filters = mailService.setFilter()
                    this.filters.unread = 'unread'
                    break
                case 'draft':
                    this.filters = mailService.setFilter()
                    this.filters.draft = 'draft'
                    break
                case 'trash':
                    this.filters = mailService.setFilter()
                    this.filters.trash = 'trash'
                    break
                case 'primary':
                    this.filters = mailService.setFilter()
                    this.filters.primary = 'primary'
                    break

                case 'social':
                    console.log('social')
                    this.filters = mailService.setFilter()
                    this.filters.social = 'social'
                    break
                case 'promotions':
                    this.filters = mailService.setFilter()
                    this.filters.promotions = 'promotions'
                    break

                default:
                    break
            }

        },
        starredMail(mail) {
            const mailId = mail.id

            mailService.get(mailId).then(mail => {
                this.mailToEdit = mail
                const idx = this.foundLabel('starred', this.mailToEdit)
                if (!isNaN(idx) && idx !== -1) {
                    this.mailToEdit.lables.splice(idx, 1)
                    mailService.save(this.mailToEdit).then(mail => {
                    })
                    return
                }
                else if (idx) {
                    this.mailToEdit.lables.push('starred')
                    mailService.save(this.mailToEdit).then(mail => {
                    })
                    return
                }
            })


        },
        foundLabel(label, mail) {
            if (mail) return mail.lables.findIndex(lable => lable === label)

        },
        makeAsReadMail(mail) {
            mail.isRead = true
            const mailId = mail.id
            mailService.get(mailId).then(mail => {
                this.mailToEdit = mail
                this.mailToEdit.isRead = true
                mailService.save(this.mailToEdit).then(mail => {
                })
            })
        },
        makeAsUnReadMail(mail) {
            mail.isRead = false
            const mailId = mail.id
            mailService.get(mailId).then(mail => {
                this.mailToEdit = mail
                this.mailToEdit.isRead = false
                mailService.save(this.mailToEdit).then(mail => {
                })
            })
        },
        filterMailsToSearch(input) {
            var mails = this.mails
            const regex = new RegExp(input, 'i')
            mails = mails.filter(mail => regex.test(mail.body))
            if (mails) {

                this.mailToSearch = mails.slice(0, 5)
            }
            if (!input) this.mailToSearch = null

        },
        paginationSet(page) {
            console.log(page)
            this.page += page
        },
        filterMailsbyTxt(input) {
            this.$router.replace({ query: { ...this.$route.query, tab: 'inbox' } })
            this.filters = mailService.setFilter()
            this.filters.txt = input
        },
        moveToCet(cet, mail) {
            mail.categories = cet
            const mailId = mail.id
            mailService.get(mailId).then(mail => {
                this.mailToEdit = mail
                this.mailToEdit.categories = cet
                mailService.save(this.mailToEdit).then(mail => {
                })
            })
        },
    },
    computed: {
        mailsToDisplay() {
            var mails = this.mails
            if (this.filters?.txt) {
                this.page = 0
                const regex = new RegExp(this.filters.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.body))
            }
            if (this.filters?.sent) {
                this.page = 0
                mails = mails.filter(mail => mail.to !== 'user@appsus.com')
                this.$router.replace({ query: { ...this.$route.query, tab: 'sent' } })
            }
            if (this.filters?.inbox) {
                this.page = 0
                mails = mails.filter(mail => mail.to === 'user@appsus.com')
                this.$router.replace({ query: { tab: 'inbox' } })
                // this.$router.replace({ query: { ...this.$route.query, tab: 'inbox' } })
            }
            if (this.filters?.starred) {
                this.page = 0
                mails = mails.filter(mail => {
                    this.$router.replace({ query: { ...this.$route.query, tab: 'starred' } })
                    const idx = this.foundLabel('starred', mail)
                    if (!isNaN(idx) && idx !== -1) {

                        return mail

                    }
                })
            }
            if (this.filters?.unread) {
                this.page = 0
                mails = this.mails.filter(mail => mail.isRead !== true)
                this.$router.replace({ query: { ...this.$route.query, tab: 'unread' } })
            }
            if (this.filters?.social) {
                this.page = 0
                mails = this.mails.filter(mail => mail.categories === 'social')
                this.$router.replace({ query: { ...this.$route.query, tab: 'inbox' } })
            }
            if (this.filters?.primary || this.filters?.inbox) {
                this.page = 0
                mails = mails.filter(mail => mail.to === 'user@appsus.com' && (mail.categories !== 'promotions' && mail.categories !== 'social'))
                this.$router.replace({ query: { ...this.$route.query, tab: 'inbox' } })
            }
            if (this.filters?.promotions) {
                this.page = 0
                mails = this.mails.filter(mail => mail.categories === 'promotions')
                this.$router.replace({ query: { ...this.$route.query, tab: 'inbox' } })

            }

            return mails
        }
    },
    unmounted() { },
    destroyed() {
        this.unsubscribe()
    },
}
