// note-list componant
import notePreview from "./note-preview.cmp.js"
import icons from "./icons.cmp.js"
import colorMenu from "./color-menu.cmp.js"



export default {
    props: ['notes'],
    template: `
    <section v-if="notes" class="notes-container" >
        
        <div v-if="pinnedNotes.length > 0" class="note-list-holder">
           <h2>pinned</h2>
            
            <div class="note-list">
                <div v-for="(note,idx) in pinnedNotes" 
                    :key="note.id" 
                    :style="setBackground(note)"
                    :class="note.type" class="note defult-text" 
                    @click.self.stop="editNote(note.id)">

                        <div class="pin-btn action-btn" @click="togglepin(note)"><icons name="pinned" color="#777" /></div>
                            <router-link :to="'/keep/'+note.id">
                                <div class="note-content"><note-preview :note="note" :isEditable="isEditable" /></div>
                            </router-link>
                        <div class="actions">
                            <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                            <span class="action-btn copy-btn" @click="copy(note)"><icons name="copy" color="#777" /></span>
                            <span class="action-btn color-btn" @click="openMenu(note.id)"><icons name="color" color="#777" /></span>
                        </div>
                        <div class="color-menu" v-if="selectedNote === note.id" @click-outside="closeColorMenu">
                            <color-menu @setBgColor="setBgColor" :noteColor="note.style.backgroundColor"/>
                        </div>

                </div>
            
            </div>
        </div>
        
        <div v-if="unPinnedNotes.length > 0" class="note-list-holder" >
            <h2>other</h2>
            
            <div class="note-list">
                <div v-for="(note,idx) in unPinnedNotes" 
                    :key="note.id" 
                    :style="setBackground(note)"
                    :class="note.type" class="note defult-text" 
                    @click.self.stop="editNote(note.id)">

                    <div class="pin-btn action-btn" @click="togglepin(note)"><icons name="unpinned" color="#777" /></div>
                        <router-link :to="'/keep/'+note.id">
                            <div class="note-content"><note-preview :note="note" :isEditable="isEditable"/></div>
                        </router-link>
                        <div class="actions">
                            <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                            <span class="action-btn copy-btn" @click="copy(note)"><icons name="copy" color="#777" /></span>
                            <span class="action-btn color-btn" @click="openMenu(note.id)"><icons name="color" color="#777" /></span>
                        </div>
                        <div class="color-menu" v-if="selectedNote === note.id" >
                            <color-menu @setBgColor="setBgColor" :noteColor="getBackground(note)"/>
                        </div>
                </div>
            </div>
        
        </div>
    </section>
    `,
    created() {
        this.devideNotes()
    },
    data() {
        return {
            pinnedNotes: null,
            unPinnedNotes: null,
            isEditable: false,
            selectedNote: null,
            
        }
    },
    methods: {
        remove(noteId){
            this.$emit('removeNote', noteId)
        },
        copy(note){
            this.$emit('copyNote', note)
        },
        devideNotes(){
            this.pinnedNotes = this.notes.filter(note => note.isPinned)
            this.unPinnedNotes = this.notes.filter(note => !note.isPinned)
        },
        togglepin(note){
            this.$emit('togglepin', note)
            this.devideNotes()
        },
        editNote(noteId){
            this.$router.push(`/keep/${noteId}`)
            this.closeColorMenu()
        },
        getBackground(note){
            if(!note.style) return '#fff'
            return note.style.backgroundColor
        },
        setBackground(note){
            if(!note.style) return
            return `background-color:${note.style.backgroundColor}`
        },
        openMenu(noteId){
            if(noteId === this.selectedNote) this.selectedNote = null
            else this.selectedNote = noteId
        },
        setBgColor(color){
            const idx = this.notes.findIndex(note => note.id === this.selectedNote)
            const note = this.notes[idx]
            if (!note.style){
                note.style = {backgroundColor: color}
            }else {
                note.style.backgroundColor = color
            }
            this.$emit('save', note)
            this.closeColorMenu()
        },
        closeColorMenu(){
            this.selectedNote = null
        }

    },
    computed: {},
    components: {
        notePreview,
        icons,
        colorMenu
    },
    watch: {
        notes: {
            handler() {
                this.devideNotes()
            },
            deep: true
        },
    }
}