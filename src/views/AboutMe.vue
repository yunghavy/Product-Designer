<template>
    <div id="about" class="about" >
      <div class="content">
        <div class="image-container">
          <img src="@/assets/passion.jpg" alt="Passion Image" class="passion-image" />
        </div>
        <div class="text-container">
            <h2>About Me</h2>
        <p>
          I am a passionate front-end developer with a focus on creating visually stunning and user-friendly websites. This project is designed to serve as a showcase for photographers, designers, or anyone looking to exhibit their work in an elegant and interactive manner.
        </p>
        <p>
          The project is intentionally front-end only, providing a seamless experience for users to explore and engage with your content. If you're interested in integrating backend functionalities or have specific customization needs, feel free to get in touch!
        </p>
        <p>
          For more information or to discuss potential enhancements, please don't hesitate to reach out to me via email or give me a call. I'm excited to collaborate and bring your vision to life!
        </p>
      </div>
    </div>
    </div>
  </template>
  
  <style scoped>
  .about {
    background-color: #f9f9f9;
    padding: 50px 20px;
    text-align: center;
  }
  
  .content {
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  
  .image-container {
    max-width: 300px;
    flex: 1;
  }
  
  .passion-image {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .text-container {
    flex: 2;
    text-align: left;
  }
  
  h2 {
    font-size: 2em;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.1em;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  </style>
  