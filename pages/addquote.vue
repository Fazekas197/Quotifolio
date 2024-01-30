<template>
	<div class="bg-white w-3/4 min-h-96 rounded-2xl m-auto">
		<h1 class="text-center text-4xl text-main my-5">Add Quote</h1>
		<form @submit.prevent="" class="m-5">
			<textarea
				type="text"
				rows="3"
				placeholder="Quote"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl"
			/>
			<input
				type="text"
				placeholder="Author"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl my-2"
			/>
			<button
				type="submit"
				class="bg-main text-white py-2 px-4 rounded-full text-lg"
			>
				Add
			</button>
		</form>
	</div>
</template>

<script setup>
	const form = ref({
		quote: "",
		author: "",
	});
</script>
