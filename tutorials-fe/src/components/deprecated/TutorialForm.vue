<template>
  <p>Deprecated</p>

  <!-- <slot name="header" :text="`Tutorial`" /> -->
  <!-- <form>
    <div class="form-group">
      <label for="title">Title </label>
      <input type="text" class="form-control" id="title" v-model="title" />
    </div>
    <br />
    <div class="form-group">
      <label for="description">Description</label>
      <textarea class="form-control" id="description" v-model="description" />
    </div>
    <br />
    <div class="form-group">
      <label for="videoUrl">Video URL</label>
      <input
        type="text"
        class="form-control"
        id="videoUrl"
        v-model="videoUrl"
      />
    </div>
    <br />
    <div class="d-flex justify-content-between">
      <label><strong>Status:</strong></label>
      <div>
        <input type="radio" value="PUBLISHED" v-model="status" />
        <label for="PUBLISHED">Published</label>
      </div>
      <div>
        <input type="radio" value="HIDDEN" v-model="status" />
        <label for="HIDDEN">Hidden</label>
      </div>
    </div>
    <br />
  </form> -->
  <!-- <slot name="action"> </slot> -->
</template>

<script>
export default {
  name: "tutorial-form",
  props: ["title", "description", "videoUrl", "status"],
  // data() {
  //   return {
  //     tutorial: this.title,
  //   }
  // },
  // watch: {
  //   title(newVal, oldVal)
  //   {
  //     console.log(newVal)
  //     // this check is mandatory to prevent endless cycle
  //     if(newVal !== oldVal) this.checked = newVal;
  //   },
  //   checked(newVal, oldVal)
  //   {
  //      console.log(newVal)
  //     // this check is mandatory to prevent endless cycle
  //     if(newVal !== oldVal) this.$emit('input', newVal);
  //   }
  // },
};
</script>
