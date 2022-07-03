//Renders a list of <email-preview> pass down an email prop
// import { emailService } from '../services/email.service.js'
import svgIcons from './svg-icons.cmp.js'
import emailListRowPrivewInSearchbar from './email-list-row-privew-in-searchbar.cmp.js'

export default {
    props: ['mailsSearch', 'input'],
    template: `
    <section class="mail-list" v-if="mailsSearch" >
      <div v-for="mail in mailsSearch" :key="mail.id">
         <router-link :key="$route.fullPath" :to="'/mail/'+mail.id">
             <email-list-row-privew-in-searchbar :mail="mail" />
          </router-link>
      </div>
      <div class="press-enter-msg" v-if="mailsSearch.length > 0">
        <p class="search-for-msg"><span><svg-icons name="search" /></span>All search results for "{{input}}"</p>
        <span class="press-enter">Press ENTER</span>
    </div>
      <div class="no-search-results-searchbar-msg" v-if="mailsSearch.length === 0">No items match your search.</div>
</section>
`,
    data() {
        return {

        }
    },
    components: {
        svgIcons,
        emailListRowPrivewInSearchbar

    },
    created() {


    },
    methods: {

    },
    computed: {


    },
    unmounted() { },

}
