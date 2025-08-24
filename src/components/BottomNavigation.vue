<template>
    <div class="bottom-navigation">
        <v-container>
             <div class="navigation-wrapper">
                <v-btn variant="tonal" rounded min-height="45" class="text-capitalize px-6 font-weight-bold"> Back </v-btn>
                <v-btn  rounded min-height="45" class="px-10 text-capitalize font-weight-bold" color="primary"> Next </v-btn>
             </div>
        </v-container>
        
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.bottom-navigation {
  position: fixed;
  bottom: 0;
  padding: 16px 0;
  width: 100%;
  background-color: #ece9e6e7;
  z-index: 1005;
}
.navigation-wrapper {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}
</style>