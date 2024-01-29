<template>
	<div class="flex items-center w-full justify-between px-2 mt-5">
		<NuxtLink to="/" class="text-4xl text-logo">Quotofolio</NuxtLink>
		<!-- LINKS -->
		<div class="text-main text-lg">
			<div v-if="!isLogged">
				<NuxtLink to="/auth/login" class="mx-2">Sign In</NuxtLink>
				<NuxtLink
					to="/auth/register"
					class="bg-main text-white py-2 px-4 rounded-full"
					>Sign Up</NuxtLink
				>
			</div>
			<button v-else @click="handleLogout()">Log Out</button>
		</div>
	</div>
</template>

<script setup>
	const { status } = useAuth();
	const isLogged = computed(() => {
		if (status.value === "authenticated") return true;
		else return false;
	});

	const { signOut } = useAuth();
	async function handleLogout() {
		await signOut();
	}
</script>
