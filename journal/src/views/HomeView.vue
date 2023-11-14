<script>
export default{
  methods: {
    goToDayBook(){
      this.$router.push({name: 'daybook'})
    }
  }
}
</script>

<template>
  <main>
    <h1>home</h1>
    <button class="btn btn-primary" @click="goToDayBook">yellonw</button>
    <button class="btn btn-success" @click="this.$router.push({name: 'map'})">maps</button>
    <button class="btn btn-danger" @click="goToDayBook">amarillo</button>
  </main>
</template>


<style scoped>
button{
  margin-right: 10px;
}
</style>
