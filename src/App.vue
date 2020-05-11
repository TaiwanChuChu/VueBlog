<template>
    <div id="app">
        <Header />
        <Sidebar />
        <div id="content">
            <router-view />
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
// import HelloWorld from '@/components/HelloWorld.vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/views/Sidebar.vue';

export default {
    mounted() {
        this.$store.dispatch('fetchArticles');
    },
    data() {
        return {

        }
    },
    components: {
        Header,
        Sidebar,
    }
}
</script>
<style lang="scss">
html,
body {
    height: 100%;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

#sidebar {
    background-color: gray;
    color: white;
    font-size: 18px;
    width: 16vw;
    height: 100%;
    float: right;
    border-radius: 16px;
    margin-top: 4px;
    text-align: left;
    padding: 6px 2px 0 6px;

    h2 {
        font-weight: bold;
    }

    ul {
        padding: 6px 2px 0 6px;
    }

    li {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        list-style-type: none;
    }
}

#content {
    background-color: skyblue;
    height: 100%;
    width: 82vw;
    margin-top: 4px;
    border-radius: 16px;
    margin-left: 2px;
    // overflow: scroll;
}

.clear {
    // background-color: green;
    // width: 100%;
    // height: 100px;
    clear: both;
}
</style>