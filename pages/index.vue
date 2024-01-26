<template>
	<Quote :quote="data[0].q" :autor="data[0].a" />
</template>

<script setup>
	const { data } = await useFetch("https://zenquotes.io/api/random/");
</script>
