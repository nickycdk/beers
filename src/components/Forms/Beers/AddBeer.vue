<template>
  <div>
    <p>Add beer to your list</p>
    <v-select
      :items="beers"
      name="beer"
      label="Select a category"
      v-model="beer"
      :return-object="true"
      item-text="name"
    ></v-select>

    <v-card v-if="beer">
      <v-img :src="beer.image_url" aspect-ratio="2"></v-img>
      <v-card-title primary-title>
        <h3 class="headline mb-0 mr-4">{{beer.name}}</h3>
        <div>
          <div> {{beer.tagline}} </div>
        </div>
      </v-card-title>
      <v-card-text>
        <div>
          <h4 class="v-subheader">Add your rating</h4>
          <v-rating v-model="rating"></v-rating>
        </div>
        <v-divider></v-divider>
        <div>
          <h4 class="v-subheader">Add to favourites?</h4>
          <v-checkbox v-model="addTofav"></v-checkbox>
        </div>
        <v-divider></v-divider>
        <div>
          <h4 class="v-subheader">Enable commenting</h4>
          <v-checkbox v-model="enableComments"></v-checkbox>
        </div>
      </v-card-text>
    </v-card>
    <div class="mt-4 mb-4">
      <v-btn v-if="beer" color="success" @click="saveBeer">Add beer</v-btn>
    </div>
    <v-alert type="success" :value="true" v-if="isSaved">
      Your beer list have been saved
    </v-alert>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    name: 'add-beer',
    data () {
      return {
        beer: null,
        rating: 3,
        addTofav: false,
        enableComments: true,
        isLoading: false,
        isSaved: null
      };
    },
    computed: {
      ...mapGetters('beers', ['beers'])
    },
    methods: {
      resetFormState () {
        this.isSaved = null;
        this.beer = null;
        this.rating = 3;
        this.addTofav = false;
        this.enableComments = true;
      },
      saveBeer () {
        this.isLoading = true;

        // Extend beer object with own data
        const beerToAdd = {
          ...this.beer,
          is_fav: this.addTofav,
          allow_comments: this.enableComments,
          user_rating: this.rating
        };

        // Save beer
        this.$store.dispatch('beers/saveBeer', beerToAdd).then((response) => {
          if (response) {
            this.isLoading = false;
            this.isSaved = true;

            // Reset form state after 2 seconds
            setTimeout(() => {
              this.resetFormState();
            }, 2000);
          }
        });
      }
    },
    mounted () {
      this.$store.dispatch('beers/getBeers');
    }
  };
</script>
