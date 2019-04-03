<template>
	<div>
		<beer-list-select></beer-list-select>
    <beer-list-filter></beer-list-filter>
		<beer-list></beer-list>
	</div>
</template>

<script>
	import BeerList from '../components/Public/BeerList';
	import BeerListSelect from '../components/Public/BeerListSelect';
  import BeerListFilter from '../components/Public/BeerListSort';

	export default {
		name: 'home',
		components: {
      BeerListFilter,
			BeerListSelect,
			BeerList
		}
	};
</script>
