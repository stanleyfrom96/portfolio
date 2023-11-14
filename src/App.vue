<template>
  <div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">stan wiersma</RouterLink>
          <RouterLink to="/about">about</RouterLink>
        </nav>
      </div>
    </header>

    <div v-if="isLoading">Loading...</div>
    <RouterView v-else :data="data" />
  </div>
</template>


<style scoped>

</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';

const data = ref({
  works: {},
  projects: {},
  videos: {},
  sites: {},
});
const isLoading = ref(false);

const getData = async () => {
  try {
    isLoading.value = true;
    const response = await fetch('./content.json');
    data.value = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(getData);
</script>
