
// This component renders the <note-preview> component that allow viewing the notes preview, and also changing color, pin, etc.
import { noteService } from "../services/note.service.js"
import noteList from "../cmps/note-list.cmp.js"
import noteAdd from "../cmps/note-add.cmp.js"
import noteDetails from "./note-details.cmp.js"
import noteHeader from "../cmps/note-header-cmp.js"
export default{
    template: ` 
        <section v-if="notes" class="note-app">
            
            <router-view @removeNote="removeNote" @updated="update" @togglepin="togglepin"/>
            <note-header @openHeader="$emit('openHeader')" @inputTxt="searchByTxt"/>
            <note-add @newNote="addNote"/>
            <note-list :notes="notesToShow" @removeNote="removeNote" @copyNote="copyNote" @togglepin="togglepin" @save="save"/>
        </section>
    `,
    components:{
        noteList,
        noteAdd,
        noteDetails,
        noteHeader
    },
    data() {
        return {
            notes: null,
            searchFilter: null
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
                this.update(updatedNote)
            })
        },
        update(updatedNote){
            const idx = this.notes.findIndex(note => note.id === updatedNote.id)
            this.notes.splice(idx,1,updatedNote)
        },
        save(note){
            noteService.updateNote(note).then(updatedNote => this.update(updatedNote))
        },
        searchByTxt(input){
            if (input === '') this.searchFilter = null 
            else this.searchFilter = input
        }
    },
    computed: {
        notesToShow() {
            let notes = this.notes
            
            if (this.searchFilter){
                const regex = new RegExp(this.searchFilter, "i")
                notes = notes.filter(note =>
                    {   if (note.type === 'note-img') return regex.test(note.info.title)
                        if (note.type === 'note-txt'){
                            return note.info.txt.some(line => regex.test(line))
                        }
                        if (note.type === 'note-todos') return regex.test(note.info.title)
                        else return false
                    }
                )


            }
            return notes
        },
        
    }
}