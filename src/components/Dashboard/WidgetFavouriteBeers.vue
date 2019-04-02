<template>
	<div>
		<v-alert type="info" :value="true" v-if="publicBeers">
			There are currently {{favBeers}} beers added to favourites
		</v-alert>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'WidgetFavouriteBeers',
		computed: {
			...mapState('beers', [
				'publicBeers'
			]),
			favBeers () {
				let favBeers = this.publicBeers.filter(beer => beer.is_fav === true);
				return favBeers.length;
			}
		}
	};
</script>
