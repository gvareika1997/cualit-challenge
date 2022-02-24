<script setup>
import TutorialDetail from "./TutorialDetail.vue";
import ErrorMessage from "./common/ErrorMessage.vue";
</script>

<template>
  <div class="list row" v-if="tutorialsRegistered">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Title"
          v-model="title"
        />
        <input
          type="text"
          class="form-control"
          placeholder="Description"
          v-model="description"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="filterTutorials"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="row" v-if="tutorials.length">
      <div class="col-md-6">
        <h4>Tutorials List</h4>
        <ul class="list-group">
          <li
            class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(tutorial, index) in tutorials"
            :key="index"
            @click="setActiveTutorial(tutorial, index)"
          >
            {{ tutorial.title }}
          </li>
        </ul>

        <button class="m-3 btn btn-sm btn-danger" @click="deleteAllTutorials">
          Remove All
        </button>
      </div>
      <div class="col-md-6">
        <div v-if="currentTutorial">
          <TutorialDetail
            :title="currentTutorial.title"
            :description="currentTutorial.description"
            :videoUrl="currentTutorial.videoUrl"
            :status="currentTutorial.status"
          />

          <router-link
            :to="'/tutorials/' + currentTutorial.id"
            class="m-3 btn btn-sm btn-warning"
            >Edit</router-link
          >
        </div>
        <div v-else>
          <br />
          <p>Please select a Tutorial</p>
        </div>
      </div>
    </div>
    <div class="list row" v-else>
      <ErrorMessage> No tutorials where found. </ErrorMessage>
    </div>
  </div>

  <div class="list row" v-else>
    <h2>There are no tutorials registered</h2>
    <div class="col-md-6">
      <router-link :to="'/add'" class="m-3 btn btn-sm btn-success"
        >Add new Tutorial</router-link
      >
    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "tutorials-list",
  data() {
    return {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      title: null,
      description: null,
      tutorialsRegistered: false,
    };
  },
  methods: {
    refreshList() {
      this.currentTutorial = null;
      this.currentIndex = -1;
    },

    setActiveTutorial(tutorial, index) {
      this.currentTutorial = tutorial;
      this.currentIndex = tutorial ? index : -1;
      console.log(tutorial);
    },

    fetchInitialList() {
      TutorialDataService.getAll(null, null).then((response) => {
        this.tutorials = response.data;
        this.tutorialsRegistered = this.tutorials.length;
      });
    },

    filterTutorials() {
      TutorialDataService.getAll(this.title, this.description).then(
        (response) => {
          this.tutorials = response.data;
          console.log(response.data);
          this.refreshList();
        }
      );
    },

    deleteAllTutorials() {
      TutorialDataService.deleteAll().then((response) => {
        console.log(response.data);
        this.refreshList();
        this.tutorials = [];
        this.tutorialsRegistered = false;
      });
    },
  },
  mounted() {
    this.fetchInitialList();
  },
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
