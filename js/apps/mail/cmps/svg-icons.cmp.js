export default {
    props: ['name', 'color'],
    template: `
    <svg v-if="name === 'inbox'"  width="18" height="18" viewBox="0 0 18 18"  xmlns="http://www.w3.org/2000/svg">
     <path :fill="color" d="M15.4167 0.75H2.57417C1.55667 0.75 0.759167 1.56583 0.759167 2.58333L0.75 15.4167C0.75 16.425 1.55667 17.25 2.57417 17.25H15.4167C16.425 17.25 17.25 16.425 17.25 15.4167V2.58333C17.25 1.56583 16.425 0.75 15.4167 0.75ZM15.4167 11.75H11.75C11.75 13.2717 10.5125 14.5 9 14.5C7.4875 14.5 6.25 13.2717 6.25 11.75H2.57417V2.58333H15.4167V11.75Z" fill="#202124"/>
    </svg>

    <svg  v-if="name === 'logo'" width="109" height="40" viewBox="0 0 109 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <rect width="109" height="40" fill="url(#pattern0)"/><defs> <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_32_5778" transform="scale(0.00917431 0.025)"/></pattern><image id="image0_32_5778" width="109" height="40" xlink:href="data:image/png;base64,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"/></defs>
    </svg>

    <svg v-if="name === 'menu'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black" fill-opacity="0.54"/>
    </svg>

    <svg  v-if="name === 'search_icon'" class="search-icon-header" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 13L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L13.2762 14.71L19 20.49L20.49 19L14.5 13ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="black" fill-opacity="0.54"/>
    </svg>

    <svg  v-if="name === 'help'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 18H13V16H11V18ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 6C9.79 6 8 7.79 8 10H10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 12 11 11.75 11 15H13C13 12.75 16 12.5 16 10C16 7.79 14.21 6 12 6Z" fill="black" fill-opacity="0.54"/>
    </svg>

    <svg  v-if="name === 'settings'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.1401 12.9359C19.1761 12.6359 19.2001 12.3239 19.2001 11.9999C19.2001 11.6759 19.1761 11.3639 19.1281 11.0639L21.1561 9.4799C21.3361 9.3359 21.3841 9.0719 21.2761 8.8679L19.3561 5.5439C19.2361 5.3279 18.9841 5.2559 18.7681 5.3279L16.3801 6.2879C15.8761 5.9039 15.3481 5.5919 14.7601 5.3519L14.4001 2.8079C14.3641 2.5679 14.1601 2.3999 13.9201 2.3999H10.0801C9.84011 2.3999 9.64811 2.5679 9.61211 2.8079L9.25211 5.3519C8.66411 5.5919 8.12411 5.9159 7.63211 6.2879L5.24411 5.3279C5.02811 5.2439 4.77611 5.3279 4.65611 5.5439L2.73611 8.8679C2.61611 9.0839 2.66411 9.3359 2.85611 9.4799L4.88411 11.0639C4.83611 11.3639 4.80011 11.6879 4.80011 11.9999C4.80011 12.3119 4.82411 12.6359 4.87211 12.9359L2.84411 14.5199C2.66411 14.6639 2.61611 14.9279 2.72411 15.1319L4.64411 18.4559C4.76411 18.6719 5.01611 18.7439 5.23211 18.6719L7.62011 17.7119C8.12411 18.0959 8.65211 18.4079 9.24011 18.6479L9.60011 21.1919C9.64811 21.4319 9.84011 21.5999 10.0801 21.5999H13.9201C14.1601 21.5999 14.3641 21.4319 14.3881 21.1919L14.7481 18.6479C15.3361 18.4079 15.8761 18.0839 16.3681 17.7119L18.7561 18.6719C18.9721 18.7559 19.2241 18.6719 19.3441 18.4559L21.2641 15.1319C21.3841 14.9159 21.3361 14.6639 21.1441 14.5199L19.1401 12.9359Z" stroke="black" stroke-opacity="0.54" stroke-width="2"/>
       <path d="M8.40039 11.9999C8.40039 13.9799 10.0204 15.5999 12.0004 15.5999C13.9804 15.5999 15.6004 13.9799 15.6004 11.9999C15.6004 10.0199 13.9804 8.3999 12.0004 8.3999C10.0204 8.3999 8.40039 10.0199 8.40039 11.9999Z" fill="black" fill-opacity="0.54"/>
    </svg>

   
    <svg v-if="name === 'sideNavCompose'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="10" width="10" height="4" fill="#F2BE42"/>
        <rect x="10" y="14" width="4" height="10" fill="#58A55C"/>
        <path d="M10 0H14V10L10 14V0Z" fill="#D95140"/>
        <path d="M14 10H24V14H10L14 10Z" fill="#5186EC"/>
    </svg>

    <svg v-if="name === 'checkBox'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.6667 4.83333V17.6667H4.83333V4.83333H17.6667ZM17.6667 3H4.83333C3.825 3 3 3.825 3 4.83333V17.6667C3 18.675 3.825 19.5 4.83333 19.5H17.6667C18.675 19.5 19.5 18.675 19.5 17.6667V4.83333C19.5 3.825 18.675 3 17.6667 3Z" fill="black" fill-opacity="0.16"/>
    </svg>

    <svg v-if="name === 'star'" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3875 14.1886L9.99992 13.9547L9.61237 14.1886L5.46912 16.6893L6.56864 11.9761L6.67148 11.5353L6.32933 11.2389L2.66788 8.06696L7.48749 7.65807L7.93814 7.61983L8.11462 7.20342L9.99992 2.7552L11.8852 7.20342L12.0617 7.61983L12.5124 7.65807L17.332 8.06696L13.6705 11.2389L13.3284 11.5353L13.4312 11.9761L14.5307 16.6893L10.3875 14.1886Z" stroke="black" stroke-opacity="0.16" stroke-width="1.5"/>
    </svg>

    <svg v-if="name === 'clipContent'" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.95683 16.4923L8.39856 11.5218L8.75988 10.9999L8.39856 10.4781L4.95683 5.5075L13.2916 5.49992C13.2917 5.49992 13.2918 5.49992 13.2919 5.49992C13.6011 5.50004 13.8746 5.65202 14.0369 5.88188L14.0381 5.88364L17.6677 10.9999L14.0381 16.1162L14.0369 16.118C13.8745 16.3479 13.6009 16.4999 13.2916 16.4999L4.95683 16.4923Z" stroke="black" stroke-opacity="0.16" stroke-width="1.83333"/>
    </svg>






`,

    data() {
        return {
            books: null,
            selectedBook: null,
            filterBy: null,
        }
    },
    created() {
        console.log(this.color)
    },
    methods: {

    },
    computed: {

    }
}