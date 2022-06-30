import icons from "./icons.cmp.js"
export default {
    template:`

        <div @click.self.prevent="add" class="add-note defult-text">
            <div class="add-note-box">
                <div class="take-a-note" v-on:input="setData" contenteditable="true" spellcheck="false">{{setPlaceholderMsg}}</div>
                   <div class="add-note-actions">
                        <span @click="setType('note-txt')"><icons name="txt" color="#777777"/></span>
                        <span @click="setType('note-img')"><icons name="img" color="#777777"/></span>
                        <span @click="setType('note-todos')"><icons name="list" color="#777777"/></span>
                   </div>
            </div>

            </div>
    `,
    data() {
        return {
            note: {
                type: 'note-txt',
                data: '',
                content: ''
            }
        }
    },
    methods: {
        add(){
            if(!this.note.data) return
            this.$emit('newNote', this.note)
        },
        setType(type){
            this.note.type = type
        },
        setData(ev){
            this.note.data = ev.target.innerText
        }
    },
    computed:{
        setPlaceholderMsg(){
            const {type} = this.note
            switch (type) {
                case 'note-img':
                    return `Enter img URL`
                case 'note-todos':
                    return `Enter comma separated list`
                default:
                    return `What's on your mind?`
            }
        },
    },
    components: {
        icons,
    }

}