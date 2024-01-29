<template>
	<div>
		<h1 class="text-4xl text-logo">Quotofolio</h1>
		<!-- LINKS -->
		<div>
			<div v-if="!isLogged">
				<button>Sign In</button>
				<button>Sign Up</button>
			</div>
			<button v-else>Log Out</button>
		</div>
	</div>
</template>

<script setup>
	const isLogged = false;
</script>
