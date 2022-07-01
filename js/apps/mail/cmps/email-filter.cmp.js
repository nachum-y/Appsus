// Allow filtering
// Start with Search and Read / Unread

export default {
    props: ['filters'],
    template: `
        <section class="mails-filter">
            <input type="text" />
            <label>
                Search
                <input  @input="setFilter" type="text" v-model="filterBy.vendor" placeholder="Search...">
            </label>
            <label>
                Min Speed:
                <input type="range" min="0" max="500" @change="setFilter" v-model.number="filterBy.minSpeed" />
                <span>{{filterBy.send}}</span>
            </label>
            {{txt}}
        </section>
    `,
    data() {
        return {
            txt: '',
            filterBy: {
                inbox: null,
                send: null,
            }
        }
    },
    created() {
        const { txt, inbox, unRead } = this.filters
       
        console.log(this.filters)
        // {this.txt,this.filterBy.inbox,this.filterBy.unread} 
        console.log(txt)
    },
    methods: {
        setFilter() {
            this.$emit('filtered', { ...this.filterBy })
        }
    },
    computed: {},
    watch: {
        txt(newVal, oldVal) {
            console.log('Txt changed from:', oldVal, 'to:', newVal)
        },
        filterBy: {
            handler(newVal) {
                console.log('Filter changed', newVal)
            },
            deep: true
        }
    },
    mounted(){
        this.txt = this.filters.txt
    }
}