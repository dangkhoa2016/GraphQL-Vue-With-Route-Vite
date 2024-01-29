<template>

  <ul class="social mb-0 mt-3 list-group">
    <li class="list-group-item px-2 d-flex justify-content-between align-items-center">
      <div>
        <svg class="cat-stats me-1"><use xlink:href="#age"></use></svg>
        Age
      </div>
      <span class="badge bg-primary rounded-pill">{{ calculateAge(cat) }}</span>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between align-items-center">
      <div>
        <svg class="cat-stats me-1"><use xlink:href="#likes"></use></svg>
        Likes
      </div>
      <span class="badge bg-primary bg-opacity-75 rounded-pill">{{ cat.likes_count || 0 }}</span>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between align-items-center">
      <div>
        <svg class="cat-stats me-1"><use xlink:href="#photos"></use></svg>
        Photos
      </div>
      <span class="badge bg-primary bg-opacity-75 rounded-pill">{{ cat.photos_count || 0 }}</span>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between align-items-center text-muted small">
      <div>
        <svg class="cat-stats me-1"><use xlink:href="#calendar3"></use></svg>
        Posted at
      </div>
      <span>{{ formatDateTime(cat.created_at) }}</span>
    </li>
    <li v-if="isShowAtProfile" class="list-group-item px-2 d-flex justify-content-between align-items-center">
      <div>
        <svg class="cat-stats me-1"><use xlink:href="#user"></use></svg>
        Owner
      </div>
      <a href="#" class="text-decoration-none text-success text-opacity-50"
        @click.prevent="openOwnerDetail" title="View owner details">
        <span class="fw-semibold">{{ cat.owner?.name }}</span>
      </a>
    </li>
    <li class="list-group-item px-2 d-flex justify-content-between align-items-center">
      <ToggleLikeCat v-if='showLike' :cat="cat" />
      <button class='btn btn-secondary btn-sm' title="View more details about this cat"
        @click.prevent="openDetail">View</button>
    </li>
    <li v-if="isAdmin" class="list-group-item px-2">
      <ToggleStatus :status="cat?.status"
        :model-id="cat?.id" model-type="Cat" />
    </li>
  </ul>

</template>

<script>
  export default {
    name: 'CatInfoShort',
  }
</script>

<script setup>

  import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';

	import { calculateAge } from '@/libs/catHelpers.mjs';
  import { formatDateTime, } from '@/libs/dateTimeHelpers.mjs';

  import ToggleLikeCat from './ToggleLikeCat.vue';
  import ToggleStatus from './ToggleStatus.vue';


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
    showLike: {
      type: Boolean,
      default: true,
    },
  });

  const router = useRouter();


	const openOwnerDetail = () => {
    emitter.emit('route-transition', 'just-fade');
    router.push({ name: 'ViewUser', params: { id: props.cat?.user_id } });
	};

  const openDetail = () => {
    emitter.emit('route-transition', 'just-fade');
    router.push({ name: 'CatDetail', params: { id: props.cat?.id } });
  };

</script>
