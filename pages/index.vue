<template>
	<Quote :quote="quote.q" :autor="quote.a" class="m-auto">
		<img
			src="/img/arrows-rotate-solid.svg"
			alt="refresh"
			class="w-12 cursor-pointer"
			@click="getQuote()"
		/>
	</Quote>
</template>

<script setup>
	const { data } = await useFetch("https://zenquotes.io/api/quotes/");
	const quote = ref(data._rawValue[0]);

	function getQuote() {
		const index = Math.floor(Math.random() * 50);
		quote.value = data._rawValue[index];
	}
</script>
