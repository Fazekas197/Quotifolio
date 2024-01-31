<template>
	<div class="m-auto">
		<Quote
			:quote="quotes[index].quote"
			:autor="quotes[index].author"
			class="m-auto"
		/>
		<div class="text-center">
			<button
				class="bg-main text-white py-2 px-4 rounded-full"
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
</template>

<script setup>
	const { data } = useAuth();
	const res = await useFetch(`/api/${data.value.user._id}/getQuotes`);
	const quotes = res.data._value;

	const index = ref(0);
	function next() {
		if (quotes.length - 1 > index.value) index.value++;
	}
	function prev() {
		if (0 < index.value) index.value--;
	}
</script>
