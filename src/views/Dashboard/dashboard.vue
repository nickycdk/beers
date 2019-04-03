<template>
	<div>
		<p>Welcome {{user.email}}</p>

		<dashboard-navigation></dashboard-navigation>
		<widget-saved-beers></widget-saved-beers>
		<widget-favourite-beers></widget-favourite-beers>
		<v-divider></v-divider>
		<list-beers></list-beers>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import WidgetSavedBeers from '../../components/Dashboard/WidgetSavedBeers.vue';
	import WidgetFavouriteBeers from '../../components/Dashboard/WidgetFavouriteBeers.vue';
	import DashboardNavigation from '../../components/Dashboard/DashboardNavigation.vue';
	import ListBeers from '../../components/Dashboard/ListBeers.vue';

	export default {
		name: 'dashboard',
		components: {
			ListBeers,
			WidgetSavedBeers,
			WidgetFavouriteBeers,
			DashboardNavigation
		},
		computed: {
			...mapState('users', [
				'user'
			])
		},
		mounted () {
		  // Get beers to user so we can list them on dashboard
			this.$store.dispatch('beers/getBeersFromUserID', this.user.uid);
		}
	};
</script>
