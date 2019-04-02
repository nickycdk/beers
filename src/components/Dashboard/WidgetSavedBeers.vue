<template>
	<div>
		<v-alert
				v-if="publicBeers"
				:value="true"
				type="success"
		>
			You have currently added {{publicBeers.length}} beer(s) to your beer list.
		</v-alert>
		<v-alert v-if="!publicBeers" :value="true" type="warning">
			You haven't added any beers to your list
		</v-alert>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'WidgetSavedBeers',
		computed: {
			...mapState('beers', [
				'publicBeers'
			])
		}
	};
</script>
