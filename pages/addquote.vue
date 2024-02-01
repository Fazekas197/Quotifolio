<template>
	<div class="bg-white w-3/4 min-h-96 rounded-2xl m-auto">
		<h1 class="text-center text-4xl text-main my-5">Add Quote</h1>
		<form @submit.prevent="" class="m-5">
			<textarea
				v-model="form.quote"
				type="text"
				rows="3"
				placeholder="Quote"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl"
			/>
			<input
				v-model="form.author"
				type="text"
				placeholder="Author"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl my-2"
			/>
			<button
				type="submit"
				@click="addQuote"
				class="bg-main text-white py-2 px-4 rounded-full text-lg"
			>
				Add
			</button>
		</form>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: "auth",
	});

	const { data } = useAuth();

	const form = ref({
		quote: "",
		author: "",
	});

	async function addQuote() {
		await useFetch(`/api/${data.value.user._id}/addQuote`, {
			method: "POST",
			body: form.value,
		});
		form.value = {
			quote: "",
			author: "",
		};
	}
</script>
