<template>
	<header class="">
		<!-- Fixed navbar -->
		<nav
			id="header-nav"
			class="hide-to-top navbar navbar-expand-md navbar-light fixed-top bg-light"
		>
			<div class="container">
				<router-link
					:to="{ name: 'MainPage' }"
					class="navbar-brand"
					@click.prevent="handleLinkClick('MainPage')"
				>
					{{ appName }}
				</router-link>
				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li
							v-for="(link, index) in navLinks"
							:key="index"
							:class="{ 'nav-item': true, dropdown: link.dropdown }"
						>
							<template v-if="link.dropdown">
								<router-link
									to=""
									class="nav-link dropdown-toggle"
									:disabled="link.disabled"
									@click.prevent="handleLinkClick(link.event)"
									:class="{ disabled: link.disabled }"
									data-bs-toggle="dropdown"
									:active-class="dropdownActive(link) ? 'text-primary' : ''"
									exact-active-class=""
									role="button"
									aria-expanded="false"
								>
									{{ link.text }}
								</router-link>
								<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
									<li
										v-for="(subLink, subIndex) in link.subLinks"
										:key="subIndex"
									>
										<router-link
											:to="{ name: subLink.event }"
											class="dropdown-item"
											:class="{ disabled: subLink.disabled }"
											@click.prevent="handleSubLinkClick"
										>
											{{ subLink.text }}
										</router-link>
									</li>
								</ul>
							</template>
							<router-link
								v-else
								:to="{ name: link.event }"
								custom
								v-slot="{ href, isActive }"
							>
								<a
									class="nav-link"
									:class="{
										disabled: link.disabled,
										'text-primary': isActive || isActiveLink(link.event),
									}"
									:href="href"
									@click.prevent="handleLinkClick(link.event)"
								>
									{{ link.text }}
								</a>
							</router-link>
						</li>
					</ul>

					<div class="ms-auto d-flex align-items-center">
						<template v-if="isAuthenticated">
							<a
								title="go to your profile"
								href="#"
								@click.prevent="showProfile"
							>
								<strong>{{ authInfo?.user?.name }}</strong>
							</a>
							<a
								class="ms-2 btn btn-outline-danger"
								href="#"
								@click.prevent="logout"
							>
								Sign out
							</a>
						</template>
						<router-link
							v-else
							:to="{ name: 'Login', query: returnQuery }"
							class="btn btn-outline-success"
						>
							Sign in
						</router-link>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<script>
	export default {
		name: 'AppHeader',
	};
</script>

<script setup>
	import { ref, onMounted, computed } from 'vue';
	import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';
	import { useAuthStore, logout } from '@/stores/authStore.mjs';

	defineProps({
		appName: {
			type: String,
			required: false,
			default: '',
		},
	});

	const router = useRouter();

	const { isAuthenticated, authInfo } = useAuthStore();

	const navLinks = ref([
		{ text: 'Home', event: 'MainPage', href: '#' },
		{ text: 'Cats', event: 'CatsList', href: '#' },
		{ text: 'Users', event: 'UsersList', href: '#' },
		{
			text: 'Helps',
			dropdown: true,
			subLinks: [
				{ text: 'FAQs', event: 'FAQs', href: '#' },
				{ text: 'About', event: 'About', href: '#' },
				{ text: 'Contact', event: 'Contact', href: '#' },
			],
		},
		// { text: 'Disabled', disabled: true },
	]);

	const returnQuery = computed(() => {
		const redirect = router.currentRoute.value.query.redirect;
		if (redirect) return { redirect };

		return { redirect: router.currentRoute.value.fullPath };
	});

	const setTransition = () => {
		emitter.emit('route-transition', 'bounce');
	};

	const showProfile = () => {
		setTransition();
		router.push({ name: 'UserProfile' });
	};

	const handleLinkClick = (page) => {
		if (!page) return;

		setTransition();
		router.push({ name: page });
	};

	const dropdownActive = (link) => {
		return link.subLinks.some((subLink) => {
			return router.currentRoute.value.name === subLink.event;
		});
	};

	const toggleNav = (action) => {
		document.getElementById('header-nav').classList[action]('slide-from-top');
	};

	const handleSubLinkClick = (ev) => {
		if (
			ev.target.parentElement.parentElement.classList.contains('dropdown-menu')
		)
			ev.target.parentElement.parentElement.classList.remove('show');

		setTransition();
	};

	const isActiveLink = (page) => {
		let name = router.currentRoute.value.name;
		if (name === 'CatDetail') name = 'CatsList';
		else if (name === 'ViewUser') name = 'UsersList';
		return name === page;
	};

	onMounted(() => {
		setTimeout(() => {
			toggleNav('add');
		}, 300);
	});
</script>
