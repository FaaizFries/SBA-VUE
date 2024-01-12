<template>
  <div>
    <h2>Login</h2>
     <p v-if="showMessage">{{ message }}</p>
    <button @click="toggleMessage">Toggle Message</button>
    <p>{{ message }}</p>
    <input v-model="username" placeholder="Enter username" />
    <p>Username uses Data Binding: {{ customProp }}</p>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" v-model="username" required />

      <label for="password">Password:</label>
      <input type="password" v-model="password" required />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to the login page!",
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Logging in...");
    },
  },
};
</script>

<style scoped>
nav {
  padding: 30px;
  background: url('https://png.pngtree.com/background/20210712/original/pngtree-mysterious-cosmic-space-galaxy-nebula-background-picture-image_1179108.jpg') center/cover no-repeat;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  background-color: white;
}

nav a.router-link-exact-active {
  color: blue;

}
</style>
