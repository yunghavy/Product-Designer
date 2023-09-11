<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="gallery" class="gallery" >
    <!-- Image elements here -->
    <div v-for="index in 10" :key="index" class="image" @click="showOverlay(index)">
      <img :src="require(`@/assets/photo${index}.jpg`)" :alt="'photo ' + index" />
    </div>

    <!-- Overlay -->
    <div class="overlay" v-if="showOverlayState" @click="hideOverlay">
      <div class="overlay-content">
        <img :src="selectedImage" alt="Selected Photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showOverlayState: false,
      selectedImage: "",
    };
  },
  methods: {
    showOverlay(index) {
      this.showOverlayState = true;
      this.selectedImage = require(`@/assets/photo${index}.jpg`);
    },
    hideOverlay() {
      this.showOverlayState = false;
      this.selectedImage = "";
    },
  },
};
</script>

<style scoped>
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 10px;
  margin: 20px 0;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

.image {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  height: 300px; /* Fixed height */
  text-align: center;
}

.image img {
  display: block;
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
  transition: transform 0.2s;
}

.image img:hover {
  transform: scale(1.1);
}

 .overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
} 

.overlay-content {
  max-width: 80%;
  max-height: 80%;
  overflow: auto;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.overlay-content img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
.overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.overlay img {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
}
.overlay-content img:hover {
  cursor: zoom-out;
}
</style>
