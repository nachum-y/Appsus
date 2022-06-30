import svgIcons from './svg-icons.cmp.js'
import { eventBus } from '../../../services/eventBus-service.js';

export default {
    template: `
    <header class="main-header-mail-app">
        <div class="left-side">
            <svg-icons name="menu"/>
            <svg-icons name="logo"/>
        </div>
        <div class="center">
            <label for="search-mail" class="search-mail">
                <input type="search" name="search-mail" id="search-mail" placeholder="Search mail">
                <svg-icons name="search_icon"/>   
            </label>
        </div>
        <div class="right-side">
          <svg-icons name="help"/>
          <svg-icons name="settings"/>
          <img src="assets/imgs/icons/Avatar.png" alt="Avatar">
        </div>
    </header>    

`,
    components: {
        svgIcons
    },
    data() {
        return {}
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
}