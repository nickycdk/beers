<template>
	<v-form @submit.prevent="onLogin">
		<v-text-field
				v-model="email"
				:counter="60"
				label="Email"
				required
		></v-text-field>
		<v-text-field
				v-model="password"
				type="password"
				label="Password"
				required
		></v-text-field>
		<v-btn type="submit" :dark="true" color="success">Login</v-btn>
		<p v-if="signInError">Cant sign in user</p>
		<!-- End Login Form -->
	</v-form>
</template>

<script>
	export default {
		name: 'LoginForm',
		data () {
			return {
				email: '',
				password: '',
				signInError: false,
				userSignIn: false
			};
		},
		methods: {
			onLogin (event) {
				event.preventDefault();
        /**
         * Sign in user or show error message
         */
				this.$store.dispatch('users/signInUser', {
					email: this.email,
					password: this.password
				}).then((user) => {
					if (user) {
						this.$router.push('/dashboard');
					}
				}).catch((err) => {
					console.log('cant sign in user ', err);
					this.signInError = true;
				});
			}
		}
	};
</script>
