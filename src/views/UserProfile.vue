<template>
	<UserDetail :user-id="authInfo.user?.id" />
</template>

<script>
	export default {
		name: 'UserProfile',
	};
</script>

<script setup>
	import { useAuthStore } from '@/stores/authStore.mjs';

	import UserDetail from '@/components/UserDetail.vue';

	const { authInfo } = useAuthStore();
</script>
