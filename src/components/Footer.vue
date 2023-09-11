<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <footer id="footer" class="footer" >
      <div class="content">
        <!-- Add content for Footer section -->
        <p>&copy; 2023 Personal Portifolio. All Rights Reserved.</p>
        <div class="social-links">
          <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Add any component-specific logic here
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
    text-align: center;
  }
  
  .content {
    max-width: 800px;
    margin: auto;
  }
  
  .social-links {
    margin-top: 10px;
  }
  
  .social-links a {
    margin: 0 10px;
    font-size: 1.5em;
    color: #fff;
    text-decoration: none;
  }
  
  .social-links a:hover {
    color: #ccc;
  }
  </style>
  