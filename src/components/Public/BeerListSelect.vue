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
      /**
       * Filter beerlist by user
       * @param obj
       */
			updateBeerList (obj) {
			  // Update beer list according to the user selected
				this.$store.dispatch('beers/getBeersFromUserID', obj.userId);
			}
		},
    created () {
		  // Get all users
      this.$store.dispatch('users/getUsers');
    },
		mounted () {
		  // Set default userId, so we can display beers from that list
			this.user.userId = this.showBeersFromUserId;
		}
	};
</script>
