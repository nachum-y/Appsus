export default {
    props: ['info', 'isEditable'],
    template: `

            <div @input="OnInput" :contenteditable="isEditable">
                <span v-for="line in info.txt">{{line}}<br></span>
            </div>
        `,
        data() {
            return {
                newData: ''
            }
        },
        methods: {
            OnInput(ev){
               this.newData = ev.target.innerText
               console.log(this.newData);
            }
        },
} 