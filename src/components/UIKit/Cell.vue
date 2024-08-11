<template>
  <div class="weui_cell" v-if="!is_link">
    <div class="weui_cell_bd weui_cell_primary">
      <p>{{ title }}</p>
      <inline-desc>{{ desc }}</inline-desc>
    </div>
    <div class="weui_cell_ft">{{ value }}</div>
  </div>
  <a class="weui_cell" href="javascript:;" v-if="is_link" v-link="link">
    <div class="weui_cell_bd weui_cell_primary">
      <p>{{ title }}</p>
      <inline-desc v-if="desc">{{ desc }}</inline-desc>
    </div>
    <div class="weui_cell_ft with_arrow">
      {{ value }}
    </div>
  </a>
</template>

<script>
import InlineDesc from './Inline-desc'
module.exports = {
  components: {
    InlineDesc
  },
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    is_link: {
      type: Boolean,
      default: false
    },
    link: {
      type: String
    },
    desc: {
      type: String
    }
  }
}
</script>

<style></style>
