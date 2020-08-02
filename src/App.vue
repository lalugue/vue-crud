<template>
  <router-view>
    <div id="app">
      <img alt="Vue logo" src="./assets/logo.png">
      <TodoTable msg="test"/>
    </div>
  </router-view>
</template>

<script>
//add first component
import TodoTable from './components/TodoTable.vue'


export default {
  name: 'App',
  components: {
    TodoTable
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
