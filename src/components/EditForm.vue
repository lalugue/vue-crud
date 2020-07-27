<template>  
  <form>
  <div class="form-group">    
    <label>Todo Description</label>
    <input id="todoInput" class="form-control" v-bind:placeholder="todo_description">   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Owner</label>
    <input id="ownerInput" class="form-control" :placeholder="todo_responsible">
  </div>
  <div>
  <b-dropdown id="dropdownPriority" :text="todo_priority" class="m-md-2 bg-success">
    <b-dropdown-item class="btn btn-success">Low</b-dropdown-item>
    <b-dropdown-item class="btn btn-warning">Medium</b-dropdown-item>
    <b-dropdown-item class="btn btn-danger">High</b-dropdown-item>    
  </b-dropdown>
</div>
  <br/>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
export default {
  data: function(){
    return{
      test: "hello",
      todo_description: this.$route.params.todo_description,
      todo_responsible: this.$route.params.todo_responsible,
      todo_priority: this.$route.params.todo_priority
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
