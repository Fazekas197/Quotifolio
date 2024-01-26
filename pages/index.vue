<template>
	<Quote :quote="quote.q" :autor="quote.a" @refresh="getQuote()" />
</template>

<script setup>
	const { data } = await useFetch("https://zenquotes.io/api/quotes/");
	const quote = ref(data._rawValue[0]);

	function getQuote() {
		const index = Math.floor(Math.random() * 50);
		quote.value = data._rawValue[index];
	}
</script>
