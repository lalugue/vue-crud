<template>  
  <form>
  <h1>Update Todo</h1>
  <div class="form-group">    
    <label>Todo Description</label>
    <input id="todoInput" class="form-control" :placeholder="todo_description" v-model="new_todo_description">   
  </div>
  <div class="form-group">
    <label>Owner</label>
    <input id="ownerInput" class="form-control" :placeholder="todo_responsible" v-model="new_todo_responsible">
  </div>  
  <div>
  <b-dropdown id="dropdownPriority" :text="new_todo_priority" class="m-md-2" :variant="priority_color">
    <b-dropdown-item variant="success" @click="setPriority('Low','success')" >Low</b-dropdown-item>
    <b-dropdown-item variant="warning" @click="setPriority('Medium', 'warning')">Medium</b-dropdown-item>
    <b-dropdown-item variant="danger"  @click="setPriority('High', 'danger')">High</b-dropdown-item>    
  </b-dropdown>
  </div>
  <div class="form-group">        
    <input id="completed" name="completed" type="checkbox"  :value="todo_completed" v-model="new_todo_completed">   
    <label for="completed">Completed</label>
  </div>
  <br/>
  
<router-link :to="{name: 'TodoTable'}"><button type="submit" class="btn btn-primary" @click="updateTodo()">Submit</button></router-link>&emsp;
  <router-link :to="{name: 'TodoTable'}"><button class="btn btn-danger">Cancel</button></router-link>
</form>
</template>

<script>
import axios from 'axios';
const API_UPDATE = "http://localhost:4000/todos/update/"

export default {
  methods: {
    setPriority: function(value, color){      
      this.priority_text = value
      this.priority_color = color 
      this.new_todo_priority = value     
    },
    updateTodo: function(){
      let newTodo = {
          todo_description : this.new_todo_description,
          todo_responsible : this.new_todo_responsible,
          todo_priority : this.new_todo_priority,
          todo_completed : this.new_todo_completed
        }
      
      axios.post(API_UPDATE + this.id, newTodo)            
      
      //return to 'homepage'
      this.$router.push('/')
      this.$router.go(0)
      
    }
  },
  data: function(){
    return{      
      id: this.$route.params._id,
      todo_description: this.$route.params.todo_description,
      todo_responsible: this.$route.params.todo_responsible,
      todo_priority: this.$route.params.todo_priority,
      todo_completed: this.$route.params.todo_completed,
      //for setting the Priority dropdown
      priority: [{ value: null, text: 'Priority', class: "text-primary" },"Low","Medium","High"],
      priority_text: "Priority",
      priority_color: "",
      //a copy of the data for updating       
      new_todo_responsible : this.$route.params.todo_responsible,
      new_todo_description : this.$route.params.todo_description,
      new_todo_priority : this.$route.params.todo_priority,
      new_todo_completed : this.$route.params.todo_completed   

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
