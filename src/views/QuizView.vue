<script setup>
  import { ref, watch } from 'vue';
  import q from "../data/quizes.json";
  import Card from '../components/Card.vue';

  const quizes = ref(q);
  const search = ref("");

  watch(search, () => {
    quizes.value = q.filter(quize => quize.name.toLowerCase().includes(search.value.toLowerCase()));
  });

</script>

<template>
 <div>
  <header>
    <h1>Quizes</h1>
    <input type="text" v-model.trim="search" placeholder="Search...">
  </header>

  <div class="options-container">
    <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  </div>
 </div>
</template>

<style scoped>
  .container{
    max-width: 1000px;
    margin: 0 auto;
  }

  header{
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1{
    color: black;
    font-weight: bold;
    margin-right: 30px;
  }

  header input{
    border:none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }
</style>
