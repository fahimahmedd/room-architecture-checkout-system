<script setup>
import { ref, watch } from "vue";
import SinglePhoto from "./SinglePhoto.vue";

const drawer = defineModel({
  type: Boolean,
  default: false,
});
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : 'right'"
    temporary
    width="400"
    class="photo-drawer"
  >
  <div class="drawer-content">
    <div class="drawer-top d-flex justify-space-between">
      <div>
        <div class="dialog-title font-weight-bold">
          Select 7 Photos to Continue
        </div>
        <p class="text-subtitle-2 font-weight-regular text-grey-darken-2">
          You can also upload your own inspiration photos. Click to add comments
          to your selects.
        </p>
      </div>
      <v-btn
        class="close-btn"
        density="comfortable"
        variant="tonal"
        size="x-small"
        color="secondary"
        icon="mdi-close"
        @click="drawer = false"
      ></v-btn>
    </div>

    <div class="user-manual my-5">
      <div class="user-action d-flex align-center ga-3">
        <v-btn
          rounded
          color="primary"
          elevation="0"
          class="text-capitalize px-5 text-subtitle-2 font-weight-bold"
        >
          Upload Your Photo(s)
        </v-btn>
        <v-btn
          rounded
          variant="outlined"
          color="primary"
          elevation="0"
          class="text-capitalize px-5 text-subtitle-2 font-weight-bold"
          prepend-icon="mdi-plus"
        >
          Add Links
        </v-btn>
      </div>

      <div class="manual-upload">
        <v-file-upload
          clearable
          density="comfortable"
          title="Select or Drag and Drop file's here"
          variant="comfortable"
        ></v-file-upload>
      </div>

      <div class="manual-link">
         <v-text-field
            append-inner-icon="mdi-delete"
            type="text"
            variant="filled"
            bg-color="blue-grey-lighten-5"
            placeholder="https://"
            hide-details
            @click:append-inner="drawer = false"
          ></v-text-field>
      </div>
    </div>
    <div class="photo-content">

      <SinglePhoto/>
    </div>
    
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.photo-drawer {
  background-color: #fcfbfa;
}

.close-btn {
  height: 35px;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
}
.dialog-title {
  font-size: 18px;
  color: #333;
}
.photo-content {
  // padding: 20px 0 0 20px;
}
.user-manual {
  padding: 12px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #c3c3c342;
}
.manual-upload {
  padding: 20px 10px 10px 10px;
}
.manual-link{
  padding: 20px 10px 10px 10px;

}
.drawer-content{
  padding: 25px 25px 100px 25px;
}
</style>
