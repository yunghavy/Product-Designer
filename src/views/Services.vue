<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="services">
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
          { id: 1, name: "Wedding Photography" },
          { id: 2, name: "Portrait Photography" },
          { id: 3, name: "Event Coverage" },
          { id: 4, name: "Corporate Shoots" },
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
  