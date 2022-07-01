export default {
    props: ['info', 'isEditable'],
    template: `
            <h4>{{info.title}}</h4>
            <img :src="info.url" alt="" srcset="">
        `,
        data() {
            return {

            }
        },
        methods: {

        }
} 