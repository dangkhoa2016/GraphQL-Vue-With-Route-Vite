import { createRouter, createWebHashHistory } from 'vue-router';
import { isLoggedIn } from '@/stores/authStore.mjs';
import { getComponentPath } from '@/libs/helpers.mjs';
import emitter from '@/libs/eventBus';

const loadComponent = async (componentName, isView) => {
	emitter.emit('loading-component', { path: componentName, state: 'loading' });

	let component = null;
	try {
		component = await import(`@/${isView ? 'views' : 'components'}/${componentName}.vue`);
	} catch (ex) {
		console.log('Error loadComponent', ex);
	}
	emitter.emit('loading-component', { path: componentName, state: 'ok' });
	return component;
};

const router = createRouter({
	history: createWebHashHistory('/'),
	linkExactActiveClass: 'active',
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'MainPage',
			meta: { requiresAuth: false },
			component: () => loadComponent('MainPage', true),
		},
		{
			path: '/about',
			name: 'About',
			meta: { requiresAuth: false },
			component: () => loadComponent('About', true),
		},
		{
			path: '/features',
			name: 'Features',
			meta: { requiresAuth: false },
			component: () => loadComponent('Features', true),
		},
		{
			path: '/pricing',
			name: 'Pricing',
			meta: { requiresAuth: false },
			component: () => loadComponent('Pricing', true),
		},
		{
			path: '/users',
			name: 'UsersList',
			meta: { requiresAuth: false },
			component: () => loadComponent('UsersList', true),
		},
		{
			path: '/user/:id',
			name: 'ViewUser',
			meta: { requiresAuth: false },
			component: () => loadComponent('ViewUser', true),
		},
		{
			path: '/cats',
			name: 'CatsList',
			meta: { requiresAuth: true },
			component: () => loadComponent('CatsList', true),
		},
		{
			path: '/cat/:id',
			name: 'CatDetail',
			meta: { requiresAuth: true },
			component: () => loadComponent('CatDetail', true),
		},
		{
			path: '/faqs',
			name: 'FAQs',
			meta: { requiresAuth: false },
			component: () => loadComponent('FAQs', true),
		},
		{
			path: '/login',
			name: 'Login',
			meta: { requiresAuth: false },
			component: () => loadComponent('Login', true),
		},
		{
      path: '/contact',
      name: 'Contact',
      meta: { requiresAuth: false },
      component: () => loadComponent('Contact', true),
    },
    {
      path: '/profile',
      name: 'UserProfile',
      meta: { requiresAuth: true },
      component: () => loadComponent('UserProfile', true),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      meta: { requiresAuth: false },
      component: () => loadComponent('NotFound', true),
    }
	],
	scrollBehavior(to, from /*, savedPosition*/) {
		return new Promise((resolve /*, reject*/) => {
			setTimeout(
				() => {
					resolve({ left: 0, top: 0 });
				},
				to === from ? 0 : 500
			);
		});
	},
});

router.beforeEach((to, from, next) => {
	// console.log('beforeEach', to);
	if (to.meta.requiresAuth === true && !isLoggedIn()) {
		emitter.emit('toast', {
			title: 'Notice',
			message: 'Please login to see users cats.',
		});
		next({ name: 'Login', query: { redirect: to.fullPath } });
		return;
	}

	next();
});

router.afterEach((to /*, from*/) => {
	emitter.emit('loading-component', {
		path: getComponentPath(to.name, true),
		state: 'ok',
	});
});

export default router;
