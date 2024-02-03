<template>
	<div class="flex items-center w-full justify-between px-2 mt-5 flex-wrap">
		<NuxtLink to="/" class="text-4xl text-logo">Quotofolio</NuxtLink>
		<!-- LINKS -->
		<div class="text-main text-lg my-2">
			<div v-if="!isLogged">
				<NuxtLink to="/auth/login" class="mx-2">Sign In</NuxtLink>
				<NuxtLink to="/auth/register">
					<Btn text="Sign Up" />
				</NuxtLink>
			</div>
			<div v-else>
				<NuxtLink to="/addquote" class="mr-2">Add Quote</NuxtLink>
				<NuxtLink to="/quotelib" class="mr-2">Your Quotes</NuxtLink>
				<button @click="handleLogout()">Log Out</button>
			</div>
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
