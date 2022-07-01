import todo from "./todo.cmp.js"

export default {
    props: ['info', 'isEditable'],
    emits: ['updateNote'],
    name: 'note-todo-list',
    template: `
            <h3 class="note-title">{{info.label}}</h3>
            
            <div v-if="active" class="active-todos todos-list">
                <ul class="clean-list">
                <li class="todo-line" v-for="(todo, index) in active" :key="index">
                    <todo @todo-update="update" :todo="todo" :list="'active'" :index="index" :isEditable="isEditable"/>
                </li>
            </ul>
            </div>
            <div v-if="completed" class="completed-todos todos-list">
                <h4>{{completedTodos}} completed items</h4>
                <ul  class="clean-list">
                    <li class="todo-line" v-for="(todo, index) in completed" :key="index">
                        <todo @todo-update="update" :todo="todo" :list="'completed'" :index="index" :isEditable="isEditable"/>
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
                list: '',

            }
        },
        methods: {
            devidetodos(){
                this.completed = this.info.todos.filter(todo => todo.doneAt)
                this.active =  this.info.todos.filter(todo => !todo.doneAt)
           },
           update(action){
                console.log(action);
                const {type, list, index} = action
                switch (action.type) {
                    case 'remove':
                            this[list].splice(index,1)
                        break;
                    case 'toggle':
                            this[list][index].doneAt = this[list][index].doneAt ? null : Date.now()
                            this.devidetodos()
                        break;
                }
                
                const allTodos = [...this.active,...this.completed]
                this.info.todos = allTodos
                this.$emit('updateNote', this.info)
            }
        },
        computed:{
            completedTodos(){
                return this.completed.length
            }
        },
        components:{
            todo,
        },
        watch: {
            info: {
                handler() {
                    this.devidetodos()
                },
                deep: true
            },
        }

} 