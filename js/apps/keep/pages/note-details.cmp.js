import { noteService } from "../services/note.service.js"
import notePreview from "../cmps/note-preview.cmp.js"

export default{
    template:`
        <div @click.prevent.self="close" class="screen">
            <div v-if="note" :class="note.type" class="note" >
                <note-preview :note="note"/>
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
        }
    },
    methods: {
        close(){
            this.note = null
            this.$router.push('/keep')
        }
    },
    components: {
        notePreview,
    },

}