<template>   
    <div>
    <b-modal id="my-modal" ref="my-modal" hide-footer title="Delete Confirmation">
      <div class="d-block text-center">
        <h3>Are you sure?</h3>        
        <h4><i>{{deleteData.todo_description}}</i></h4>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="deleteDataFunc">Yes</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">No</b-button>
    </b-modal>
    </div>
  
</template>

<script>
import axios from "axios"
const API_DELETE = "http://localhost:4000/todos/delete/"

  export default {
    
    methods: {
      showModal() {
        this.$refs['my-modal'].show()
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      },
      deleteDataFunc() {

        console.log("deleting: ")
        console.log(this.deleteData)

        axios.post(API_DELETE + this.deleteData.id)
             .then(res =>{                
                console.log("post request sent")
                console.log(res.data)
                this.$router.push('/')
                this.$router.go(0)

                this.hideModal()
              })        
      
        
      }
    },    
    props: ['delete-data'] //kebab-case for camelCase    
  }
</script>