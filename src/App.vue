<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

	import store from './store';
	export default {
		name: 'app',
		store,
		components: {
			
		}
	}
	
</script>

<style lang="scss">

  	//@import "./_page_header.scss";

	$bluecolour: blue;
	$orangecolour: orange;

	* {
		border: 10px solid $bluecolour;
	}

</style>
