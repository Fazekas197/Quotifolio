<template>
	<div class="m-auto">
		<div v-if="quotes.length >= 1">
			<Quote
				:quote="quotes[index].quote"
				:autor="quotes[index].author"
				class="m-auto"
			/>
			<div class="flex justify-between">
				<button
					class="bg-main text-white py-2 px-4 rounded-full mx-4"
					@click="prev"
				>
					previous
				</button>
				<button
					class="bg-main text-white py-2 px-4 rounded-full mx-4"
					@click="next"
				>
					next
				</button>
			</div>
		</div>
		<div v-else class="text-2xl text-main text-center">
			<p>There are no quotes</p>
			<NuxtLink
				to="/addquote"
				class="bg-main text-white py-2 rounded-full block m-2"
				>Add one?</NuxtLink
			>
		</div>
	</div>
</template>

<script setup>
	definePageMeta({
		middleware: "auth",
	});

	const res = await useFetch(`/api/`);
	const quotes = res.data._value;

	const index = ref(0);
	function next() {
		if (quotes.length - 1 > index.value) index.value++;
	}
	function prev() {
		if (0 < index.value) index.value--;
	}
</script>
