<template>
	<div>
    <add-beer></add-beer>
	</div>
</template>

<script>
	import AddBeer from '../../../components/Forms/Beers/AddBeer.vue';

  export default {
		name: 'beer-index',
    components: { AddBeer },
    mounted () {
			this.$store.dispatch('beers/getBeers');
		}
	};
</script>
