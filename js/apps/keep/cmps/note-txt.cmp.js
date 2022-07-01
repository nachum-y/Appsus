export default {
    props: ['info', 'isEditable'],
    emits: ['updateNote'],
    template: `

            <div @input="OnInput" @focusout="save" :contenteditable="isEditable" class="txt-note-content">
                <span v-for="line in info.txt">{{line}}<br></span>
            </div>
        `,
        data() {
            return {
                newData: ''
            }
        },
        methods: {
            OnInput(ev){
               this.newData = ev.target.innerText
            },
            save(){
                this.info.txt = this.newData.split('\n')
                this.$emit('updateNote', this.info)
            }
        },
} 