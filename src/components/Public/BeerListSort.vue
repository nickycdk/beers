<template>
  <div>
    <p>Sort by: </p>
    <v-btn color="success" @click="sortByRating">Rating</v-btn>
    <v-btn color="success" @click="sortByName">Name</v-btn>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex';
  export default {
    name: 'BeerListFilter',
    methods: {
      ...mapMutations('beers', [
        'sortBeersByRating',
        'sortBeersByName'
      ]),
      sortByRating () {
        // Call mutation in store to sort beers by rating
        this.sortBeersByRating();
      },
      sortByName () {
        // Call mutation in store to sort beers by name
        this.sortBeersByName();
      }
    }
  };
</script>
