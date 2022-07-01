import todo from "./todo.cmp.js"

export default {
    props: ['info', 'isEditable'],
    emits: ['updateNote'],
    template: `
            <h3 class="note-title">{{info.label}}</h3>
            
            <div v-if="active" class="active-todos todos-list">
                <ul class="clean-list">
                <li class="todo-line" v-for="(todo, index) in active" :key="index">
                    <todo :todo="todo"/>
                </li>
            </ul>
            </div>
            <div v-if="completed" class="completed-todos todos-list">
                <h4>{{completedTodos}} completed items</h4>
                <ul  class="clean-list">
                    <li class="todo-line" v-for="(todo, index) in completed" :key="index">
                        <todo :todo="todo"/>
                    </li>
                </ul>
            </div>
            
        `,
        created() {
            this.devidetodos()
        },
        data() {
            return {
                completed: null,
                active: null,

            }
        },
        methods: {
            devidetodos(){
                this.completed = this.info.todos.filter(todo => todo.doneAt)
                this.active =  this.info.todos.filter(todo => !todo.doneAt)
           },
        },
        computed:{
            completedTodos(){
                return this.completed.length
            }
        },
        components:{
            todo,
        }

} 