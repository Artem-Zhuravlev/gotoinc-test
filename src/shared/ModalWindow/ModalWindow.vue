<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        class="modal"
        v-if="show"
        @click="closeModal"
        @keydown.escape="closeModal"
      >
        <div class="modal__wrapper">
          <div class="modal__body" @click.stop>
            <div class="modal__content" v-bind="$attrs">
              <slot />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import {
  onMounted,
  onUnmounted,
  withDefaults,
  defineProps,
  defineEmits,
} from 'vue';

interface Props {
  show: boolean;
}

withDefaults(defineProps<Props>(), {
  show: false,
});

const emit = defineEmits<{
  (e: 'update:show'): void;
}>();

const closeModalByKey = (e: KeyboardEvent): void => {
  if (e.key === 'Escape') {
    emit('update:show');
  }
};

const closeModal = (): void => {
  emit('update:show');
};

onMounted(() => {
  window.addEventListener('keyup', closeModalByKey);
});

onUnmounted(() => {
  window.removeEventListener('keyup', closeModalByKey);
});
</script>

<style scoped lang="scss">
.modal {
  display: grid;
  align-items: center;
  justify-items: center;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  overflow-y: auto;

  &__wrapper {
    position: relative;
    z-index: 2;
    justify-self: stretch;
    padding: 40px 20px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
    color: #000;
    padding: 20px;
    margin: 0 auto;
    max-width: 28rem;
    min-width: 11.75rem;
    min-height: 9.375rem;
    transition: all 0.7s ease 0s;
    border-radius: 16px;
    background: #fff;
  }

  &__content {
    align-self: stretch;
  }
}

.modal-enter-active .modal__body,
.modal-leave-active .modal__body {
  transition: all 0.4s ease 0s;
}

.modal-enter-from .modal__body,
.modal-leave-to .modal__body {
  opacity: 0;
  transform: translateY(-100%);
}

</style>
