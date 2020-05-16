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
import { mapState } from 'vuex';

export default {
    name: 'Sidebar',
    
    computed: {
    	...mapState(['articles']),
    },

    data() {
        return {

        }
    },

    methods: {
        routerToArticle: function(id) {
        	console.log(id);
        	// 當重倒同一個path時，會出現錯誤；故使用catch將錯誤訊息置入err變數中，使其不會再console出現error
            this.$router.push({ name: 'Article', params: { id: id } }).catch(err => {console.log(err);});
        }
    }
}
</script>
<style lang="scss">
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

          	:hover {
		    	cursor: pointer;
		    	color: yellow;
		    }
	    }

	    li {
	        overflow: hidden;
	        white-space: nowrap;
	        text-overflow: ellipsis;
	        list-style-type: none;
		  
	    }
	}
</style>