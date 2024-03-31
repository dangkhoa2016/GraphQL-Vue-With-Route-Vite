<template>
	<footer id="footer" class="footer py-3 bg-body-tertiary w-100">
		<ul class="nav justify-content-center border-bottom pb-3 mb-3">
			<li v-for="(link, index) in navLinks" :key="index" class="nav-item">
				<router-link
					:to="{ name: link.event, query: returnQuery(link.event) }"
					custom
					v-slot="{ href, isActive }"
				>
					<a
						class="nav-link px-2 text-body-secondary"
						:class="{
							disabled: link.disabled,
							active: isActive || isActiveLink(link.event),
						}"
						:href="href"
						@click.prevent="handleLinkClick(link.event)"
					>
						{{ link.text }}
					</a>
				</router-link>
			</li>
		</ul>

		<p class="text-center text-body-secondary">
			© {{ currentYear }} {{ appName }}, Inc
		</p>
	</footer>
</template>

<script>
	export default {
		name: 'AppFooter',
	};
</script>

<script setup>
	import { ref, onMounted, computed } from 'vue';
	import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';
	import { useAuthStore } from '@/stores/authStore.mjs';

	defineProps({
		appName: {
			type: String,
			required: false,
			default: '',
		},
	});

	const router = useRouter();

	const { isAuthenticated } = useAuthStore();

	const navLinks = computed(() => {
		const arr = [
			{ text: 'Home', event: 'MainPage', href: '#' },
			{ text: 'Features', event: 'Features', href: '#' },
			{ text: 'Pricing', event: 'Pricing', href: '#' },
			{ text: 'Cats', event: 'CatsList', href: '#' },
			{ text: 'About', event: 'About', href: '#' },
		];

		if (!isAuthenticated.value)
			arr.push({ text: 'Login', event: 'Login', href: '#' });

		return arr;
	});

	const footer = ref(null);
	const currentYear = ref(new Date().getFullYear());

	const returnQuery = (routeName) => {
		if (!routeName || routeName !== 'Login') return null;

		const redirect = router.currentRoute.value.query.redirect;
		if (redirect) return { redirect };

		return { redirect: router.currentRoute.value.fullPath };
	};

	const isActiveLink = (page) => {
		let name = router.currentRoute.value.name;
		if (name === 'CatDetail') name = 'CatsList';
		else if (name === 'ViewUser') name = 'UsersList';
		return name === page;
	};

	const setTransition = () => {
		emitter.emit('route-transition', 'just-fade');
	};

	const handleLinkClick = (page) => {
		if (!page) return;

		setTransition();
		router.push({ name: page, query: returnQuery(page) });
	};

	const staticPosition = () => {
		setTimeout(() => {
			footer.value.classList.remove('slide-from-bottom');
			footer.value.removeAttribute('style');
		}, 500);
	};

	onMounted(() => {
		footer.value = document.getElementById('footer');
		footer.value.style.position = 'relative';
		footer.value.style.bottom = '-145px';

		setTimeout(() => {
			footer.value.classList.add('slide-from-bottom');

			staticPosition();
		}, 500);
	});
</script>
