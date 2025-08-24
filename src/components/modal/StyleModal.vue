<script setup>
const modelValue = defineModel('modelValue', { type: Boolean, default: false })
const selectedImage = defineModel('selectedImage', { type: String, default: '' })
</script>


<template>
  <v-dialog v-model="modelValue" max-width="900px">
    <div class="dialog-body">
      <div class="dialog-actions">
        <v-btn
          class="dialog-close-btn"
          density="comfortable"
          variant="tonal"
          size="small"
          color="primary"
          icon="mdi-close"
          @click="modelValue = false"
        ></v-btn>
      </div>

      <div class="prev-img">
        <v-img :src="selectedImage" contain></v-img>
      </div>

      <div class="openion-content">
        <div class="text-subtitle-2 font-weight-regular text-grey-darken-2">
          Style Quiz Selection
        </div>
        <h6 class="text-h6 font-weight-medium text-grey-darken-3 mt-1">
          What do you like about this photo?
        </h6>

        <v-btn-toggle
          multiple
          class="openion-options d-flex flex-wrap ga-2 mt-6"
        >
          <v-btn
            value="color"
            height="40"
            class="text-capitalize text-primary"
            size="small"
            color="primary"
            rounded="lg"
            variant="outlined"
          >
            The color palette
          </v-btn>
          <v-btn
            value="vibe"
            height="40"
            class="text-capitalize text-primary"
            size="small"
            color="primary"
            rounded="lg"
            variant="outlined"
          >
            The overall vibe
          </v-btn>
          <v-btn
            value="product"
            height="40"
            class="text-capitalize text-primary"
            size="small"
            color="primary"
            rounded="lg"
            variant="outlined"
          >
            A specific product in the photo
          </v-btn>
        </v-btn-toggle>

        <v-textarea
          class="custom-textarea mt-10 text-caption text-grey-darken-2"
          rounded="lg"
          rows="8"
          variant="outlined"
          focused
          hide-details
          label="Client Note"
          placeholder="Add comment"
        ></v-textarea>

        <v-btn block elevation="0" height="42" rounded="lg" color="primary" class="mt-7">
          Save
        </v-btn>
      </div>
    </div>
  </v-dialog>
</template>



<style lang="scss" scoped>
.dialog-body {
  width: 100%;
  background-color: #fff;
  padding: 30px;
  height: 85vh;
  max-height: 800px;
  border-radius: 26px;
  display: flex;
  gap: 20px;
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
