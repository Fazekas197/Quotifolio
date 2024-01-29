<template>
	<div
		class="w-dvw h-dvh bg-background flex flex-col items-center justify-center"
	>
		<Nav />
		<!-- SLOT -->
		<div class="h-full flex">
			<slot />
		</div>
	</div>
</template>
