<!-- Home.vue -->
<template>
  <main>
    <div v-if="!isLoading" class="portfolio-list">
      <div class="categories">
        <label v-for="category in allCategories" :key="category">
          <input
            type="checkbox"
            v-model="selectedCategories"
            :value="category"
            @change="updateFilteredData"
          />
          {{ category }}
        </label>
      </div>

      <h3>portfolio</h3>
      <ul class="works">
        <li v-for="(work, index) in filteredData" :key="work.slug" class="work">
          <RouterLink :to="getProjectRoute(work.slug)">
            {{ work.title }}
          </RouterLink>
          <div>
            <span class="tag" v-for="tag in work.tags" :key="tag">[{{ tag }}]</span>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
  props: ["data", "isLoading"],
  data() {
    return {
      selectedCategories: [], // Initially, no categories selected
    };
  },
  computed: {
    allCategories() {
      // Assuming each item in data has a 'category' property
      return [...new Set(this.data.map(item => item.category))];
    },
    filteredData() {
      if (this.selectedCategories.length === 0) {
        // If no categories selected, return all data
        return this.data;
      } else {
        // Filter data based on selected categories
        return this.data.filter(item => this.selectedCategories.includes(item.category));
      }
    },
  },
  methods: {
    getProjectRoute(slug) {
      return {
        name: 'project',
        params: {
          project: slug,
        },
      };
    },
    updateFilteredData() {
      // Triggered when selected categories change
      // You can perform additional actions here if needed
    },
  },
};
</script>
