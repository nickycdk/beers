<template>
	<div>
		<v-card v-for="(beer, index) in publicBeers" :key="index">
			<v-card-title primary-title>
				<div>
					<h3 class="headline mb-0">{{beer.name}}</h3>
				</div>
			</v-card-title>

			<v-card-actions>
				<v-btn color="error" @click="removeBeer(beer.id)">Remove beer</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'ListBeers',
		computed: {
			...mapState('beers', [
				'publicBeers'
			])
		},
		methods: {
			removeBeer (beerId) {
			  // remove beer from database/firebase
				this.$store.dispatch('beers/removeBeer', beerId);
			}
		}
	};
</script>
