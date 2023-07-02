<style src="../components/chat/css/chat.css"></style>

<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>

<script>
import ThreadSection from '../components/chat/ThreadSection.vue'
import MessageSection from '../components/chat/MessageSection.vue'

export default {
  components: {
    ThreadSection,
    MessageSection
  }
}
</script>
