<template>
	<button class="bg-main text-white py-2 px-4 rounded-full">
		{{ text }}
	</button>
</template>

<script setup>
	const props = defineProps(["text"]);
</script>
