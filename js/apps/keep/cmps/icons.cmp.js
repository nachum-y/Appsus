export default {
    props: ['name', 'color'],
    template: `
        <svg v-if="name === 'img'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="color" ><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/></svg>
        <svg v-if="name === 'list'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="color"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/></svg>
        <svg v-if="name === 'txt'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="color"><path d="M20.41 4.94l-1.35-1.35c-.78-.78-2.05-.78-2.83 0L13.4 6.41 3 16.82V21h4.18l10.46-10.46 2.77-2.77c.79-.78.79-2.05 0-2.83zm-14 14.12L5 19v-1.36l9.82-9.82 1.41 1.41-9.82 9.83z"></path></svg>
        <svg v-if="name === 'remove'" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" :fill="color"><path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path><path d="M9 8h2v9H9zm4 0h2v9h-2z"></path></svg>
        <svg v-if="name === 'copy'" enable-background="new 0 0 32 32" height="16" viewBox="0 0 32 32" width="16" :fill="color" xmlns="http://www.w3.org/2000/svg"><g id="Layer_1"><g><path d="m26.5718 2.1602h-16.874c-1.7964 0-3.2578 1.4658-3.2578 3.2676v1.0117h-1.0225c-1.7964 0-3.2578 1.4658-3.2578 3.2686v16.8643c0 1.8018 1.4614 3.2676 3.2578 3.2676h16.8745c1.8022 0 3.2681-1.4658 3.2681-3.2676v-1.0117h1.0117c1.8022 0 3.2686-1.4658 3.2686-3.2686v-16.8644c-.0001-1.8017-1.4664-3.2675-3.2686-3.2675zm-3.0117 24.4121c0 .6992-.5688 1.2676-1.2681 1.2676h-16.8745c-.6934 0-1.2578-.5684-1.2578-1.2676v-16.8643c0-.6992.5645-1.2686 1.2578-1.2686h2.0225 14.852c.6992 0 1.2681.5693 1.2681 1.2686v14.8525zm4.2802-4.2803c0 .6992-.5688 1.2686-1.2686 1.2686h-1.0117v-13.8526c0-1.8027-1.4658-3.2686-3.2681-3.2686h-13.852v-1.0117c0-.6992.5645-1.2676 1.2578-1.2676h16.874c.6997 0 1.2686.5684 1.2686 1.2676z"/></g></g></svg>
        <svg v-if="name === 'pinned'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" :fill="color"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 4a2 2 0 0 0-2-2H9c-1.1 0-2 .9-2 2v7l-2 3v2h6v5l1 1 1-1v-5h6v-2l-2-3V4z"/></svg>
        <svg v-if="name === 'unpinned'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  :fill="color"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 4v7l2 3v2h-6v5l-1 1-1-1v-5H5v-2l2-3V4c0-1.1.9-2 2-2h6c1.11 0 2 .89 2 2zM9 4v7.75L7.5 14h9L15 11.75V4H9z"/></svg>


`,
}
