<template>
	<div id="wrap">
		<article v-for="art in articles">
			<header>
				<h1 @click="routeToArticle(art.id)">{{ art.title }}</h1>
				<i>{{ art.date | fmDate }}</i>
			</header>
			<section>
				<p>{{ art.content | fmContent }}</p>
			</section>
		</article>
	</div>
</template>

<style lang="scss" scoped>
	#wrap {
		text-align: left;
	}

	article {
		border-radius: 10px;
		border: 2px solid gray;
		margin: 20px 5px;
		padding: 5px;

		header h1 {
			font-weight: bold;

		}

		header h1::before {
			content: '＊';
			font-size: 26px;
		}
		header i {
			color: #999;
		}
		section p {
			padding: 5px;
			font-family: '標楷體';
			font-size: 18px;
		}
	}
</style>

<script>
	import axios from 'axios';

	export default {
		name: 'Home',
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
			routeToArticle: function(id) {
				this.$router.push({name: 'Article', params: {id: id}});
			}
		},

		filters: {
			fmContent: str => {
				return str.length > 150 ? str.substring(0, 150) + '．．．' : str;				
			},
			
			fmDate: str => {
				return new Date(str);
			}
		}
	}
</script>