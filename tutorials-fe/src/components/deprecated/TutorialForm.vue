<script setup>
import TextInput from "../common/TextInput.vue";
import TutorialStatusSelector from "../common/tutorials/TutorialStatusSelector.vue";
</script>

<template>
  <slot name="header" :text="`Tutorial`" />
  <form @submit.prevent="save">
    <TextInput v-model="tutorial.title" label="Title" />
    <br />
    <TextInput v-model="tutorial.description" label="Description" />
    <br />
    <TextInput v-model="tutorial.videoUrl" label="Video URL" />
    <br />
    <TutorialStatusSelector v-model="tutorial.status" />
    <br />
    <slot name="action"> </slot>
  </form>
</template>

<script>
export default {
  name: "tutorial-form",
  props: ["id", "title", "description", "videoUrl", "status", "submitForm"],
  data() {
    return {
      tutorial: {
        id: null,
        title: this.title,
        description: this.description,
        status: this.status,
      },
    };
  },
};
</script>
