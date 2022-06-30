import svgIcons from './svg-icons.cmp.js'

export default {
    template: `
       <section class="action-menu">
        <div>
        <svg-icons name="checkBox"/>  
        </div>
        <div class="categories-tabs">
            <div class="categories-tab-primary active">
            <svg-icons name="inbox"/>    
            Primary</div>
            <div class="categories-tab-social">
            <svg-icons name="social"/>       
            Social</div>
            <div class="categories-tab-promotions">
            <svg-icons name="promotions"/>        
            Promotions</div>
        </div>
        </section>
`,
    data() {
        return {

        }
    },
    components: {
        svgIcons
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}