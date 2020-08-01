<template> 
<div>  
  <h1> Todo List </h1>
  <router-link :to="{name: 'Add'}"><button id="addButton" class="btn btn-primary">Add Task</button></router-link>
  <table class="table">
    <thead>
    <tr>
      <th scope="col">Todo</th>
      <th scope="col">Owner</th>
      <th scope="col">Priority</th>
      <th scope="col">Completed</th>
      <th scope="col">Actions</th>
                   
    </tr>
  </thead>
  <tbody v-for="todo in todos" v-bind:key="todo._id">
    <tr>
      <td>{{todo.todo_description}}</td>
      <td>{{todo.todo_responsible}}</td>
      <td>{{todo.todo_priority}}</td>
      <td>
        {{todo.todo_completed}}
       <span v-bind:class="todo.todo_completed ? 'oi oi-check text-success' : 'oi oi-x text-danger'"></span> 
      </td>
      <td><router-link :to="{name: 'Edit', params: todo}"><button class="btn btn-primary">Edit</button></router-link>
      <button @click="setDeleteData({todo_description: todo.todo_description, id: todo.__id})" class="btn btn-danger" v-b-modal="'my-modal'">Delete</button></td>
    </tr>
  </tbody> 
  </table>
 <DeleteModal :deleteData="deleteData"></DeleteModal> 
</div>
</template>

<script>
import axios from 'axios';
import DeleteModal from './DeleteModal.vue'

const API_GET = "http://localhost:4000/todos"



export default {
  data() {
    return {
      todos: [],
      errors: [],
      deleteData: {}      
    }
  },
  components: {
    DeleteModal
  },
  methods: {  

    setDeleteData: function(data){
      this.deleteData = data
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

#addButton{
  float: right;
  margin: 10px;
}

h1{
  text-align: center;
}
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
