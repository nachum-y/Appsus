// note-list componant
import notePreview from "./note-preview.cmp.js"
import icons from "./icons.cmp.js"
export default{
    props: ['notes'],
    template: `
    <section v-if="pinnedNotes && unPinnedNotes" class="notes-container">
        <div class="note-list-holder">
            <h2>pinned</h2>
            <div class="note-list">
                <div v-for="(note,idx) in pinnedNotes" :key="note.id" :class="note.type" class="note defult-text" >
                        <div class="note-content">
                            <note-preview :note="note"/>
                        </div>
                    <div class="pin-btn action-btn" @click="togglepin(note)"><icons name="pinned" color="#777" /></div>
                    <div class="actions">
                        <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                        <span class="action-btn remove-btn" @click="copy(note)"><icons name="copy" color="#777" /></span>
                    </div>
                </div>
        </div>
        </div>
        <div class="note-list-holder">
            <h2>other</h2>
            <div class="note-list">
                <div v-for="(note,idx) in unPinnedNotes" :key="note.id" :class="note.type" class="note defult-text" >
                    <div class="pin-btn action-btn" @click="togglepin(note)"><icons name="unpinned" color="#777" /></div>
                        <div class="note-content">
                            <note-preview :note="note"/>
                        </div>
                    <div class="actions">
                        <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                        <span class="action-btn remove-btn" @click="copy(note)"><icons name="copy" color="#777" /></span>
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
            unPinnedNotes: null
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
        }
    },
    computed: {},
    components: {
        notePreview,
        icons
    },
}