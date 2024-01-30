export default defineNuxtRouteMiddleware((to, form) => {
	const { status } = useAuth();
	if (status.value === "authenticated") return navigateTo({ path: "/" });
});
