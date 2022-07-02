export default {
    props: ['info', 'isEditable'],
    emits: ['updateNote'],
    template: `

            <h3>{{info.title}}</h3>
            <div class=video-container>
                <iframe width="100%" :src="videoUrl"></iframe>
                              
            </div>

    `,
    data() {
        return {

        };
    },
    methods: {
        youtube_parser(url){
            var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
            var match = url.match(regExp);
            return (match&&match[7].length==11)? match[7] : false;
        }
    },
    computed: {
        videoUrl() {
            const embad = 'embed'
            const videoID = this.youtube_parser(this.info.url)
            const url = `https://www.youtube.com/embed/${videoID}`
            return url
        },

    }
};