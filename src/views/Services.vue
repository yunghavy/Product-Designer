<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div id="services" class="services">
      <h2>Services Offered</h2>
      <ul>
        <li v-for="service in services" :key="service.id" class="service-item">
          {{ service.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, name: "User Interface & Experience Design" },
          { id: 2, name: "Usability Audits" },
          { id: 3, name: "Graphic Design" },
          { id: 4, name: "Brand Identity Design" },
          { id: 5, name: "Design Consulting" },
          { id: 6, name: "Prototyping and Mockup" },
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .services {
    max-width: 800px;
    margin: auto;
    text-align: center;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .service-item {
    font-size: 1.2em;
    margin: 10px;
    padding: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
  }
  
  .service-item:hover {
    background-color: #ddd;
  }
  </style>
  