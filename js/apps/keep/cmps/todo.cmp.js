export default{
    props: ['todo'],
    template:`
        <li>
            <h4>{{todo.txt}}</h4>
            {{formatedDate}}
        </li>
    `,
    computed:{
        formatedDate(){
            if (!this.todo.doneAt) return 'incomplete'
            return new Date(this.todo.doneAt)
        }
    }

}