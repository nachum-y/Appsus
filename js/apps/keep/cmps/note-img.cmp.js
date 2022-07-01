import { eventBus } from '../../../services/eventBus-service.js'

export default {
    props: ['info', 'isEditable'],
    emits: ['updateNote'],
    template: `
            <h3 
                :contenteditable="isEditable" 
                aria-multiline="false" 
                class="note-title"
                @input="OnInput"
                @focusout="save"> {{info.title}}</h3>
            
            <img :src="info.url" alt="" srcset="">
            
            <form @submit.prevent="save" v-if="isEditable">
                <input 
                    v-model="info.url" 
                    class="txt-note-new-url" 
                    type="text" 
                    placeholder="Enter New Url"/>
            </form>
            
        `,
        data() {
            return {
                newTitle: null, 
            }
        },
        methods: {
            OnInput(ev){
                this.newTitle = ev.target.innerText
            },
            save(){
                console.log('saving');
                if (this.newTitle) this.info.title = this.newTitle
                this.$emit('updateNote', this.info)
            }
        }
} 