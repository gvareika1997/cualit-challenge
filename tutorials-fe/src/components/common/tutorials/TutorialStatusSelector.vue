<template>
  <div class="d-flex justify-content-between">
    <label><strong>Status:</strong></label>
    <div>
      <input
        type="radio"
        value="PUBLISHED"
        v-model="status"
        @input="onUpdate"
      />
      <label for="PUBLISHED">Published</label>
    </div>
    <div>
      <input type="radio" value="HIDDEN" v-model="status" @input="onUpdate" />
      <label for="HIDDEN">Hidden</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: [String],
    },
  },
  data() {
    return {
      status: this.modelValue,
    };
  },
  methods: {
    onUpdate(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
