<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <header class="header">
      <div class="logo">
          <h4>JK</h4> 
      </div>
      <nav>
          <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
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
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
}

body {
  padding-top: 70px; 
}
.logo h4 {
    color: #000; 
    transition: color 0.3s; 
}

nav ul li a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s; 
}

nav ul li a:hover {
    color: #FFD700; 
}

.logo h4:hover {
    color: #FFD700; 
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
