<template>
  <h4>Tutorial</h4>
  <div>
    <label><strong>Title:</strong></label> {{ title }}
  </div>
  <div>
    <label><strong>Description:</strong></label>
    {{ description }}
  </div>
  <div>
    <label><strong>Video:</strong></label>
    <a v-bind:href="videoUrl"> URL </a>
  </div>
  <div>
    <label><strong>Status:</strong></label>
    {{ status == "PUBLISHED" ? "Published" : "Hidden" }}
  </div>
</template>

<script>
export default {
  name: "tutorial-detail",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: String,
    videoUrl: String,
    status: {
      validator(value) {
        // The value must match one of these strings
        return ["PUBLISHED", "HIDDEN"].includes(value);
      },
    },
  },
};
</script>
