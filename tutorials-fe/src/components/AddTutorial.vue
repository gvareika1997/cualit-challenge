<script setup>
//import TutorialForm from "./deprecated/TutorialForm.vue";
import SuccessMessage from "./common/SuccessMessage.vue";
import ErrorMessage from "./common/ErrorMessage.vue";
</script>

<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <!-- <TutorialForm> -->
      <!-- <template #header> -->
      <h4>Create Tutorial</h4>
      <!-- </template> -->

      <form>
        <div class="form-group">
          <label for="title">Title </label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="tutorial.title"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            v-model="tutorial.description"
          />
        </div>
        <br />
        <div class="form-group">
          <label for="videoUrl">Video URL</label>
          <input
            type="text"
            class="form-control"
            id="videoUrl"
            v-model="tutorial.videoUrl"
          />
        </div>
        <br />
        <div class="d-flex justify-content-between">
          <label><strong>Status:</strong></label>
          <div>
            <input type="radio" value="PUBLISHED" v-model="tutorial.status" />
            <label for="PUBLISHED">Published</label>
          </div>
          <div>
            <input type="radio" value="HIDDEN" v-model="tutorial.status" />
            <label for="HIDDEN">Hidden</label>
          </div>
        </div>
        <br />
      </form>

      <!-- <template #action> -->
      <button @click="saveTutorial" class="btn btn-success">Create</button>
      <!-- </template> -->
      <!-- </TutorialForm> -->
    </div>

    <div v-else>
      <SuccessMessage> You submitted successfully! </SuccessMessage>
    </div>
    <br />
    <div v-if="error">
      <ErrorMessage> Error creating tutorial. </ErrorMessage>
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        status: false,
      },
      submitted: false,
      error: false,
    };
  },
  methods: {
    saveTutorial() {
      this.error = null;
      var data = {
        title: this.tutorial.title,
        description: this.tutorial.description,
        videoUrl: this.tutorial.videoUrl,
        status: this.tutorial.status,
      };
      console.log(data);

      TutorialDataService.create(data)
        .then((response) => {
          this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          this.error = e;
          console.log(e);
        });
    },

    newTutorial() {
      this.submitted = false;
      this.tutorial = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
