<template>
	<div class="m-auto">
		<div v-if="quotes.length >= 1">
			<Quote
				:quote="quotes[index].quote"
				:autor="quotes[index].author"
				class="m-auto"
			>
				<img
					src="/img/trash-solid.svg"
					alt="delete"
					class="w-12 cursor-pointer"
					@click="deleteQuote()"
				/>
			</Quote>
			<div class="flex justify-between">
				<Btn text="previous" @click="prev" />
				<Btn text="next" @click="next" />
			</div>
		</div>
		<div v-else class="text-2xl text-main text-center">
			<p>There are no quotes</p>
			<NuxtLink to="/addquote">
				<Btn text="Add one?" />
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: "auth",
	});

	// get quotes
	const res = await useFetch(`/api/`);
	const quotes = ref(res.data._value);

	// navigate thru quotes
	const index = ref(0);
	function next() {
		if (quotes.value.length - 1 > index.value) index.value++;
	}
	function prev() {
		if (0 < index.value) index.value--;
	}

	// delete quotes
	async function deleteQuote() {
		const id = quotes.value[index.value]._id;
		await useFetch(`/api/${id}`, {
			method: "DELETE",
		});

		// // get new quotes
		const res = await useFetch(`/api/`);
		quotes.value = res.data._value;
	}
</script>
