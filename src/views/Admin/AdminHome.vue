<template>
    <div>
        <h1>Admin-Home</h1>
        <pre>{{ articles }}</pre>
        <b-button @click="fetchArticles">Dispatch!</b-button>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['fetchArticles']),
    },
    computed: {
        ...mapState(['account', 'articles']),
    }
}
</script>