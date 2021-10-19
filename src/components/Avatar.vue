<template>
    <div class="row">
        <div class="col" @click="showEditButton=true">
            <img class="avatar" 
                alt="GidonyAvatar" 
                v-b-tooltip.hover title="Click image to update."
                :src="uploadedNewAvatar?imagePreview:originalImage">
        </div>

        <div v-if="showEditButton" class="mt-2 large-12 medium-12 small-12 cell">
            <button>
                <input type="file" style="color:transparent; width:140px;" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
                <button class="btn btn-info" @click.prevent="showEditButton=false">Cancel</button>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Avatar.vue",
    data() {
      return {
        file: '',
        showPreview: false,
        imagePreview: '',
        originalImage: '',
        uploadedNewAvatar: false,
        showEditButton: false,
      }
    },
    mounted() {
        this.originalImage = require('../assets/gidonyavatar.png');
    },
    methods: {
 /*
        Handles a change on the file upload
      */
      handleFileUpload(){
        /*
          Set the local file variable to what the user has selected.
        */
        this.file = this.$refs.file.files[0];

        /*
          Initialize a File Reader object
        */
        let reader  = new FileReader();

        /*
          Add an event listener to the reader that when the file
          has been loaded, we flag the show preview as true and set the
          image to be what was read from the reader.
        */
        reader.addEventListener("load", function () {
        //   this.showPreview = true;
        this.uploadedNewAvatar = true;
          this.imagePreview = reader.result;
        }.bind(this), false);
        this.showEditButton = false;

        /*
          Check to see if the file is not empty.
        */
        if( this.file ){
          /*
            Ensure the file is an image file.
          */
          if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
            /*
              Fire the readAsDataURL method which will read the file in and
              upon completion fire a 'load' event which we will listen to and
              display the image in the preview.
            */
            reader.readAsDataURL( this.file );
          }
        }
      }
    }
}
</script>

<style>
.avatar {
    border-radius: 50%;
    width: 96px;
    height: 96px;
    /* display: block;
    object-fit: contain;
    object-position: initial;
    filter: none; */
}
.avatar:hover {
    cursor: pointer
}

</style>