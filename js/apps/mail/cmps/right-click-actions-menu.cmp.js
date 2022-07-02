import svgIcons from './svg-icons.cmp.js'
export default {
    props: ['mail', 'pos'],
    template: `
    <section class="right-click-actions-menu" :style="postionModal" v-if="mail">
        <div class="delet-action-right-click" @click="$emit('RemoveMail',mail)"><span><svg-icons name="draft"/></span><span>Delete</span></div>
        <div v-if="mail.isRead" class="delet-action-right-click" @click="$emit('makeAsUnReadMail',mail)"><span><svg-icons name="unread"/></span><span> Mark as unread</span></div>
        <div v-if="!mail.isRead" class="delet-action-right-click" @click="$emit('makeAsReadMail',mail)"><span><svg-icons name="unread"/></span><span> Mark as read</span></div>
        <div class="delet-action-right-click"><span><svg-icons name="draft"/></span><span> Move To:</span></div>
    
    </section>
`,
    data() {
        return {
            cordsX: null,
            cordsY: null,
        }
    },
    components:{
        svgIcons
    },
    methods: {
        escapekeylistener(evt) {
            console.log(evt)
            this.cordsX = evt.pageX
            this.cordsY = evt.pageY
        },
    },
    computed: {
        postionModal() {
            let y = window.innerHeight
            let x = window.innerWidth
            const top = this.pos.eltop
            const left = this.pos.left
            if (this.pos.left + 300 > x) return `top:${top}px; left:${this.pos.left - 300}px;`
            return `top:${top}px; left:${this.pos.left}px;`
        }
    },
    created() {
        console.log(window.innerWidth)
    },
    unmounted() {

    },
    destroyed() {
    }
}