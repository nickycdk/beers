export default {
  setBeers (state, payload) {
    if (payload) {
      state.beers = payload;
    }
  },

  setBeersFromUser (state, payload) {
    state.publicBeers = []; // Clean array
    state.publicBeers = payload; // Fill up array with data from payload
  },

  sortBeersByRating (state) {
    state.publicBeers.sort((a, b) => {
      return b.user_rating - a.user_rating;
    });
  },

  sortBeersByName (state) {
    state.publicBeers.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
  }
};
