
<script setup>
const modelValue = defineModel('modelValue', { type: Boolean, default: false })
const selectedImage = defineModel('selectedImage', { type: String, default: '' })

</script>

<template>
  <v-dialog v-model="modelValue" max-width="800px">
    <div class="dialog-body">
      <div class="prev-img">
        <v-img :src="selectedImage" contain></v-img>
      </div>

      <div class="dialog-actions">
        <v-btn
          class="close-btn"
          density="comfortable"
          variant="tonal"
          size="small"
          color="primary"
          icon="mdi-close"
          @click="modelValue = false"
        />
        <v-btn
          class="close-btn mt-3"
          density="comfortable"
          variant="tonal"
          size="small"
          color="secondary"
          icon="mdi-heart"
        />
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
  position: relative;

  .prev-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #f2f2f2ae;
    border-radius: 16px;
  }
}

.dialog-actions {
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
