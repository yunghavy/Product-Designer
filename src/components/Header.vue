<!-- eslint-disable vue/multi-word-component-names -->

<template>
    <header class="header">
      <div class="logo">
       <h4>Personal Portifolio</h4> 
      </div>
      <nav>
        <ul>
          <li><a href="#about">About Me</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
  }
  </script>
  
  <style scoped>
  .header {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  
  .logo img {
    max-height: 50px;
  }
  
  nav ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
  }
  
  nav ul li {
    margin-right: 20px;
  }
  
  nav ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s; /* Add a smooth transition */
  }
  
  nav ul li a:hover {
    border-bottom: 2px solid #fff;
    color: #ccc; /* Change color on hover */
  }
  
  @media screen and (max-width: 768px) {
    .header {
      flex-direction: column;
      align-items: flex-start;
    }
  
    nav {
      margin-top: 10px;
    }
  
    nav ul {
      flex-direction: column;
      align-items: flex-start;
    }
  
    nav ul li {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  </style>
  