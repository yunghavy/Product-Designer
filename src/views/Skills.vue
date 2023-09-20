<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="skills" class="skills skills-container">
      <div v-for="(skill, index) in skills" :key="index" class="skill-card">
        <div class="skill-icon">
          <img :src="skill.icon" :alt="skill.name" />
        </div>
        <div class="skill-name">{{ skill.name }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        skills: [
          { name: "HTML", icon: require("@/assets/html5.svg") },
          { name: "CSS", icon: require("@/assets/css3-alt.svg") },
          { name: "Tailwind CSS", icon: require("@/assets/tailwind-css-svgrepo-com.svg") },
          { name: "Figma", icon: require("@/assets/figma-svgrepo-com.svg") },
          { name: "Adobe XD", icon: require("@/assets/adobe-xd-svgrepo-com.svg") },
          { name: "React", icon: require("@/assets/react-svgrepo-com.svg") },
          { name: "GitHub", icon: require("@/assets/github.svg") },
          { name: "Vue.js", icon: require("@/assets/vue-svgrepo-com.svg") },
          { name: "Laravel", icon: require("@/assets/laravel-svgrepo-com.svg") },
          { name: "Bootstrap", icon: require("@/assets/bootstrap-svgrepo-com.svg") },
          { name: "Photoshop", icon: require("@/assets/photoshop-cc-logo-svgrepo-com.svg") },
          { name: "Illustrator", icon: require("@/assets/illustrator-svgrepo-com.svg") },
          { name: "After Effects", icon: require("@/assets/after-effects-cc-logo-svgrepo-com.svg") }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .skill-card {
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s;
  }
  
  .skill-card:hover {
    transform: scale(1.05);
  }
  
  .skill-icon img {
    max-width: 60px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .skill-name {
    font-size: 1.1em;
  }
  </style>
  