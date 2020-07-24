<template>  
  <ul v-if="todos && todos.length">
    <li v-for="todo in todos" v-bind:key="todo._id">
      <p><strong>{{todo.todo_description}}</strong></p>
      <p>{{todo.todo_responsible}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';
const API_GET = "http://localhost:4000/todos"

export default {
  data() {
    return {
      todos: [],
      errors: []
    }
  },

  // Fetches posts when the component is created.
  created() {
    axios.get(API_GET)
    .then(response => {
      // JSON responses are automatically parsed.
      this.todos = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
