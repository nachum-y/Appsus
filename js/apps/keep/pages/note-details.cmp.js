import { noteService } from "../services/note.service.js"
import notePreview from "../cmps/note-preview.cmp.js"
import icons from "../cmps/icons.cmp.js"
import colorMenu from "../cmps/color-menu.cmp.js"


export default {
    template: `
        <div @click.prevent.self="close" class="screen">
            <div v-if="note" :class="note.type" class="note details" :style="applyBackgroundColor()" >
            <div class="pin-btn action-btn" @click="togglepin"><icons name="unpinned" color="#777" /></div>
                
                <div class="note-content">
                    <note-preview @updateNote="update" :note="note" :isEditable="isEditable"/>
                </div>

            <div class="actions">
                <span class="action-btn remove-btn" @click="remove(note.id)"><icons name="remove" color="#777" /></span>
                <span class="action-btn color-btn" @click="isOpen = !isOpen"><icons name="color" color="#777" /></span>
                <span class="close-btn" @click="close">close</span>
            </div>
            <div class="color-menu" v-if="isOpen" >
                <color-menu @setBgColor="changeBackgroundColor" :noteColor="getBackground"/>
            </div>
            </div>

        </div> 
    `,
    created() {
        const id = (this.$route.params.noteId)
        noteService.get(id).then(note => this.note = note)
    },
    data() {
        return {
            note: null,
            isEditable: true,
            isOpen: false,
        }
    },
    methods: {
        close() {
            this.note = null
            this.$router.push('/keep')
        },
        remove(noteId) {
            this.$emit('removeNote', noteId)
            this.close()
        },
        update(newData) {
            this.note.info = newData
            noteService.updateNote(this.note).then(note => {
                this.$emit('updated', note)
            })
        },
        togglepin(){
            this.$emit('togglepin', this.note)
        },
        getBackground(){
            if(!this.note.style) return '#fff'
            return this.note.style.backgroundColor
        },
        applyBackgroundColor() {
            if (!this.note.style) return
            return `background-color:${this.note.style.backgroundColor}`
        },
        changeBackgroundColor(color) {
            if (!this.note.style) {
                this.note.style = { backgroundColor: color }
            } else {
                this.note.style.backgroundColor = color
            }
            noteService.updateNote(this.note).then(note => {
                this.$emit('updated', note)
                this.isOpen = false
            })

        }
    },
    components: {
        notePreview,
        icons,
        colorMenu
    },

}