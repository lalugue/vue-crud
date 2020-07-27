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
  <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    {{todo_priority}}
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Low</a>
      <a class="dropdown-item" href="#">Medium</a>
      <a class="dropdown-item" href="#">High</a>
    </div>
  </div>
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
