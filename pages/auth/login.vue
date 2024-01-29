<template>
	<div class="bg-white w-3/4 min-h-96 rounded-2xl">
		<h1 class="text-center text-4xl text-main my-5">Log In</h1>
		<form @submit.prevent="" class="m-5 floa">
			<input
				type="email"
				placeholder="Email"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl"
			/>
			<input
				type="password"
				placeholder="Password"
				class="bg-main opacity-80 w-full text-white text-lg p-2 rounded-xl my-5"
			/>
			<button class="bg-main text-white py-2 px-4 rounded-full text-lg">
				Log In
			</button>
		</form>
	</div>
</template>
