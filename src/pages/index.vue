<script setup></script>

<template>
  <v-container>
    <div class="room-container">
      <div class="text-center">
        <h1 class="title font-weight-bold secondery-font">
          Interior Design Room Layouts by Certified Experts
        </h1>
        <p>
          Get inspiration for every single room in your home — from the dining
          room to the office to the entryway. Select the rooms you wish to work
          on first and the number of rooms needed at this time. From there,
          we’ll take you through a step-by-step guide on how you want your
          interior layout to look. Browse many different styles of homes
          constructed by certified interior designers, cherry-picking the ones
          that speak to you. Search beautiful homes to find your perfect fit
          today.
        </p>
      </div>

      <div class="room-wrapper mt-10">
        <v-row>
          <v-col class="flex-column">
            <div class="room-item">
              <div class="room-img">
                <v-img src="/public/images/home/h-1.jpg" cover></v-img>

                <div class="choose-wrap">
                  <div class="change-icon">
                    <span class="mdi mdi-minus"></span>
                  </div>
                  <div class="selected-num">1</div>
                  <div class="change-icon">
                    <span class="mdi mdi-plus"></span>
                  </div>
                </div>
              </div>
              <div class="room-content">
                <span class="text-subtitle-2 font-weight-medium"
                  >Living Room</span
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
.room-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
.title {
  font-size: 38px;
  line-height: 1.2;
  margin-bottom: 10px;
}
.room-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}
.flex-column {
  flex: 0 0 20%;
  width: 20%;
}
.room-item {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.05), 0 1px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  .room-img {
    width: 100%;
    height: 150px;
    overflow: hidden;
    position: relative;

    .choose-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 9;
      height: 30px;
      min-width: 76px;
      transition: all 0.2s;
      transform: translateX(-50%) translateY(-50%);

      padding: 2px;
      background: rgba(241, 242, 242, 0.9);
      border-radius: 15px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;

      .selected-num {
        font-family: "Open Sans", sans-serif;
        background: #ff985c;
        white-space: nowrap;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        font-size: 12px;
        border-radius: 50%;
        height: 24px;
        font-weight: 600;
        color: #fff;
        min-width: 24px;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.25);
      }
    }

    .change-icon {
      transition: opacity 0.5s;
      // opacity: 0;
      width: 16px;
      height: 16px;
      margin: 0 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        font-size: 16px;
        color: #7585a4;
        cursor: pointer;
      }
    }
  }
  .room-content {
    padding: 10px;
    text-align: center;
    span {
      color: #333;
    }
  }
}
</style>
