import { noteService } from "../services/note.service.js"
import notePreview from "../cmps/note-preview.cmp.js"
import icons from "../cmps/icons.cmp.js"
import { eventBus } from '../../../services/eventBus-service.js'


export default{
    template:`
        <div @click.prevent.self="close" class="screen">
            <div v-if="note" :class="note.type" class="note details" >
            <div class="pin-btn action-btn" @click="togglepin(note)"><icons name="unpinned" color="#777" /></div>
                
                <div class="note-content">
                    <note-preview @updateNote="update" :note="note" :isEditable="isEditable"/>
                </div>

            <div class="actions">
                <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                <span class="close-btn" @click="close">close</span>
            </div>
            </div>

        </div> 
    `,
    created() {
        const id = this.$route.params.noteId
        noteService.get(id).then(note => this.note = note)
        console.log(id);
    },
    data() {
        return {
            note: null,
            isEditable: true,
        }
    },
    methods: {
        close(){
            this.note = null
            this.$router.push('/keep')
        },
        remove(noteId){
            this.$emit('removeNote', noteId)
            this.close()
        },
        update(newData){
            this.note.info = newData
            noteService.updateNote(this.note).then(note => {
                this.$emit('updated', note)
            })
        }
    },
    components: {
        notePreview,
        icons,
    },

}