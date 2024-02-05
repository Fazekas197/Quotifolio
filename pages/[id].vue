<template>
	<div class="bg-white w-3/4 min-h-96 rounded-2xl m-auto">
		<h1 class="text-center text-4xl text-main my-5">Update Quote</h1>
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
			<Btn text="Update" @click="update" />
		</form>
	</div>
</template>

<script setup>
	const router = useRoute();
	definePageMeta({
		middleware: "auth",
	});

	// get initial quote
	const res = await useFetch(`/api/${router.params.id}`);
	const quote = res.data._value[0];
	const form = ref({
		quote: quote.quote,
		author: quote.author,
	});

	// update quote
	async function update() {
		await useFetch(`/api/${router.params.id}`, {
			method: "PUT",
			body: form,
		});
		await navigateTo("/quotelib");
	}
</script>
