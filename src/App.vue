<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style>

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
