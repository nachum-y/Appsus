import { router } from './router.js'
import appHeader from './cmps/app-header.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'

const options = {
    template: `
        <section>
            <app-header v-if="isOpenHeader" @closeHeader="closeHeader" />
            <user-msg/>
            <router-view @openHeader="openHeader"/>
        </section>

    `,
    data() {
        return {
            isOpenHeader: null
        }
    },
    components: {
        appHeader,
        userMsg,
    },
    methods: {
        openHeader() {
            this.isOpenHeader = true
            console.log(this.isOpenHeader)
        },
        closeHeader() {
            this.isOpenHeader = false
        }
    }
}


const app = Vue.createApp(options)
app.use(router)
app.mount('#app')

