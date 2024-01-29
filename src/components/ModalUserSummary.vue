<template>

  <Modal ref="modalRef" class='user-summary'
    :hide-ok="true" :hide-cancel="true"
    data-bs-backdrop="static" data-bs-keyboard="false"
    modal-dialog-size="lg" :hide-header-boolean="true">

    <UserSummary :loading="loadingUser" :user="user"
      @open-detail="openDetail" :load-user-error="loadUserError" />

    <template #footer>
      <button type="button" class="btn btn-secondary" @click="modalRef.modal.hide()">Close</button>
    </template>
  </Modal>

</template>

<script>
export default {
  name: 'ModalUserSummary',
}
</script>

<script setup>

  import { ref, onMounted, onBeforeUnmount, } from 'vue';
	import { useRouter } from 'vue-router';

	import emitter from '@/libs/eventBus.mjs';
	import { useAuthStore, } from '@/stores/authStore.mjs';

  import { useUserStore, fetchUser, } from '@/stores/usersStore.mjs';

  import Modal from './Modal.vue';
  import UserSummary from './UserSummary.vue';


  const router = useRouter();

  const { authInfo } = useAuthStore();

  const modalRef = ref(null);
  const { user, loadingUser, loadUserError } = useUserStore();


  const openDetail = (id) => {
    modalRef.value.modal.hide();

    setTimeout(() => {
      emitter.emit('route-transition', 'just-fade');

      router.push({ name: 'ViewUser', params: { id } });
    }, 500);
  };


  onMounted(() => {
    emitter.on('show-user-preview', (userId) => {
      modalRef.value.modal.show();
      fetchUser(userId, `
        id, name, email, image, bio, followed, followers_count,
        cats_count, status, created_at, likes_count, facebook_url,
        twitter_url, instagram_url, linkedin_url, youtube_url, github_url,
        job_title
      `, authInfo.value?.token);
    });
  });

  onBeforeUnmount(() => {
    emitter.off('show-user-preview');
  });

</script>
