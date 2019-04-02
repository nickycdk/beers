<template>
  <div>
    <v-card v-if="beer && publicBeers">
      <v-img :src="beer.image_url" aspect-ratio="2.75"></v-img>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{beer.name}}</h3>
          <div class="subheading mb-2">{{beer.tagline}}</div>
          <div>
            {{ beer.description}}
          </div>
          <hr style="margin:30px 0" />
          <span>Beer rating:</span>
          <v-rating v-model="beer.user_rating"></v-rating>
        </div>
      </v-card-title>
    </v-card>

    <div class="comments" v-if="beer">
      <h3 class="mt-4 mb-2">Comments: {{beer.allow_comments ? 'Comments in open' : 'Comments are closed'}}</h3>
      <div class="comments__form" v-if="beer.allow_comments">
        <v-textarea
          box
          name="input-7-4"
          label="Add your comment"
          value=""
        ></v-textarea>
        <v-btn color="success" @click="addComment">Add comment</v-btn>
        <p v-if="commentMessage">{{commentMessage}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: 'Beer',
    data () {
      return {
        beerId: this.$route.params.beerId,
        beer: null,
        commentMessage: null
      };
    },
    watch: {
      'publicBeers': function (val) {
        if (val) {
          this.getBeerDataFromID();
        }
      }
    },
    computed: {
      ...mapState('beers', [
        'publicBeers'
      ]),
      ...mapState('users', ['showBeersFromUserId'])
    },
    methods: {
      addComment () {
        this.commentMessage = 'Sorry my friend, Nicky has yet to implement this functionality...';
      },
      getBeerDataFromID () {
        this.beer = this.publicBeers.find((beer) => {
          return parseInt(beer.id) === parseInt(this.beerId);
        });
      }
    },
    created () {
      if (this.publicBeers) {
        this.getBeerDataFromID();
      } else {
        this.$store.dispatch('beers/getBeersFromUserID', this.showBeersFromUserId);
      }
    }
  };
</script>
