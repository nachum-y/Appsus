export default {
    template:`
        <form @submit.prevent="add" class="add-note">
            <input v-model="note.data" type="text" :placeholder="setPlaceholderMsg">
                <li @click="setType('note-txt')">text</li>
                <li @click="setType('note-img')">Img</li>
                <li @click="setType('note-todos')">List</li>
            <pre>{{note}}</pre>
        </form>
    `,
    data() {
        return {
            note: {
                type: 'note-txt',
                data: ''
            }
        }
    },
    methods: {
        add(){
            this.$emit('newNote', this.note)
        },
        setType(type){
            this.note.type = type
        }
    },
    computed:{
        setPlaceholderMsg(){
            const {type} = this.note
            switch (type) {
                case 'note-img':
                    return `Enter img URL`
                case 'note-todos':
                    return `Enter comma separated list`
                default:
                    return `What's on your mind?`
            }
        },
    }

}