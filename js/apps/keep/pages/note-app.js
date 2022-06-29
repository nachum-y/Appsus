
// This component renders the <note-preview> component that allow viewing the notes preview, and also changing color, pin, etc.
import { noteService } from "../services/note.service.js"
import noteList from "../cmps/note-list.cmp.js"

export default{
    template: ` 
        <section v-if="notes" class="note-app">
            <note-list :notes="notesToShow"/>
        </section>
    `,
    components:{
        noteList,
    },
    data() {
        return {
            notes: null,
        }
    },
    created() {
        noteService.query()
        .then(notes => {
            this.notes = notes
        })

    },
    computed: {
        notesToShow() {
            const notes = this.notes
            return notes
        },
    }
}