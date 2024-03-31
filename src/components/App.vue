<template>
	<main class="d-flex flex-column h-100">
		<AppHeader :app-name="appName" />

		<div class="my-auto py-4">
			<Loading-Component v-if="isLoadingComponent" />
			<ErrorLoadComponent
				v-else-if="isErrorLoadComponent"
				:component-path="componentName"
			/>
			<router-view v-else v-slot="{ Component, route }">
				<transition
					:name="transitionName"
					mode="out-in"
					:data-name="route.name"
					:duration="{ enter: 500, leave: 500 }"
					appear
				>
					<component :is="Component" />
				</transition>
			</router-view>
		</div>

		<AppFooter :app-name="appName" />

		<ModalUserSummary />
		<ModalToggleStatus v-if="isAdmin" />
		<Toast ref="toaster" :autoHideDelay="5000" />

		<transition name="slide-up">
			<button
				v-show="showScrollToTop"
				@click="scrollToTop"
				class="btn btn-sm btn-outline-warning scroll-to-top"
			>
				<svg class="cat-stats"><use xlink:href="#scroll-top"></use></svg>
				To top
			</button>
		</transition>
	</main>
</template>

<script>
	export default {
		name: 'App',
	};
</script>

<script setup>
	import {
		onMounted,
		onBeforeUnmount,
		defineAsyncComponent,
		ref,
		watch,
		computed,
	} from 'vue';
	import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';
	import { useAuthStore } from '@/stores/authStore.mjs';

	import { scrollToTop } from '@/libs/helpers.mjs';
	import { init as initLikesStore } from '@/stores/toggleLikesStore.mjs';

	import LoadingComponent from './LoadingComponent.vue';
	import ErrorLoadComponent from './ErrorLoadComponent.vue';
	import AppHeader from './AppHeader.vue';
	import AppFooter from './AppFooter.vue';
	import Toast from './Toast.vue';
	import ModalUserSummary from './ModalUserSummary.vue';

	const ModalToggleStatus = defineAsyncComponent(
		() => import('./ModalToggleStatus.vue'),
	);

	const router = useRouter();

	const { authInfo /*, isAuthenticated*/, isAdmin } = useAuthStore();

	const appName = 'Vue 3';
	const toaster = ref(null);

	const componentName = ref('');
	const transitionName = ref('just-fade');

	const showScrollToTop = ref(false);

	const loadingComponent = ref('');
	const isLoadingComponent = computed(
		() => loadingComponent.value === 'loading',
	);
	const isErrorLoadComponent = computed(
		() => loadingComponent.value === 'error',
	);

	const checkScroll = () => {
		showScrollToTop.value = window.scrollY > 400;
	};

	onMounted(() => {
		initLikesStore();
		window.addEventListener('scroll', checkScroll);

		emitter.on('toast', ({ title, message, color }) => {
			if (toaster.value) toaster.value.pushToast(title, message, color);
		});

		emitter.on('route-transition', (transition) => {
			transitionName.value = transition;
		});

		emitter.on('loading-component', (info) => {
			loadingComponent.value = info.state;
			componentName.value = info.path;
		});

		const loading = document.getElementById('loading');
		loading.addEventListener('transitionend', () => {
			loading.style.display = 'none';
		});
		loading.classList.add('fade-out');
	});

	onBeforeUnmount(() => {
		emitter.off('toast');
		emitter.off('route-transition');
		window.removeEventListener('scroll', checkScroll);
	});

	watch(
		() => authInfo.value,
		(newVal) => {
			if (newVal) return;

			if (
				router.currentRoute.value.name !== 'Login' &&
				router.currentRoute.value.meta.requiresAuth
			) {
				toaster.value.pushToast(
					'Notice',
					'You need to login to view this page.',
				);
				emitter.emit('route-transition', 'bounce');
				router.push({
					name: 'Login',
					query: { redirect: router.currentRoute.value.fullPath },
				});
			}
		},
	);
</script>
