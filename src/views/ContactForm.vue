<template>
  <div id="contact-form" class="contact-form">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" v-model="subject" required />
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here (e.g., send email)
      // Example: Send email using an API or use a form submission service
      console.log('Form submitted!');
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: auto;
  text-align: center;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 2em;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-group {
  width: 100%;
}

label {
  font-size: 1.1em;
  margin-bottom: 5px;
  display: block;
  text-align: left;
  width: 100%;
}

input, textarea {
  width: calc(100% - 20px);
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #555;
}
</style>
<!--  -->