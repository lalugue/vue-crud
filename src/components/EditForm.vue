<template>  
  <form>
  <div class="form-group">    
    <label>Todo Description</label>
    <input id="todoInput" class="form-control" v-bind:placeholder="todo_description" v-model="new_todo_description">   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Owner</label>
    <input id="ownerInput" class="form-control" :placeholder="new_todo_responsible">
  </div>  
  <div>
  <b-dropdown id="dropdownPriority" :text="priority_text" class="m-md-2" :variant="priority_color">
    <b-dropdown-item variant="success" @click="setPriority('Low','success')" >Low</b-dropdown-item>
    <b-dropdown-item variant="warning" @click="setPriority('Medium', 'warning')">Medium</b-dropdown-item>
    <b-dropdown-item variant="danger"  @click="setPriority('High', 'danger')">High</b-dropdown-item>    
  </b-dropdown>
</div>
  <br/>
  <button class="btn btn-primary" @click="updateTodo()">Submit</button>
</form>
</template>

<script>
export default {
  methods: {
    setPriority: function(value, color){
      this.submit_data.todo_priority = value
      this.priority_text = value
      this.priority_color = color      
    },
    updateTodo: function(){
      alert(this.new_todo_description)
    }
  },
  data: function(){
    return{
      test: "hello",
      todo_description: this.$route.params.todo_description,
      todo_responsible: this.$route.params.todo_responsible,
      todo_priority: this.$route.params.todo_priority,
      priority: [{ value: null, text: 'Priority', class: "text-primary" },"Low","Medium","High"],
      priority_text: "Priority",
      priority_color: "",
      submit_data: [],
      new_todo_description: ""

    }
  },  
  mounted(){
    console.log("EditForm is mounted")
    console.log(this.$route.params)
    console.log(this)
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
