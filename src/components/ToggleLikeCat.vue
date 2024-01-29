<template>

  <button v-if="isLiked(type, cat?.id)" :disabled="loading || isError || disabledWhenUnLiking"
    :class="{ 'skeleton' : loading || isError }" title="Unlike this cat"
    @click.prevent="toggleUnlikeCat" class="btn btn-sm btn-secondary">
    {{ (loading || isError) ? 'Loading...' : (disabledWhenUnLiking ? 'Unliking...' : 'Unlike') }}
  </button>
  <button v-else :disabled="loading || isError || disabledWhenLiking"
    :class="{ 'skeleton' : loading || isError }" title="Like this cat"
    @click.prevent="toggleLikeCat" class="btn btn-sm btn-primary">
    {{ (loading || isError) ? 'Loading...' : (disabledWhenLiking ? 'Liking...' : 'Like') }}
  </button>

</template>

<script>
  export default {
    name: 'ToggleLikeCat',
  }
</script>

<script setup>

  import { computed, } from 'vue';

	import emitter from '@/libs/eventBus.mjs';
	import { useAuthStore, } from '@/stores/authStore.mjs';

  import { isLiked, isLiking, isUnliking,
    toggleLike, toggleUnlike } from '@/stores/toggleLikesStore.mjs';


  const props = defineProps({
    cat: {
      type: Object,
			default: () => ({}),
    },
    loading: Boolean,
    isError: Boolean,
  });

  const graphqlFields = 'id, name, status, likes_count, owner { id, name, likes_count }';

  const type = 'Cat';

  const { authInfo } = useAuthStore();

  const disabledWhenLiking = computed(() => {
    return isLiking(type, props.cat?.id);
  });

  const disabledWhenUnLiking = computed(() => {
    return isUnliking(type, props.cat?.id);
  });


  const toggleLikeCat = () => {
    // console.log('toggleLikeCat', props.cat?.id, authInfo.value?.token);
    toggleLike(type, props.cat?.id, authInfo.value?.token, graphqlFields).catch(err => {
      if (err.name === 'MaxUnlikeRequestReached' || err.name === 'MaxLikeRequestReached') {
        emitter.emit('toast', { title: 'Notice', message: err.message });
        // return;
      }

      // console.log('toggleLikeCat err', err);
    });
  };

  const toggleUnlikeCat = () => {
    // console.log('toggleUnlikeCat', props.cat?.id);
    toggleUnlike(type, props.cat?.id, authInfo.value?.token, graphqlFields).catch(err => {
      if (err.name === 'MaxUnlikeRequestReached' || err.name === 'MaxLikeRequestReached') {
        emitter.emit('toast', { title: 'Notice', message: err.message });
        // return;
      }

      // console.log('toggleUnlikeCat err', err);
    });
  };

</script>
