<template>
	<v-app id="inspire">
		<v-container grid-list-md text-xs-center mb-5 pb-5>
			<v-layout row wrap>
				<v-flex xs12>
					<router-view/>
				</v-flex>
			</v-layout>
		</v-container>

    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      fixed
      color="#fff">
      <v-btn
        color="#1976d2"
        flat
        value="beers"
        to="/">
        <span>Beers</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        v-if="!user"
        to="/login"
        color="#1976d2"
        flat
        value="login">
        <span>Login</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        v-if="user"
        to="/login"
        color="#1976d2"
        flat
        value="dashboard">
        <span>Dashboard</span>
        <v-icon>favorite</v-icon>
      </v-btn>

    </v-bottom-nav>
	</v-app>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		name: 'app-index',
    data() {
		  return {
		    bottomNav: 'beers'
      }
    },
		computed: {
			...mapState('users', ['user'])
		}
	};
</script>

<style lang="scss">
	@import '~vuetify/dist/vuetify.min.css';
</style>
