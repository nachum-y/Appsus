// This component renders the <note-preview> component that allow viewing the notes preview, 
// and also changing color, pin, etc.
import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
export default {
    props: ['note'],
    template: `
        <component :is="note.type"  
                    :info="note.info">
        </component>
    `,
    data() {
        return {}
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos
    }
}