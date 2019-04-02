<template>
  <div>
    <h2>BeerR login</h2>
    <p>Go ahead, login and add beers to your profile</p>
	<login-form></login-form>
  </div>
</template>

<script>
	import LoginForm from '../../components/Forms/Login/LoginForm.vue';
	export default {
		name: 'index',
		components: {
			LoginForm
		}
	};
</script>
