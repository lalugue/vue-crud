<template>
   
    <div @showPopup="showPopupHandler()">
    <b-modal id="my-modal" ref="my-modal" hide-footer title="Delete Confirmation">
      <div class="d-block text-center">
        <h3>Are you sure?</h3>
      </div>
      <b-button class="mt-3" variant="outline-danger" block @click="hideModal">No</b-button>
      <b-button class="mt-2" variant="outline-warning" block @click="toggleModal">Yes</b-button>
    </b-modal>
    </div>
  
</template>

<script>
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
      showPopupHandler(e){
          console.log("received emit, showing modal")
          this.showModal()
      }
    },
    created(){
      this.$on('showPopup', () => {
            console.log("hello Popup")
      })

      this.showModal()
    }
  }
</script>