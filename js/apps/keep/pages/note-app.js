
// This component renders the <note-preview> component that allow viewing the notes preview, and also changing color, pin, etc.
import { noteService } from "../services/note.service.js"
import noteList from "../cmps/note-list.cmp.js"
import noteAdd from "../cmps/note-add.cmp.js"

export default{
    template: ` 
        <section v-if="notes" class="note-app">
            <note-add @newNote="addNote"/>
            <note-list :notes="notesToShow" @removeNote="removeNote" @copyNote="copyNote" @togglepin="togglepin"/>
        </section>
    `,
    components:{
        noteList,
        noteAdd
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
    methods: {
        addNote(note){
            noteService.addNewNote(note).then(note => {
                this.notes.unshift(note)
            })
        },
        removeNote(noteId){
            noteService.removeNoteById(noteId).then(()=>{
                const idx = this.notes.findIndex(note => note.id === noteId)
                this.notes.splice(idx,1)
            })
        },
        copyNote(note){
            noteService.copyNote(note).then(note => {
                this.notes.unshift(note)
            })
        },
        togglepin(note){
            noteService.togglepin(note).then(updatedNote =>{
                const idx = this.notes.findIndex(note => note.id === updatedNote.id)
                this.notes.splice(idx,1,updatedNote)
            })
        }
    },
    computed: {
        notesToShow() {
            const notes = this.notes
            return notes
        },
        
    }
}