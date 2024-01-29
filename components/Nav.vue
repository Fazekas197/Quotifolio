<template>
	<div>
		<div v-if="isLogged">
			<button>Sign In</button>
			<button>Sign Up</button>
		</div>
		<button v-else>Log Out</button>
	</div>
</template>

<script setup>
	const isLogged = false;
</script>
