<template>      
  <form>
  <h1>Add Todo</h1>
  <div class="form-group">    
    <label>Todo Description</label>
    <input id="todoInput" class="form-control" v-model="todo_description">   
  </div>
  <div class="form-group">
    <label>Owner</label>
    <input id="ownerInput" class="form-control" v-model="todo_responsible">
  </div>  
  <div>
  <b-dropdown id="dropdownPriority" :text="todo_priority" class="m-md-2" :variant="priority_color">
    <b-dropdown-item variant="success" @click="setPriority('Low','success')" >Low</b-dropdown-item>
    <b-dropdown-item variant="warning" @click="setPriority('Medium', 'warning')">Medium</b-dropdown-item>
    <b-dropdown-item variant="danger"  @click="setPriority('High', 'danger')">High</b-dropdown-item>    
  </b-dropdown>
  </div>
  <div class="form-group">        
    <input id="completed" name="completed" type="checkbox"  :value="todo_completed" v-model="todo_completed">   
    <label for="completed">Completed</label>
  </div>
  <br/>
  
  <router-link :to="{name: 'TodoTable'}"><button type="submit" class="btn btn-primary mr-1" @click="addTodo()">Submit</button></router-link>  
  <router-link :to="{name: 'TodoTable'}"><button class="btn btn-danger mr-1">Cancel</button></router-link>
</form>
</template>

<script>
import axios from 'axios';
const API_ADD = "http://localhost:4000/todos/add/"


export default {
  methods: {
    setPriority: function(value, color){      
      this.priority_text = value
      this.priority_color = color 
      this.todo_priority = value     
    },
    addTodo: function(){
      let newTodo = {
            todo_description : this.todo_description,
            todo_responsible : this.todo_responsible,
            todo_priority : this.todo_priority,
            todo_completed : this.todo_completed
        }

      axios.post(API_ADD, newTodo)
      
      this.$router.push('/')
      this.$router.go(0)
      
    }
  },
  data: function(){
    return{     
      todo_description: "",
      todo_responsible: "",
      todo_priority: "Priority",
      todo_completed: false,
      priority: [{ value: null, text: 'Priority', class: "text-primary" },"Low","Medium","High"],
      priority_text: "Priority",
      priority_color: "" 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  margin: 20px;
}

label {
  margin-left: 10px;
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
