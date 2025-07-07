// src/directives/focus.js
import { onMounted, onBeforeUnmount } from 'vue';

export default {
  mounted(el, binding) {
    const focusElement = () => el.focus();

    if (binding.value) {
      focusElement();
    }

    const handleFocus = () => {
      if (binding.value) {
        focusElement();
      }
    };

    onMounted(() => {
      if (binding.value) {
        focusElement();
      }
    });

    onBeforeUnmount(() => {
      el.removeEventListener('focus', handleFocus);
    });

    el.addEventListener('focus', handleFocus);
  },
  updated(el, binding) {
    if (binding.value) {
      el.focus();
    }
  }
};