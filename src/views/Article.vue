<template>
    <article v-if="articles.length">
        <h2>{{ filterById.title }}</h2>
        <i>{{ filterById.date }}</i>
        <span v-html="filterById.content"></span>
        <p>{{ articles }}</p>
    </article>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
    data() {
        return {
            id: this.$route.params.id,
        }
    },
    methods: {
        ...mapActions(['fetchArticles']),
    },
    computed: {
        ...mapState(['articles']),

        filterById: function() {
            return this.articles.filter(art => art.id === this.id)[0];
        }
    },

    watch: {
        // 當$route改變時，文章重新render
        $route(to, from) {
            this.id = to.params.id;
        }
    }
}
</script>