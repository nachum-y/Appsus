import icons from "./icons.cmp.js"

export default{
    props: ['noteColor'],
    emits: ['setBgColor'],
    name: 'note-color-menu',
    template: `

        <span class="color defult" :class="isSelected('#fff')" @click="setBgColor('#fff')"><icons name="color-circle" color="#fff" /></span>
        <span class="color" v-for="(color) in colors" :class="isSelected(color.code)"  @click="setBgColor(color.code)"><icons name="color-circle" :color="color.code" /></span>
    
    `,
    data() {
        return {
            colors: [
                {name: 'red', code:'#f28b82'}, 
                {name: 'orange', code:'#fbbc04'},
                {name: 'orange', code:'#fff476'},
                {name: 'orange', code:'#ccfd90'},
                {name: 'orange', code:'#a8ffeb'},
                {name: 'orange', code:'#cbf1f9'},
                {name: 'orange', code:'#aecbfb'},
                {name: 'orange', code:'#d7aefb'},
                {name: 'orange', code:'#fccfe8'},
                {name: 'orange', code:'#e7c9a8'},
                {name: 'orange', code:'#e8eaed'},
            ],
        }
    },
    methods: {
        setBgColor(code){
        this.$emit('setBgColor', code)
        },
        isSelected(color){
            if (this.noteColor === color ) return 'selected'
        }
    },
    components:{
        icons
    }


}