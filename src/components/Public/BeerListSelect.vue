<template>
	<div v-if="publicUsers && showBeersFromUserId">
		<v-select
				:items="publicUsers"
				label="Which beerlist do you want to see?"
				v-model="user.userId"
				item-value="userId"
				:return-object="true"
				item-text="name"
				@change="updateBeerList"
		></v-select>
	</div>
</template>

<script>
	import { mapState } from 'vuex';

	export default {
		name: 'BeerListSelect',
		data () {
			return {
				user: {
					userId: null
				}
			};
		},
		computed: {
			...mapState('users', [
				'publicUsers',
				'showBeersFromUserId'
			])
		},
		methods: {
			updateBeerList (obj) {
				this.$store.dispatch('beers/getBeersFromUserID', obj.userId);
			}
		},
		mounted () {
			this.user.userId = this.showBeersFromUserId;
		}
	};
</script>
