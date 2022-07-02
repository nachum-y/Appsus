import svgIcons from '../../mail/cmps/svg-icons.cmp.js'
export default {
    template: `
    <header class="main-header-mail-app keep">
        <div class="left-side">
            <span @click="$emit('openHeader')"><svg-icons name="menu"/></span>
            <svg-icons name="keep-logo"/> 
            <span class="keep-logo">Keep</span>
        </div>
        <div class="center">
            <label ref="searchBar" for="search-mail" class="search-mail">
                <input @focus="activeModal=true" @focusout="activeModal=false" type="search" name="search-mail"  v-model="inputTxt"  @input="$emit('inputTxt',inputTxt)" id="search-mail" placeholder="Search mail">
                <svg-icons name="search_icon"/>   
                <!-- <div v-if="mailToSearch" class="searchModal-header" :class="{activeModal:activeModal}" :style="modalPosHieght" ><email-list-searchbar :mailsSearch="mailToSearch" :input="inputTxt" /></div> -->
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
        svgIcons,
    },
    data() {
        return {
            inputTxt: '',
            activeModal: false,
            modalPosHieght: null,
        }
    },
    created() { },
    methods: {},
    computed: {
    },
    unmounted() { },
    mounted() {
        const elSearchBar = this.$refs.searchBar.getBoundingClientRect()
        this.modalPosHieght = `top:${elSearchBar.height - 1}px;`
    }
}