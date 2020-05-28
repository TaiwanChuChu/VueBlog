<template>
	<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">LwjCoding</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
		  <b-nav-item to="/">
		  	Home
		  </b-nav-item>
		  <b-nav-item to="/about">
		  	About
		  </b-nav-item>
		 <!--  <b-nav-item to="/admin">
	   		Admin
		  </b-nav-item> -->
		  <b-nav-item to="/login">
	   		Login
		  </b-nav-item>
	  <!--     <b-nav-item to="/article">
	   		Article
		  </b-nav-item> -->
          <b-form-input size="sm" class="mr-sm-2" v-model="srh" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="submitSrh">Search</b-button>
        </b-nav-form>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex';

	export default {
		name: 'Header',
		data() {
			return {
				srh: '',
			}
		},
		methods: {
    		...mapActions(['setSearchArt']),

    		submitSrh: function() {
    			this.setSearchArt(this.srh);
    		}

		},

		watch: {
			srh: function() {
				if(this.srh === '') {
					this.setSearchArt('');
				}
			}
		},
	}
</script>
<style lang="scss" scoped>
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
</style>