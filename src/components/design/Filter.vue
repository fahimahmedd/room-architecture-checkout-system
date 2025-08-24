<script setup>
import { ref, watch } from "vue";

const drawer = defineModel({
  type: Boolean,
  default: false,
});
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});


const styles = [
  { id: 1, name: "Art Deco" },
  { id: 2, name: "Asian" },
  { id: 3, name: "Bohemian" },
  { id: 4, name: "Boho Farmhouse" },
  { id: 5, name: "Coastal" },
  { id: 6, name: "Cottage Farmhouse" },
  { id: 7, name: "Eclectic" },
  { id: 8, name: "Eclectic Boho" },
  { id: 9, name: "Eclectic Farmhouse" },
  { id: 10, name: "English Farmhouse" },
  { id: 11, name: "Farmhouse" },
  { id: 12, name: "French Farmhouse" },
];

const selectedStyles = ref([]);
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : 'right'"
    temporary
    width="350"
    class="filter-drawer"
  >
    <div class="drawer-top d-flex justify-space-between align-center">
      <span class="text-subtitle-1 font-weight-medium text-grey-darken-2">Style Filter</span>
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

    <div class="filter-content">
        <div
          v-for="style in styles"
          :key="style.id"
          class="filter-item"
        >
          <v-checkbox-btn
            v-model="selectedStyles"
            :label="style.name"
            :value="style.id"
            :id="'style-' + style.id"
            hide-details
            density="compact" 
            class="filter-checkbox"
          ></v-checkbox-btn>
        </div>
    </div>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.filter-drawer {
  background-color: #fcfbfa;
  padding: 20px;
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

.filter-content {
   padding: 20px 0 0 20px;
}

</style>
