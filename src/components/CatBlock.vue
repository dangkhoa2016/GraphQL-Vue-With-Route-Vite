<template>
	<!-- Cat item-->
	<div class="col-xl-3 col-lg-4 col-md-6 mb-5">
		<div
			class="rounded shadow-sm py-3 px-2 position-relative"
			:style="`background: var(${randomBgColor()})`"
		>
			<div v-if="showDisabled" :class="disabledClass">Disabled</div>
			<a href="#" class="d-block text-center" @click.prevent="openDetail">
				<img
					:src="avatarUrl"
					class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
					:alt="cat?.name"
					width="100"
					@load="onImageLoaded($event.target)"
				/>
			</a>
			<a href="#" class="d-block text-center" @click.prevent="openDetail">
				<h5 class="mb-0" :title="cat.name">{{ cat.name }}</h5>
			</a>
			<CatInfoShort
				:cat="cat"
				:show-like="!isOwner"
				:is-show-at-profile="isShowAtProfile"
				:is-admin="isAdmin"
			/>
		</div>
	</div>
	<!-- End-->
</template>

<script>
	export default {
		name: 'CatBlock',
	};
</script>

<script setup>
	import { computed } from 'vue';
	import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';
	import { defaultImage } from '@/libs/userHelpers.mjs';
	import { randomBgColor } from '@/libs/catHelpers.mjs';
	import { disabledClasses } from '@/libs/helpers.mjs';

	import CatInfoShort from './CatInfoShort.vue';

	const props = defineProps({
		cat: {
			type: Object,
			default: () => ({}),
		},
		isShowAtProfile: {
			type: Boolean,
			default: false,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		currentUserId: {
			type: [Number, String],
			required: false,
			default: null,
		},
	});

	const router = useRouter();

	const { Cat: disabledClass } = disabledClasses;

	const isOwner = computed(() => {
		return props.cat?.user_id?.toString() === props.currentUserId?.toString();
	});

	const showDisabled = computed(() => {
		let result = false;
		if (isOwner.value || props.isAdmin) result = props.cat?.status === false;
		return result;
	});

	const avatarUrl = computed(() => {
		return props.cat?.image || defaultImage;
	});

	const openDetail = () => {
		emitter.emit('route-transition', 'just-fade');
		router.push({ name: 'CatDetail', params: { id: props.cat?.id } });
	};

	const onImageLoaded = (img) => {
		if (img.src === defaultImage) return;

		img.classList.remove('skeleton-img');
	};
</script>
