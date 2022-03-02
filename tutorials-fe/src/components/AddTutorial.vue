<script setup>
import SuccessMessage from "./common/SuccessMessage.vue";
import ErrorMessage from "./common/ErrorMessage.vue";
import TextInput from "./common/TextInput.vue";
//import TutorialForm from "./deprecated/TutorialForm.vue";
import TutorialStatusSelector from "./common/tutorials/TutorialStatusSelector.vue";
</script>

<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <h4>Create Tutorial</h4>

      <form @submit.prevent="saveTutorial">
        <TextInput v-model="tutorial.title" label="Title" />
        <br />
        <TextInput v-model="tutorial.description" label="Description" />
        <br />
        <TextInput v-model="tutorial.videoUrl" label="Video URL" />
        <br />
        <TutorialStatusSelector v-model="tutorial.status" />
        <br />
        <button type="submit" class="btn btn-success">Create</button>
      </form>

      <!-- <TutorialForm
        :save="saveTutorial"
        :title="tutorial.title"
        :description="tutorial.description"
        :videoUrl="tutorial.videoUrl"
        :status="tutorial.status"
      >
        <template #header>
          <h4>Create Tutorial</h4>
        </template>
        <template #action>
          <button type="submit" class="btn btn-success">Create</button>
        </template>
      </TutorialForm> -->
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
        status: "PUBLISHED",
      },
      submitted: false,
      error: false,
    };
  },
  methods: {
    saveTutorial() {
      console.log("Save tutorial");
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
