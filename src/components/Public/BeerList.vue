<template>
	<div>
		<v-list two-line v-if="publicBeers">
			<v-list-tile v-for="beer in publicBeers" :key="beer.id" avatar @click="onBeerClick(beer.id)">
				<v-list-tile-avatar>
					<img :src="beer.image_url">
				</v-list-tile-avatar>
				<v-list-tile-content>
					<v-list-tile-title v-html="beer.name"></v-list-tile-title>
					<v-list-tile-sub-title v-html="beer.tagline"></v-list-tile-sub-title>
				</v-list-tile-content>
        <v-list-tile-action>
          <v-icon color="#cccc00">star</v-icon>
          <v-btn icon ripple>
            {{beer.user_rating}}
          </v-btn>
        </v-list-tile-action>
			</v-list-tile>
		</v-list>
    <v-alert type="info" :value="true" v-if="publicBeers && publicBeers.length === 0">No beers are added to the list</v-alert>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'BeerList',
		methods: {
			onBeerClick (beerId) {
			  // Go to detail page of beer
				this.$router.push({ name: 'beer', params: { beerId: beerId } });
			}
		},
		computed: {
			...mapState('beers', [
				'publicBeers'
			]),
			...mapState('users', ['showBeersFromUserId'])
		},
		mounted () {
		  // Get beers from user
			this.$store.dispatch('beers/getBeersFromUserID', this.showBeersFromUserId);
		}
	};
</script>
