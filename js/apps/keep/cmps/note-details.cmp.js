import notePreview from "./note-preview.cmp.js"

export default{
    template:`
        <div :class="note.type" class="note" >
                <note-preview :note="note"/>
        </div>
    `,
    data() {
        return {
            note: null,
        }
    },
    components: {
        notePreview,
    }

}