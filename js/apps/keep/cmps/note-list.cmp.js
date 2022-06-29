// note-list componant
import notePreview from "./note-preview.cmp.js"
export default{
    props: ['notes'],
    template: `
    <section class="note-list">

            <div v-for="(note,idx) in notes" :key="note.id" :class="note.type" class="note" >
                <note-preview :note="note"/>
                <div class="actions"><span class="remove-btn" @click="remove(note.id)">remove</span></div>
            </div>

    </section>
    `,
    components: {
        notePreview,
    },
    data() {
        return {}
    },
    methods: {
       remove(noteId){
            this.$emit('removeNote', noteId)
        }
    },
    computed: {},
}