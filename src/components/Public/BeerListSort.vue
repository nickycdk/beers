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
        this.sortBeersByRating();
      },
      sortByName () {
        this.sortBeersByName();
      }
    }
  };
</script>
