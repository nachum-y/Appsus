import icons from "./icons.cmp.js"
export default{
    props: ['todo'],
    template:`

            <div class="todo-status">
                <span class="action-btn todo-btn"><icons :name="setIcon" color="#777"/></span>
                <span class="todo-txt">{{todo.txt}}</span>
            </div>
            <span class="todo-date">{{formatedDate}}</span>

    `,
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