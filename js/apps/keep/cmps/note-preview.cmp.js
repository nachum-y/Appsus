// This component renders the <note-preview> component that allow viewing the notes preview, 
// and also changing color, pin, etc.
import noteTxt from "./note-txt.cmp.js"
import noteImg from "./note-img.cmp.js"
import noteTodos from "./note-todos.cmp.js"
import noteVideo from "./note-video.cmp.js"
export default {
    props: ['note', 'isEditable'],
    template: `
        <component 
            :is="note.type"  
            :info="note.info" 
            :isEditable="isEditable"
        >
        </component>
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos,
        noteVideo
    },
}