<template>  
  <p>Test</p>
</template>

<script>
export default {
  /*props: [
    'todo'
  ],*/
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
