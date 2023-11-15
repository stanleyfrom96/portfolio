<!-- Single.vue -->
<template>
  <main>
    <div v-if="!isLoading" class="project-details">
      <div>
        <h3>{{ currentProject.title }} ({{ currentProject.year }})</h3>
        <p>{{ currentProject.content }}</p>
      </div>
      <div>

        <!-- Check if the URL is a YouTube link -->
        <div v-if="isYouTubeLink(currentProject.url)">
          <iframe
          width="560"
          height="315"
          :src="embedYouTubeLink(currentProject.url)"
          frameborder="0"
          allowfullscreen
          ></iframe>
        </div>
        <!-- If not a YouTube link and is an audio file, show an audio element -->
        <audio v-else-if="isAudioFile(currentProject.url)" controls>
          <source :src="currentProject.url" type="audio/mp3">
          Your browser does not support the audio element.
        </audio>
        <!-- If not a YouTube link, show a regular link -->
        <p v-else>
          URL: <a :href="currentProject.url" target="_blank">{{ currentProject.url }}</a>
        </p>
        <p class="tag"><span v-for="tag in currentProject.tags" :key="tag">[{{ tag }}]</span></p>
      </div>
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
  methods: {
    isYouTubeLink(url) {
      // Check if the URL is a YouTube link
      return url.includes("youtube.com") || url.includes("youtu.be");
    },
    embedYouTubeLink(url) {
      // Convert YouTube link to embedded format
      // Example: https://www.youtube.com/watch?v=abc123 -> https://www.youtube.com/embed/abc123
      const videoId = this.getYouTubeVideoId(url);
      return `https://www.youtube.com/embed/${videoId}`;
    },
    getYouTubeVideoId(url) {
      // Extract the video ID from a YouTube URL
      const match = url.match(/[?&]v=([^?&]+)/);
      return match ? match[1] : null;
    },
    isAudioFile(url) {
      const audioExtensions = [".mp3", ".ogg", ".wav", ".aac"]; // Add more extensions if needed
      return audioExtensions.some((ext) => url.toLowerCase().endsWith(ext));
    }
  },
};
</script>
