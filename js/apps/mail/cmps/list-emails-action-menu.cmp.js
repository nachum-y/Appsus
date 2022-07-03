import svgIcons from './svg-icons.cmp.js'

export default {
    props: ['mails', 'currPage', 'showsPerPage'],
    template: `
       <section class="action-menu">
        <div class="top-actions-menu">
        <div class="action-to-the-currlist">
        <svg-icons name="checkBox"/>  
        </div>
        <div class="pagination-curr-list">
         <span class="pagination-count">{{pagination}}</span>
          
             <div class="actoins-page">
                <button :disabled="this.currPage === 0" @click="$emit('paginationBtn',-1)" class="pagination-btn">
                <svg-icons name="newerArrow"/>  
                </button>
                <button :disabled="isDisabledBtn" @click="$emit('paginationBtn',1)" class="pagination-btn">
                <svg-icons name="olderArrow"/>  
                </button >
            </div>
        </div>

        </div>

       
        <div v-if="this.$route.query.tab === 'inbox'" class="categories-tabs">
            <div class="categories-tab-primary " @click="activeTabToggle('primary')" :class="[activeTab === 'primary' ? 'active' : '']">
                <svg-icons name="inbox"/>    
                <span>Primary</span>
            </div>

            <div class="categories-tab-social" @click="activeTabToggle('social')" :class="[activeTab === 'social' ? 'active' : '']">
                    <svg-icons name="social"/>       
                    <span>Social</span>
            </div>

            <div class="categories-tab-promotions" @click="activeTabToggle('promotions')" :class="[activeTab === 'promotions' ? 'active' : '']">
                <svg-icons name="promotions"/>        
                <span>Promotions</span>
            </div>

        </div>
        </section>
`,
    data() {
        return {
            activeTab: 'primary'
        }
    },
    components: {
        svgIcons
    },
    created() { },
    methods: {
        activeTabToggle(tab) {
            this.$router.replace({ path: '/mail' })
            this.activeTab = tab
            this.$emit('activeCetToggle', tab)
        }
    },
    computed: {
        pagination() {
            const page = this.currPage
            const perPageMails = this.showsPerPage
            const mailsLen = this.mails.length

            if (perPageMails > mailsLen) return `${(page * perPageMails) + 1} - ${mailsLen} of ${mailsLen}`
            return `${(page * perPageMails) + 1} - ${(page + 1) * perPageMails} of ${mailsLen}`
        },
        isDisabledBtn() {
            
            return ((this.currPage + 1) * this.showsPerPage >= this.mails.length)
        }

    },
    unmounted() { },
}