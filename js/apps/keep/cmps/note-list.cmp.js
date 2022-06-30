// note-list componant
import notePreview from "./note-preview.cmp.js"
import icons from "./icons.cmp.js"
export default{
    props: ['notes'],
    template: `
    <section class="notes-container">
        <div class="note-list">
        <div v-for="(note,idx) in notes" :key="note.id" :class="note.type" class="note defult-text" >
                <note-preview :note="note"/>
                <div class="actions">
                    <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                    <span class="action-btn remove-btn" @click="copy(note)"><icons name="copy" color="#777" /></span>
                </div>
            </div>
        </div>
 

    </section>
    `,
    components: {
        notePreview,
        icons
    },
    data() {
        return {}
    },
    methods: {
       remove(noteId){
            this.$emit('removeNote', noteId)
        },
        copy(note){
            this.$emit('copyNote', note)
        }
    },
    computed: {},
}