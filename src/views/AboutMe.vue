<template>
  <div id="about" class="about">
    <div class="content">
      <div class="image-container">
        <img src="@/assets/passion.jpg" alt="Passion Image" class="passion-image" />
      </div>
      <div class="text-container">
        <h2>About Me</h2>
        <p>
          I'm a UI/UX designer with a passion for crafting intuitive and visually appealing digital experiences. My design journey is driven by a deep-seated commitment to user-centered design principles.
        </p>
        <p>
          With a keen eye for detail, I specialize in creating designs that not only look stunning but also engage and delight users.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  background-color: #f5f5f5;
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
