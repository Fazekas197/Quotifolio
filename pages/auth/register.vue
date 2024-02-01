<template>
	<div class="bg-white w-3/4 min-h-96 rounded-2xl m-auto">
		<h1 class="text-center text-4xl text-main my-5">Register</h1>
		<form @submit.prevent="handleRegister" class="mx-5 floa">
			<input
				v-model="form.email"
				type="email"
				placeholder="Email"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl"
			/>
			<input
				v-model="form.username"
				type="text"
				placeholder="Username"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl mt-3"
			/>
			<input
				v-model="form.password"
				type="password"
				placeholder="Password"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl mt-3"
			/>
			<input
				v-model="confirmPass"
				type="password"
				placeholder="Confirm Password"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl my-3"
			/>
			<button
				type="submit"
				class="bg-main text-white py-2 px-4 rounded-full text-lg"
			>
				Confirm
			</button>
		</form>
		<div class="flex text-main text-lg justify-center flex-wrap">
			<p class="mx-1">Already have an account?</p>
			<NuxtLink to="/auth/login" class="italic underline"
				>Log in</NuxtLink
			>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from "vue-router";

	const form = ref({
		email: "",
		username: "",
		password: "",
	});
	const confirmPass = ref("");
	const router = useRouter();

	async function handleRegister() {
		try {
			if (confirmPass.value === form.value.password) {
				await useFetch("/api/auth/register", {
					method: "POST",
					body: form.value,
				});
			} else {
				// handle unmathching pass
				console.alert("The password and confirm password don't match");
			}
			router.push({ path: "/auth/login" });
		} catch (error) {
			// handle error
			console.log(error);
		}
	}
</script>
