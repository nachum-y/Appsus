import icons from "./icons.cmp.js"
export default {
    template:`
        <div class="add-note defult-text">
            <div class="add-note-box">
                <div @focusout="add" @click="clear" class="take-a-note" v-on:input="setData" contenteditable="true" spellcheck="false">{{placeholder}}</div>
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
            },
            eltextbox: null,
            placeholder: `What's on your mind?`
        }
    },
    methods: {
        add(){
            if(!this.note.data){
                this.setType('note-txt')
                this.setPlaceholder()
                return
            } 
            this.$emit('newNote', this.note)
            this.eltextbox.target.innerText = ''
            this.setType('note-txt')
            this.note.data = ''
            this.setPlaceholder()
            
        },
        setType(type){
            this.note.type = type
            this.setPlaceholder()
        },
        setPlaceholder(){
            const type = this.note.type
            switch (type) {
                case 'note-img':
                    this.placeholder =  `Enter img URL`
                    break
                case 'note-todos':
                    this.placeholder = `Enter comma separated list`
                    break
                default:
                    this.placeholder = `What's on your mind?`
                    break
            }
        },
        setData(ev){
            this.eltextbox = ev
            this.note.data = ev.target.innerText
        },
        clear(){
         this.placeholder = ''
        },
    },
    computed:{
        setColor(){
            
        },
    },
    watch: {
        
    },
    components: {
        icons,
    }
    

}

