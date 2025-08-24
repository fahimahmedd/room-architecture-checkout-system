<script setup>
import { ref } from "vue";


const images = [
  "/images/design/s-1.jpg",
  "/images/design/s-2.jpg",
  "/images/design/s-3.jpg",
  "/images/design/s-4.jpg",
  "/images/design/s-18.jpg",
  "/images/design/s-19.jpeg",
];


const styleProgress = ref([
  {
    id: 1,
    progress: 41,
    title: "Farmhouse",
    description: "You feel grounded at home when surrounded by raw wood, warm tones, and leather fabrics. You are inspired by the rustic character and organic vibes of a wholesome barn. Earthy colors and textures bring the calmness and warmth of outside, inside."
  },
  {
    id: 2,
    progress: 30,
    title: "Transitional",
    description: "You like to mix it up! Blending the old with the new allows you to create a punchy version of the traditional design. They like to call you the décor mixologist, because in your eyes, garnishing curved furnishings with straight-lined accents is the only way to drink in your newly designed space."
  },
  {
    id: 3,
    progress: 29,
    title: "Bohemian",
    description: "Peace, love, and patterns. You love to use layered textures, elaborate embellishments, and vibrant colors to house your beloved plants. These are true signs of an artistic eye and a whimsical flair for embodying wanderlust. Chill is practically woven into the threads of your earthy, rattan accent baskets."
  }
]);
</script>

<template>
  <v-container>
    <v-row class="pt-8">
      <v-col>
        <h6 class="text-subtitle-2 font-weight-regular text-grey-darken-2">
          YOUR STYLE
        </h6>

        <div class="rating-progress">
          <div
            class="rating-item"
            v-for="item in styleProgress"
            :key="item.id"
          >
            <!-- Circular progress -->
            <div>
              <v-progress-circular
                :value="item.progress"
                size="90"
                width="9"
                color="primary"
                :model-value="item.progress"
              >
                {{ item.progress }}%
              </v-progress-circular>
            </div>

            <!-- Title & description -->
            <div>
              <h4 class="text-h4 font-weight-medium text-grey-darken-2">
                {{ item.title }} <v-icon>mdi-chevron-right</v-icon>
              </h4>
              <p class="text-body-1 font-weight-regular text-grey-darken-2">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </v-col>

      <v-col>
        <div class="design-wrapper">
          <div
            class="design-item"
            v-for="(image, index) in images"
            :key="index"
          >
            <v-img :src="image" cover></v-img>

            <div class="overly">
              <v-btn
                class="preview-btn"
                density="comfortable"
                variant="plain"
                size="x-small"
                color="secondary"
                icon="mdi-pencil"
              ></v-btn>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">
.design-wrapper {
  column-count: 2;
  column-gap: 15px;
  width: 100%;
}
.rating-progress{
  padding-right: 20px;
}
.rating-item{
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
.design-item {
  width: 100%;
  height: auto;
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
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
</style>
