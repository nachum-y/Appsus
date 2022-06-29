export default {
    template: `
        <header class="main-header">
            <div class="logo">
                LOGO
            </div>
            <nav>
                <ul class="nav-bar clean-list">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/mail">GMAIL</router-link></li>
                    <li><router-link to="/keep">KEEPS</router-link></li>
                </ul>
            </nav>
        </header>
            
    
    `,
    data() {
        return {

        }
    },
    created() { },
    mounted() { },
    methods: {},
    watch: {}
}