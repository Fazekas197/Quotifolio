<template>
	<div
		class="bg-white w-3/4 h-2/5 rounded-2xl flex flex-col justify-between p-2"
	>
		<img src="/img/quote-left-solid.svg" alt="quote icon" class="w-16" />
		<p class="text-2xl italic text-main text-center">
			{{ quote }}
		</p>
		<p class="text-left text-lg text-main self-end m-2">{{ autor }} -</p>
	</div>
</template>

<script setup>
	const props = defineProps(["quote", "autor"]);
</script>
