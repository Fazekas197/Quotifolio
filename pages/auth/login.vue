<template>
	<div class="bg-white w-3/4 min-h-96 rounded-2xl m-auto">
		<h1 class="text-center text-4xl text-main my-5">Log In</h1>
		<form @submit.prevent="handleLogin()" class="m-5">
			<input
				v-model="form.email"
				type="email"
				placeholder="Email"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl"
			/>
			<input
				v-model="form.password"
				type="password"
				placeholder="Password"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl my-5"
			/>
			<button
				type="submit"
				class="bg-main text-white py-2 px-4 rounded-full text-lg"
			>
				Log In
			</button>
		</form>
		<div class="flex text-main text-lg justify-center flex-wrap">
			<p class="mx-1">You don't have an account?</p>
			<NuxtLink to="/auth/register" class="italic underline"
				>Sign Up</NuxtLink
			>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: "guest",
	});

	import { useRouter } from "vue-router";
	const router = useRouter();

	const form = ref({
		email: "",
		password: "",
	});

	const { signIn } = useAuth();
	async function handleLogin() {
		try {
			const res = await signIn("credentials", form.value);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	}
</script>
