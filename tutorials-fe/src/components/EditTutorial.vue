<script setup>
import SuccessMessage from "./common/SuccessMessage.vue";
import ErrorMessage from "./common/ErrorMessage.vue";
import TextInput from "./common/TextInput.vue";
import TutorialStatusSelector from "./common/tutorials/TutorialStatusSelector.vue";
</script>

<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Edit Tutorial</h4>

    <form>
      <TextInput v-model="currentTutorial.title" label="Title" />
      <br />
      <TextInput v-model="currentTutorial.description" label="Description" />
      <br />
      <TextInput v-model="currentTutorial.videoUrl" label="Video URL" />
      <br />
      <TutorialStatusSelector v-model="currentTutorial.status" />
      <br />
    </form>

    <div class="d-flex justify-content-between">
      <div>
        <button class="btn btn-success" @click="updateTutorial">Update</button>
      </div>
      <div>
        <button class="btn btn-danger" @click="deleteTutorial">Delete</button>
      </div>
    </div>

    <br />

    <div v-if="success">
      <SuccessMessage> {{ message }} </SuccessMessage>
    </div>
    <div v-else-if="error">
      <ErrorMessage> {{ message }} </ErrorMessage>
    </div>
  </div>

  <div v-else>
    <br />
    <p>Not found</p>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "edit-tutorials",
  data() {
    return {
      currentTutorial: null,
      message: "",
      success: null,
      error: null,
    };
  },
  methods: {
    getTutorial(id) {
      TutorialDataService.get(id).then((response) => {
        this.currentTutorial = response.data;
      });
    },

    updateTutorial() {
      const data = {
        title: this.currentTutorial.title,
        description: this.currentTutorial.description,
        videoUrl: this.currentTutorial.videoUrl,
        status: this.currentTutorial.status,
      };

      TutorialDataService.update(this.currentTutorial.id, data)
        .then((response) => {
          console.log(response.data);
          this.message = "The tutorial was updated successfully!";
          this.success = true;
        })
        .catch((e) => {
          console.log(e);
          this.message = "Action failed.";
          this.error = true;
        });
    },

    deleteTutorial() {
      TutorialDataService.delete(this.currentTutorial.id).then((response) => {
        console.log(response.data);
        this.$router.push({ name: "tutorials" });
      });
    },
  },

  mounted() {
    //this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
