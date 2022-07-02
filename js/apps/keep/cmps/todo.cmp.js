import icons from "./icons.cmp.js"
export default{
    props: ['todo', 'index', 'isEditable', 'list'],
    emits: ['todo-update'],
    template:`

            <div class="todo-status">
                <span class="action-btn todo-btn" @click="update('toggle',index, list)"><icons :name="setIcon" color="#777"/></span>
                <span v-if="!isEditable" class="todo-txt">{{todo.txt}}</span>
                <input v-else @focusout="update('txt',index, list)"  class="todo-txt clean-style" v-model="todo.txt"/>
            </div>
            <span v-if="isEditable" class="todo-date">{{formatedDate}}</span>
            <span class="remove-todo-btn action-btn" @click="update('remove',index, list)"><icons :name="'delete-todo'" color="#777"/></span>

    `,
    methods: {
        update(type,index,list){
            if (!this.isEditable) return
            const action = {
                    list,
                    type,
                    index 
            }
            this.$emit('todo-update', action)
        }
    },
    computed:{
        formatedDate(){
            if (!this.todo.doneAt) return 
            return new Date(this.todo.doneAt).toDateString()
        },
        setIcon(){
            if (!this.todo.doneAt) return 'todo'
            return 'done'
        }
    },
    components:{
        icons,
    }    

}