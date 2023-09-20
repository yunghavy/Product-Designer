<!-- eslint-disable vue/multi-word-component-names -->

<!-- eslint-disable no-useless-escape -->
<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="portifolio">
    <div class="title-container">
      <div>
        <h3 class="title">
          My Designs
        </h3>
      </div>
      <div class="filters">
        <span class="filter" v-bind:class="{ active: currentFilter === 'ALL' }" v-on:click="setFilter('ALL')">ALL</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'brand' }" v-on:click="setFilter('brand')">BRAND
          DESIGN</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'publication' }"
          v-on:click="setFilter('publication')">PUBLICATION DESIGN </span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'marketing' }"
          v-on:click="setFilter('marketing')">ADVERTISING</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'ui' }" v-on:click="setFilter('ui')">UI
          DESIGN</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'motion' }" v-on:click="setFilter('motion')">MOTION
          DESIGN</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'print' }" v-on:click="setFilter('print')">PRINT
          DESIGN</span>
        <span class="filter" v-bind:class="{ active: currentFilter === 'art' }" v-on:click="setFilter('art')">ART
          DESIGN</span>
      </div>
    </div>

    <transition-group class="projects" name="projects">

      <div class="project" v-if="currentFilter === project.category || currentFilter === 'ALL'" :key="project.category"
        v-for="project in projects">

        <div class="project-image-wrapper">
          <img class="project-image" v-bind:src="project.image">
          <div class="gradient-overlay"></div>
        </div>
      </div>
    </transition-group>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFilter: 'ALL',
      projects: [
        { image: require("@/assets/images/print1.png"), category: 'print' },
        { image: require("@/assets/images/print2.png"), category: 'print' },
        { image: require("@/assets/images/print3.png"), category: 'print' },
        { image: require("@/assets/images/print4.jpg"), category: 'print' },
        { image: require("@/assets/images/print5.jpg"), category: 'print' },
        { image: require("@/assets/images/print6.jpg"), category: 'print' },
        { image: require("@/assets/images/print7.jpg"), category: 'print' },
        { image: require("@/assets/images/ui1.png"), category: 'ui' },
        { image: require("@/assets/images/ui2.png"), category: 'ui' },
        { image: require("@/assets/images/ui3.png"), category: 'ui' },
        { image: require("@/assets/images/ui4.png"), category: 'ui' },
        { image: require("@/assets/images/ui7.png"), category: 'ui' },
        { image: require("@/assets/images/ui9.png"), category: 'ui' },
        { image: require("@/assets/images/logo1.png"), category: 'brand' },
        { image: require("@/assets/images/art1.jpg"), category: 'art' },
        { image: require("@/assets/images/art2.jpg"), category: 'art' },
        { image: require("@/assets/images/art3.jpg"), category: 'art' },
        { image: require("@/assets/images/art4.jpg"), category: 'art' },
        { image: require("@/assets/images/art5.jpg"), category: 'art' },
        { image: require("@/assets/images/art6.jpg"), category: 'art' },
        { image: require("@/assets/images/art7.jpg"), category: 'art' },
        { image: require("@/assets/images/art8.jpg"), category: 'art' },
        { image: require("@/assets/images/art9.jpg"), category: 'art' },
        { image: require("@/assets/images/art10.jpg"), category: 'art' },
        { image: require("@/assets/images/art11.jpg"), category: 'art' },
        { image: require("@/assets/images/art12.jpg"), category: 'art' },
        { image: require("@/assets/images/art13.jpg"), category: 'art' },
      ]
    };
  },
  methods: {
    setFilter(filter) {
      this.currentFilter = filter;
    }
  }
};
</script>

<style>
.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.title {
  font-size: 30px;
}

.filters {
  text-align: center;
  margin-bottom: 20px;
}

.filter {
  font-size: 16px;
  padding: 8px 16px;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.filter.active {
  background-color: #007bff;
  color: #fff;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.project {
  transition: all .35s ease-in-out;
  margin: 10px;
}

.project-image-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.project-image {
  display: block;
  height: auto;
  transition: transform 0.2s;
  width: 100%;
  height: 200px;
}

.project-image:hover {
  transform: scale(1.1);
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
}


.project-title {
  font-size: 16px;
}
</style>

