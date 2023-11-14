<script setup>
</script>

<template>
  <main>
    <div v-if="!isLoading" class="portfolio-list">
      <h3>work</h3>
      <ul class="works">
        <li v-for="(work, index) in data.works" :key="work.title" class="work">
          <a :href="work.url" target="_blank">{{ work.title }}</a> {{ "(" + work.year + ")" }}
          <div>
            <span class="tag" v-for="tag in work.tags">[{{ tag }}]</span>
          </div>
        </li>
      </ul>

      <h3>sites</h3>
      <ul class="sites">
        <li v-for="(site, index) in data.sites" :key="site.title" class="site">
          <a :href="site.url" target="_blank">{{ site.title }}</a> {{ "(" + site.year + ")" }}
          <div>
            <span class="tag" v-for="tag in site.tags">[{{ tag }}]</span>
          </div>
        </li>
      </ul>

      <h3>projects</h3>
      <ul class="projects">
        <li v-for="(project, index) in data.projects" :key="project.title" class="project">
          <a :href="project.url" target="_blank">{{ project.title }}</a> {{ "(" + project.year + ")" }}
          <div>
            <span class="tag" v-for="tag in project.tags">[{{ tag }}]</span>
          </div>
        </li>
      </ul>

      <h3>video</h3>
      <ul class="video">
        <li v-for="(video, index) in data.videos" :key="video.title" class="video">
          <a :href="video.url" target="_blank">{{ video.title }}</a> {{ "(" + video.year + ")" }}
          <div>
            <span class="tag" v-for="tag in video.tags">[{{ tag }}]</span>
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
};
</script>
