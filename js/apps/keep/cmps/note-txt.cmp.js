export default {
    props: ['info'],
    template: `

            <div @input="OnInput" contenteditable="isEdit">
                <span v-for="line in info.txt">{{line}}<br></span>
            </div>
        `,
        data() {
            return {
                isEdit: false,
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