<template>
	<div class="container">
		<ErrorLoadUsers
			v-if="loadUserError"
			:message="loadUserError"
			:show-reload-button="true"
			:load-details="true"
			@reload="reloadUser"
		/>

		<UserInfo
			:loading="loadingUser"
			:user="user"
			:show-toggle-follow="showToggleFollow"
			:is-admin="isAdmin"
		/>

		<SimpleTabs
			:disabled="loadingUser || (loadUserError && loadUserError.length > 0)"
			class="mt-4"
			:tabs="tabs"
		>
			<template #about-tab>
				<div class="mt-4 profile-bio" :class="{ skeleton: loadingUser }">
					<p v-for="(block, index) in bioBlocks" :key="index">
						{{ block }}
					</p>
				</div>
			</template>
			<template #cats-tab>
				<CatsByUser :user-id="user?.id" v-model="catPageIndex" />
			</template>
			<template #photos-tab>
				<PhotosByUser
					:user-id="user?.id"
					v-model="photoPageIndex"
					:is-admin="isAdmin"
				/>
			</template>
		</SimpleTabs>
	</div>
</template>

<script>
	export default {
		name: 'UserDetail',
	};
</script>

<script setup>
	import { watch, ref, onMounted, computed, onBeforeUnmount } from 'vue';
	import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';
	import { useAuthStore, logout } from '@/stores/authStore.mjs';

	import {
		useUserStore,
		fetchUser,
		setLoadUserError,
	} from '@/stores/usersStore.mjs';
	import { setResults as setCatsResults } from '@/stores/catsStore.mjs';
	import { setResults as setPhotosResults } from '@/stores/photosStore.mjs';

	import SimpleTabs from '@/components/SimpleTabs.vue';
	import CatsByUser from '@/components/CatsByUser.vue';
	import PhotosByUser from '@/components/PhotosByUser.vue';
	import UserInfo from '@/components/UserInfo.vue';
	import ErrorLoadUsers from '@/components/ErrorLoadUsers.vue';

	const props = defineProps({
		userId: {
			type: [Number, String],
			required: false,
			default: null,
		},
	});

	const catPageIndex = ref(1);
	const photoPageIndex = ref(1);
	const { user, loadingUser, loadUserError } = useUserStore();

	const router = useRouter();

	const { isAdmin, authInfo } = useAuthStore();

	const timeoutRedirect = ref(null);

	const showToggleFollow = computed(() => {
		return authInfo.value?.user?.id !== user.value?.id;
	});

	const bioBlocks = computed(() => {
		if (loadingUser.value) return [];

		return user.value?.bio ? user.value.bio.split(/\r?\n/) : [];
	});

	const tabs = [
		{ id: 'about-tab', label: 'About' },
		{ id: 'cats-tab', label: 'Cats' },
		{ id: 'photos-tab', label: 'Photos' },
	];

	const clearTimeoutRedirect = () => {
		if (timeoutRedirect.value) {
			clearTimeout(timeoutRedirect.value);
			timeoutRedirect.value = null;
		}
	};

	const reloadUser = () => {
		clearTimeoutRedirect();
		if (!props.userId) return;

		fetchUser(
			props.userId,
			`
      id, name, email, image, bio, followed, followers_count, photos_count,
      cats_count, status, created_at, likes_count, facebook_url, pinterest_url,
      twitter_url, instagram_url, linkedin_url, youtube_url, github_url,
      job_title, location, country, website_url, phone_number, gender
    `,
			authInfo.value?.token,
		);
	};

	onMounted(() => {
		setCatsResults([], 0, 0);
		setPhotosResults([], 0, 0);
		reloadUser();
	});

	onBeforeUnmount(() => {
		clearTimeoutRedirect();
	});

	watch(() => props.userId, reloadUser);

	watch(
		() => loadUserError.value,
		(newVal /*, oldVal*/) => {
			if (
				newVal &&
				(newVal.includes('Session was expired') ||
					newVal.includes('Session was not found'))
			) {
				emitter.emit('toast', {
					title: 'Session Expired',
					message:
						'Please login again.<br>You will be redirected to login page in 10 seconds.',
				});
				timeoutRedirect.value = setTimeout(() => {
					setLoadUserError(null);
					logout();

					emitter.emit('route-transition', 'bounce');
					router.push({
						name: 'Login',
						query: { redirect: router.currentRoute.value.fullPath },
					});
				}, 10000);
			}
		},
	);
</script>
