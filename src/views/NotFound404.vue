<template>
	<div>
		<h1>404</h1>
		<h4>This page is not found!</h4>
		<b-button @click="routeToHome">Go Back!</b-button>
	</div>
</template>

<script>
	export default {
		methods: {
			routeToHome: function() {
				this.$router.push({name: 'Home'});
			}
		}
	}
</script>