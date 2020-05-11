<template>
    <div id="sidebar">
        <h2>最新文章</h2>
        <hr>
        <ul>
            <li v-for="(art, index) in articles" :key="index" @click="routerToArticle(art.id)">
                {{ art.title }}
            </li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'Sidebar',
    mounted() {
        const api = 'https://us-central1-expressapi-8c039.cloudfunctions.net/app/article';
        axios.get(api).then(result => {
            this.articles = result.data.data;
        });
    },

    data() {
        return {
            articles: null,
        }
    },

    methods: {
        routerToArticle: function(id) {
            console.log(id);
            this.$router.push({ name: 'Article', params: { id: id } });
        }
    }
}
</script>