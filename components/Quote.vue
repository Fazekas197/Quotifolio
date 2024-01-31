<template>
	<div
		class="bg-white max-w-80 min-w-80 min-h-96 rounded-2xl flex flex-col justify-between p-2"
	>
		<img src="/img/quote-left-solid.svg" alt="quote icon" class="w-16" />

		<!-- QUOTE -->
		<div class="m-3">
			<p class="text-2xl italic text-main text-center">
				{{ quote }}
			</p>
			<p class="text-xl text-main text-end mt-2">{{ autor }} -</p>
		</div>

		<!-- BUTTONS -->
		<div class="self-end flex m-2">
			<img
				src="/img/copy-solid.svg"
				alt="copy"
				class="w-12 mx-5 cursor-pointer"
				@click="copy()"
			/>
			<img
				src="/img/arrows-rotate-solid.svg"
				alt="refresh"
				class="w-12 cursor-pointer"
				@click="$emit('refresh')"
			/>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps(["quote", "autor"]);

	function copy() {
		navigator.clipboard.writeText(`"${props.quote}" - ${props.autor}`);
	}
</script>
