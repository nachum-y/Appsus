import todo from "./todo.cmp.js"

export default {
    props: ['info', 'isEditable'],
    template: `
            <h3>{{info.label}}</h3>
            <ul>
                <li v-for="(todo, index) in info.todos" :key="index">
                    <todo :todo="todo"/>
                </li>
            </ul>
        `,
        data() {
            return {

            }
        },
        methods: {
            formatedDate(date){
                if (!date) return 'incomplete'
                return new Date(date)
            }

        },
        components:{
            todo,
        }

} 