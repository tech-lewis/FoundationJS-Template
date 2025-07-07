<template>
  <div class="weui_cell weui_cell_switch">
    <div class="weui_cell_hd weui_cell_primary">
      <label class="weui_label" :style="{ width: title.length + 1 + 'em' }">{{
        title
      }}</label>
      <span class="label_desc" v-if="inlineDesc">{{ inlineDesc }} {{value}}</span>
    </div>
    <div class="weui_cell_ft">
      <input
        class="weui_switch"
        type="checkbox"
        :disabled="disabled"
        :checked="modelValue"
        @input="$emit('update:modelValue', $event.target.checked)"
      />
    </div>
  </div>
</template>

<script>
import InlineDesc from "../xCell/Inline-desc.vue";
export default {
  components: {
    InlineDesc,
  },
  props: {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    title: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    inlineDesc: {
      type: String,
    },
  },
  ready: function () {},
  watch: {
    value: function (newVal) {
      this.$emmit("change", newVal);
    },
  },
};
</script>

<style>
.weui_cell_switch .weui_cell_ft {
  font-size: 0;
}
</style>