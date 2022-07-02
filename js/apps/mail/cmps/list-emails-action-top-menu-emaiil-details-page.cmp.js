import svgIcons from './svg-icons.cmp.js'
export default {
    template: `
        <section class="action-menu">
        <div class="top-actions-menu">
        <div class="action-to-the-currlist">
        <svg-icons name="checkBox"/>  
        </div>
        <div class="pagination-curr-list">
         <span class="pagination-count">1 – 25 of 100</span>
          
             <div class="actoins-page">
                <span>
                <svg-icons name="newerArrow"/>  
                </span>
                <span>
                <svg-icons name="olderArrow"/>  
                </span>
            </div>
        </div>

        </div>
        </section>
`,
    data() {
        return {}
    },
    components:{
        svgIcons,
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}