<script setup>
//import TutorialForm from "./deprecated/TutorialForm.vue";
import SuccessMessage from "./common/SuccessMessage.vue";
import ErrorMessage from "./common/ErrorMessage.vue";
</script>

<template>
  <div v-if="currentTutorial" class="edit-form">
    <!-- <TutorialForm
      :title="currentTutorial.title"
      :description="currentTutorial.description"
      :videoUrl="currentTutorial.videoUrl"
      :status="currentTutorial.status" 
    >-->
    <!-- <template #header> -->
    <h4>Edit Tutorial</h4>
    <!-- </template> -->

    <form>
      <div class="form-group">
        <label for="title">Title </label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentTutorial.title"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          class="form-control"
          id="description"
          v-model="currentTutorial.description"
        />
      </div>
      <br />
      <div class="form-group">
        <label for="videoUrl">Video URL</label>
        <input
          type="text"
          class="form-control"
          id="videoUrl"
          v-model="currentTutorial.videoUrl"
        />
      </div>
      <br />
      <div class="d-flex justify-content-between">
        <label><strong>Status:</strong></label>
        <div>
          <input
            type="radio"
            value="PUBLISHED"
            v-model="currentTutorial.status"
          />
          <label for="PUBLISHED">Published</label>
        </div>
        <div>
          <input type="radio" value="HIDDEN" v-model="currentTutorial.status" />
          <label for="HIDDEN">Hidden</label>
        </div>
      </div>
      <br />
    </form>

    <!-- <template #action> -->
    <div class="d-flex justify-content-between">
      <div>
        <button type="submit" class="btn btn-success" @click="updateTutorial">
          Update
        </button>
      </div>
      <div>
        <button class="btn btn-danger" @click="deleteTutorial">Delete</button>
      </div>
    </div>
    <!-- </template> -->
    <!-- </TutorialForm> -->
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
