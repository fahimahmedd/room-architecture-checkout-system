<script setup>
import Filter from "@/components/design/Filter.vue";
import ImageModal from "@/components/modal/ImageModal.vue";
import Photo from "@/components/design/Photo.vue";
import { ref } from "vue";

const filterTrigger = ref(false);
const photoTrigger = ref(false);

const images = [
  "/images/design/s-1.jpg",
  "/images/design/s-2.jpg",
  "/images/design/s-3.jpg",
  "/images/design/s-4.jpg",
  "/images/design/s-5.jpg",
  "/images/design/s-6.jpg",
  "/images/design/s-7.jpeg",
  "/images/design/s-8.jpeg",
  "/images/design/s-9.jpeg",
  "/images/design/s-10.jpg",
  "/images/design/s-11.jpg",
  "/images/design/s-12.png",
  "/images/design/s-13.png",
  "/images/design/s-14.jpg",
  "/images/design/s-15.jpg",
  "/images/design/s-16.jpeg",
  "/images/design/s-17.jpg",
  "/images/design/s-18.jpg",
  "/images/design/s-19.jpeg",
];

const previewDialog = ref(false);
const selectedImage = ref("");

const openPreview = (image) => {
  selectedImage.value = image;
  previewDialog.value = true;
};
</script>


<template>
  <div class="design-top">
    <v-container>
      <v-row align="center">
        <v-col md="8">
          <h4 class="font-weight-bold secondery-font">
            Style Quiz: How Do You Want Your Room To Look?
          </h4>
        </v-col>
        <v-col md="4">
          <div class="d-flex align-center justify-end ga-2">
            <v-btn
              size="small"
              elevation="0"
              rounded
              min-height="42"
              class="px-6 text-capitalize font-weight-bold"
              color="primary"
              prepend-icon="mdi-tune-vertical"
              @click="filterTrigger = true"
            >
              Style Filter
            </v-btn>
            <v-btn
              size="small"
              variant="outlined"
              color="brown-lighten-1"
              rounded
              min-height="42"
              class="outline-color text-capitalize px-6 font-weight-bold"
              @click="photoTrigger = true"
            >
              View Selected Photo
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <Filter v-model="filterTrigger"/>
  <Photo v-model="photoTrigger"/>


  <v-container>
    <div class="design-wrapper">
      <div class="design-item" v-for="(image, index) in images" :key="index">
        <v-img :src="image" cover></v-img>

        <div class="overly">
          <v-btn
            class="preview-btn"
            density="comfortable"
            variant="plain"
            size="x-small"
            color="secondary"
            icon="mdi-magnify"
            @click="openPreview(image)"
          ></v-btn>
        </div>
        
        <!-- <div class="selected-overly">
          <div class="selected-icon">
            <v-icon color="secondary" size="sm">mdi-check</v-icon>
          </div>
        </div> -->
      </div>
    </div>
  </v-container>

  <!-- Image Preview Modal -->
   <ImageModal v-model:modelValue="previewDialog" v-model:selectedImage="selectedImage" />

</template>



<style lang="scss" scoped>
.design-top {
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e094;
  h4 {
    font-size: 30px;
  }
  .outline-color {
    border-color: #b6b3ad94;
  }
}
.design-wrapper {
  column-count: 5;
  column-gap: 15px;
  width: 100%;
  margin-top: 15px;
}
.design-item {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  &:hover .overly {
    opacity: 1;
  }
  .overly {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 0.3s ease;
    background-image: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.8));
    opacity: 0;
    padding: 10px;

    .preview-btn {
      height: 35px;
      width: 35px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.2s ease;
      opacity: 0.8;
      &:hover {
        opacity: 1;
        transform: scale(1.1);
        box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.15);
      }
    }
  }
}

.selected-overly {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  .selected-icon {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 50%;
  }
}

.dialog-body {
  width: 100%;
  background-color: #fff;
  padding: 30px;
  height: 85vh;
  max-height: 800px;
  border-radius: 26px;
  position: relative;
  .prev-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f2f2f2ae;
    border-radius: 16px;
  }
}

.dialog-actions{
position: absolute;
  top: 10px;
  right: 10px;
}
.close-btn {
  
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
</style>
