<!-- Single.vue -->
<template>
  <main>
    <div v-if="!isLoading" class="project-details">
      <h1>{{ currentProject.title }}</h1>
      <p>{{ currentProject.year }}</p>
      <a :href="currentProject.url" target="_blank">click to view</a>
      <p>{{ currentProject.content }}</p>
      <p><span v-for="tag in currentProject.tags" :key="tag">{{ tag }}, </span></p>
    </div>
  </main>
</template>

<script>
export default {
  name: "Single",
  props: ["data", "isLoading"],
  computed: {
    currentProject() {
      // Access project details based on the route parameter
      const projectSlug = this.$route.params.project;
      return this.data.find(project => encodeURIComponent(project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')) === projectSlug);
    }
  },
};
</script>
