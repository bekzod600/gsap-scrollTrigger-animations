<template>
  <div>
    <nav class="menu">
      <RouterLink to="/scroll-gsap">Scroll GSAP</RouterLink>
      <RouterLink to="/scroll-gsap-two">Scroll GSAP Two</RouterLink>
      <RouterLink to="/parallax-effect">Parallax Effect</RouterLink>
      <RouterLink to="/landing-gsap">Landing GSAP</RouterLink>
      <RouterLink to="/3d-model">3D Model</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.menu {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #eee;
}
.menu a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
.menu a.router-link-active {
  color: #42b983;
}
</style>
