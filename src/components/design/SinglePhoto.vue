<script setup>
import { ref } from "vue";

const openionDialog = ref(false);
const selectedImage = ref("/images/design/s-11.jpg");

</script>

<template>
  <div class="single-photo" @click="openionDialog = true">
    <v-img :src="selectedImage" cover></v-img>
    <v-btn
      class="close-btn"
      density="comfortable"
      size="x-small"
      color="white"
      icon="mdi-close"
      elevation="6"
    ></v-btn>
    <div class="overly">
      <span class="text-grey-darken-3 text-subtitle-2 font-weight-medium"
        >Click & Tell
      </span>
    </div>
  </div>

   <StyleModal v-model:modelValue="openionDialog" v-model:selectedImage="selectedImage"/>
</template>

<style lang="scss" scoped>
.single-photo {
  width: 100%;
  height: auto;
  max-height: 450px;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  position: relative;
  cursor: pointer;
  .overly {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    padding: 16px;
    display: flex;
    align-items: flex-end;
    background-color: rgba(239, 239, 239, 0.834);
    transition: opacity 0.3s ease;
  }
}

.close-btn {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
}

.dialog-body {
  width: 100%;
  background-color: #fff;
  padding: 30px;
  height: 85vh;
  max-height: 800px;
  border-radius: 26px;
  display: flex;
  gap: 20px;
  //   height: 100%;
  position: relative;
  .prev-img {
    width: 50%;
    height: 100%;
    overflow: hidden;
    background-color: #f2f2f2ae;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .openion-content {
    width: 50%;
  }
}

.dialog-actions {
  position: absolute;
  top: 10px;
  right: 10px;
}
.dialog-close-btn {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  opacity: 1;
  &:hover {
    transform: scale(1.1);
  }
}
.openion-options {
  height: auto;
  .v-btn {
    border: 1px solid #c5c2c1 !important;
  }
}

</style>
