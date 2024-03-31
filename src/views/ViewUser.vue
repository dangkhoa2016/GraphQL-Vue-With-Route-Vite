<template>
	<UserDetail :user-id="pendingLoadUserId" />
</template>

<script>
	export default {
		name: 'ViewUser',
	};
</script>

<script setup>
	import { useRouter } from 'vue-router';

	import UserDetail from '@/components/UserDetail.vue';

	const router = useRouter();
	const pendingLoadUserId = router.currentRoute.value.params.id;
</script>
