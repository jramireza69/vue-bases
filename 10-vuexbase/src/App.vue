<script setup>
import Counter from "./components/Counter.vue";



</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    </div>
  </header>

  <main>
    <router-view/>
    <nav>
      <router-link to="/">counter</router-link>
      <router-link to ="/counter2">contador</router-link>
      
    </nav>
  </main>
</template>

<style scoped>
nav a{
  margin-right: 10px;
  font-size: 20px;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
